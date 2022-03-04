import './employeeData.css'
let EmployeeData=({employee})=>{
    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 mt-3 text-center img-div">
                    <img src="user.png" className="img-fluid mt-2 user-pic rounded-circle" alt="..."/>
                </div>
                
                <div className="col-md-8">
                    <div className="card-body">
                        <span className="name">{employee.name}</span>
                        <h6 className="position">{employee.position}</h6>
                        <span className="department">{employee.department}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeData;