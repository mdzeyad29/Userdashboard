import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import User from './component/image/User';
import { DashboardTable } from './component/DashboardTable';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='dashboardtable' element={<DashboardTable/>} />  {/* Fixed spelling here */}
          <Route path='User' element={<User />} />  {/* This is correct */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
