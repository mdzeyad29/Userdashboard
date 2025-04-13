import React, { useEffect, useState } from 'react';
import { collection, getDocs,deleteDoc ,doc,updateDoc} from 'firebase/firestore';
import { db } from '../Firebase';
import eye from "./image/eye.png"
import Group from "./image/Group.png"
import download from "./image/download.png"
export const DashboardTable = () => {
    const [lists,setList] = useState([]);
  
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) return;
        try {
          await deleteDoc(doc(db, 'users', id));
          setList(prevList => prevList.filter(user => user.id !== id));
          alert('User deleted successfully');
        } catch (error) {
          console.error('Error deleting user:', error);
          alert('Failed to delete user.');
        }
      };

      const handleSeen = async (id) => {
        try {
          // Find the current user in the list to get current status
          const user = lists.find(item => item.id === id);
          if (!user) return;
      
          const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
      
          const userRef = doc(db, 'users', id); // reference to the document
          await updateDoc(userRef, { status: newStatus });
      
          // Update the local state as well to reflect the change immediately
          setList(prev =>
            prev.map(item =>
              item.id === id ? { ...item, status: newStatus } : item
            )
          );
        } catch (error) {
          console.error("Error updating status:", error);
        }
      };
      

  useEffect(()=>{
    const FetchData = async()=>{
        const userData = collection(db,'users');
        const getdata = await getDocs(userData);
        const userList = getdata.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setList(userList);
    }
    FetchData();
  },[])

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Users</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">Phone Number</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 text-gray-800">{list.name}</td>
                <td className="px-6 py-4 text-gray-800">{list.email}</td>
                <td className="px-6 py-4 text-gray-800">{list.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
                      list.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {list.status}
                  </span>
                </td>
                <td className="flex gap-4 p-1 px-6 py-4">
                  <button className="" onClick={()=>handleSeen(list.id)}>
                  <img src={eye} alt=''/>
                  </button>
                  <button onClick={() => handleDelete(list.id)} className="">
                   <img src={Group} alt=''/>
                  </button>
                  <button >
                  <img src={download} alt=''/>
                 </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
