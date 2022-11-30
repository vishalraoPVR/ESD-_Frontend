import React from 'react'

const Navbar = () => {
  const emp_id = JSON.parse(window.sessionStorage.getItem('emp_id'));
    const handleLogout=()=>{
        sessionStorage.clear();
        window.location.reload(true);
    }
  return (
    <div>
        <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src='https://www.iiitb.ac.in/includefiles/userfiles/images/IIITB%20Silver%20Jubilee%20Logo.jpg' width="auto" height="60" alt="" style={{verticalAlign:'middle'} } ></img></a>
        <p className="User" style={{color:'black'}}>Hi,{emp_id.employeeName} !!</p>
            <button type="click" onClick={handleLogout} className ="btn btn-secondary btn-lg mb-5" style={{background:"Tomato"}}>Logout</button>
        </nav>

        
    </div>
  )
}

export default Navbar