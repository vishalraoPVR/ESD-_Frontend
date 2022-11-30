import { useEffect, useState } from 'react';
import axios from '../api/axios';


const View = ({month}) => {

  const[res,setRes]=useState([]);
  
  const emp_id = JSON.parse(window.sessionStorage.getItem('emp_id'));

  // ----------------------------to print func


  function printDiv(divName) {
    var printContents = document.getElementById("toPrint").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload(true)
}

// -------------------------------------------------------


  const callApi = async() => {
    await axios.get(`http://localhost:8080/ESD_Project-1.0-SNAPSHOT/api/salary/get_month?employee_id=${emp_id.employee_id}&month=${month}`)
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
      callApi();
  },[]);

  return (
    <>
     <button className='btn btn-dark'
            onClick={printDiv}
      >Download</button>
    <div className="details" id="toPrint">
            <table class="table">
                <thead>
                <tr>
                  <th scope ="col" ><b>Salary ID</b></th>  
                    <th scope ="col" ><b>Name</b></th>
                    <th scope="col" ><b>Designation</b></th>
                    <th scope="col" ><b>Salary</b></th>
                    <th scope="col" ><b>Payment Date</b></th>
                    <th scope="col" ><b>Month</b></th>
                </tr>
                </thead>


                <tbody>
                {res.map((val, key) => {
                return (
            <tr key={key}>
              <td>{val.salaryid}</td>
              <td>{emp_id.employeeName}</td>
              <td>{val.description}</td>
              <td>{val.amount}</td>
              <td>{val.payment_date}</td>
              <td>{val.month}</td>

              
            </tr>
          )
        })}
        </tbody>
            </table>
        </div>
    </>
  )
}

export default View