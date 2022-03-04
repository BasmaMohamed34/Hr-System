import {faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './employeesCards.css'
import EmployeeData from './employeeData';
const EmployeesCards=()=>{
    let [employeeData,setEmplyeeData]=useState([{
        id:1,name:"Sara Khaled Ahmed",startDate:"25/5/2020",email:"sara@gmail.com",department:"Business Development",position:"Hr Head"
    },{
        id:1,name:"Sara Khaled Ahmed",startDate:"25/5/2020",email:"sara@gmail.com",department:"Business Development",position:"Hr Head"
    },{
        id:1,name:"Sara Khaled Ahmed",startDate:"25/5/2020",email:"sara@gmail.com",department:"Business Development",position:"Hr Head"
    }])
    return(
        <div id="employeesCards">
        <div className="pb-4">
            <input type="text" className="form-control d-inline w-75 mr-3" placeholder="Search"></input>
            <button className="addBtn d-inline"><FontAwesomeIcon icon={faPlus}/> <span className="addText">Add new</span></button>
        </div>

        <div className="row">
            {employeeData.map(emp=>{
                return(
                    <div className="col-4">
                        <EmployeeData employee={emp}/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default EmployeesCards;