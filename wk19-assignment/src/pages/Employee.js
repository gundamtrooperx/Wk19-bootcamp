import React from 'react';
import Axios from 'axios';

class Employee extends React.Component {
    state = {
        employeerecords: []
    }
    componentDidMount = () => {
        var employeerecords = [];
        Axios.get('https://randomuser.me/api/?results=200&nat=us').then((response)=>{
            console.log(response)
            for(let i = 0; i < response.data.results.length; i++){
                employeerecords.push({
                    id: response.data.results[i].login.uuid,
                    fname: response.data.results[i].name.first ,
                    lname: response.data.results[i].name.last ,
                    cellphone: response.data.results[i].cell ,
                    location: response.data.results[i].location
                })
            }
            this.setState({employeerecords})
            console.log(this.state.employeerecords)
        })
    }
    render() {
        return (<div className='container'>
            hiiiii
        </div>)

    }
}

export default Employee;
