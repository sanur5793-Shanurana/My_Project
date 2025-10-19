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

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));

    }
    else if (authData) { 
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data: employee }) );
      }
    }
    else {
      alert('Invalid credentials ');
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />: null)}
    </>
  );
}

export default App;
