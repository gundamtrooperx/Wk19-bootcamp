import React from "react";
import Employee from "./Employee";


function EmpployeeDetails(props){
    return(<tr>
        <td>{props.id}</td>
        <td>{props.fname}</td>
        <td>{props.lname}</td>
        <td>{props.cellphone}</td>
        <td>{props.location}</td>
    </tr>)
}

export default EmpployeeDetails;