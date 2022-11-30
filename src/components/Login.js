import {useState,useEffect, useContext} from 'react';
import AuthContext from '../Context/AuthProvider';
import axios from '../api/axios'
import { json } from 'react-router-dom';
import swal from 'sweetalert';

const LOGIN_URL ='/employee/login'


const Login = () => {
    // const{ setAuth } =useContext(AuthContext);
    const [user,setUser] =useState('');
    const [pwd,setPwd] = useState('');
    // const [errMsg,setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const[res,setRes]=useState([]);
    const[userDetails,setuserD] =useState({name:"",email:""});

    // console.log(user);
    
   
    

    const handleSubmit = async () => {


         await axios.post('http://localhost:8080/ESD_Project-1.0-SNAPSHOT/api/employee/login', {
    
            employeeEmail : user,
            employeePassword :pwd
          })
          .then(function (response) {
            console.log(response.data);
            setRes(response.data);

            //Using windows Storage to redirect from login page
            window.sessionStorage.setItem("emp_id",JSON.stringify(response.data))
            window.sessionStorage.setItem("isLoggedIn",1)

            //Reload on login
            window.location.reload(true);
            
          })
          .catch(function (error) {
            
            console.log(error);
            console.log("Details do not match");
            swal("Oops!", "Invalid Credentials", "error");
          });

    }
    console.log("From State",res);

    
    return(
        
        <>
        { 
           
        <section className="vh-100 gradient-custom">
        {/* <p ref={errMsg} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{borderRadius:"1rem"}}>
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your E-mail and Password!</p>
  
                <div className="form-outline form-white mb-4">
                  <input type="email" 
                        id="typeEmailX" 
                        // ref={userRef} 
                        autoComplete="off" 
                        onChange={(e)=>setUser(e.target.value)}
                        value={user}
                        required
                        className="form-control form-control-lg" placeholder="E-mail"
                        />

                  <label className="form-label" htmlFor="typeEmailX">Email</label>
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" 
                        id="typePasswordX" 
                        onChange={(e)=>setPwd(e.target.value)}
                        value={pwd}
                        required
                        className="form-control form-control-lg" placeholder="Password" 
                        />
                  <label className="form-label" htmlFor="typePasswordX">Password</label>
                </div>
  
                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
  
                <button className="btn btn-outline-light btn-lg px-5" type="click" onClick={handleSubmit}>Sign In</button>
                
  
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
  
              </div>
  
              <div>
                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            
        }
        </>
    );
}

export default Login;