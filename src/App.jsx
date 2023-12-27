import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <>
    <h1>User Management System</h1>
    <h3>Numbers of Users : {users.length}</h3>
    <form>
      <input type="text" name="name" placeholder="name" /> <br />
      <input type="email" name="email" placeholder="email" /> <br />
      <input type="submit" value="Add User" />
    </form>
    </>
  )
}

export default App
