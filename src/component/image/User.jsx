import { addDoc, collection} from 'firebase/firestore';
import React, { useState } from 'react';
import { db,} from '../../Firebase';
import { useNavigate } from 'react-router-dom';

 
const Dashboard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    file: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData); 
    try{
        await addDoc(collection(db, 'users'), {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            status: 'Active' ,
          });
          alert('User added to Firebase!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        file: null
      });
      navigate("/dashboard/dashboardtable")
    }catch(error){
        console.error('Error adding user:', error);
        alert('Failed to add user.');
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-first">Add New User</h2>

        {/* First & Last Name */}
        <div className="flex gap-4 text-xl">
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="w-1/1">
        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

        {/*Gender + File */}
        <div className="flex gap-4">
         

          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-1/3">
            <label className="block mb-1 text-sm font-medium text-gray-700">Choose File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full text-sm text-gray-700 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:bg-white file:text-black file:cursor-pointer"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-1/2 px-6 py-2 font-medium text-white transition bg-black rounded-lg"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
