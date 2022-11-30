import { useEffect, useState } from "react";

import axios from 'axios';
import Navbar from "./Navbar";
import View from "./View";
import swal from 'sweetalert'

const Details=()=>{
    const[res,setRes]=useState([]);
    const emp_id = JSON.parse(window.sessionStorage.getItem('emp_id'));
    const[showReceipt,setReceipt]=useState(false);
    const[month,setMonth]=useState('');
    
    const Fetch_data = async()=>{
        await axios.get(`http://localhost:8080/ESD_Project-1.0-SNAPSHOT/api/salary/history?employee_id=${emp_id.employee_id}`)
        .then((response)=>{
            console.log(response.data);
            setRes(response.data);
            
        })
        .catch(function(error)
        {
            console.log(error);
        });
        
    }

    useEffect(()=>{
        swal("Hi", emp_id.employeeName.toString(), "success");
        Fetch_data();
    },[]);
    
   
    return(
        <>
        
        {(showReceipt === false) &&
        (
        <>
        <div className="details">
            <table className="table table-striped">
                <thead className ="bg-light" >
                <tr>
                    <th scope ="col"><b>Salary ID</b></th>
                    <th scope="col" ><b>Salary</b></th>
                    <th scope="col" ><b>Description</b></th>
                    <th scope="col" ><b>Payment Date</b></th>
                    <th scope="col">Pay Slip</th>
                </tr>
                </thead>


                <tbody>
                {res.map((val, key) => {
                return (
            <tr key={key}>
              <td>{val.salaryid}</td>
              <td>{val.amount}</td>
              <td>{val.description}</td>
              <td>{val.payment_date}</td>
              <td><button  size="lg" type="click" onClick={
                  ()=>{
                      setReceipt(true);
                      setMonth(val.month);
                    //   setEmp(val.employee_id);
                    }}>View Slip</button></td>
              
            </tr>
          )
        })}
        </tbody>
            </table>
        </div>
        </>
        )
        }
        {
            (showReceipt === true) && <View month={month}/>
        }
        </>
    )
}

export default Details;