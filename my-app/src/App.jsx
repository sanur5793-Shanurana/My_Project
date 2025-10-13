import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import Header from './Components/others/Header';
// import { setlocalstorage } from './utils/LocalStorage';
// import { getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import { getLocalStorage } from './utils/LocalStorage';


function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const loggedInUser = "loggedInUser";
  const authData = useContext(AuthContext);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem(loggedInUser, JSON.stringify({ role: 'admin' }));

    }
    else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem(loggedInUser, JSON.stringify({ role: 'employee' }));
      }
    }
    else {
      alert('Invalid credentials ');
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
}

export default App;
