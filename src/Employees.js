import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import EmployeeDetails from './EmployeeDetails'
import axios from 'axios'

export default class Employees extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEmployee: 'EMP001_'
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getEmployeeData();
  }

  //Function to get the Employee Data from json
  getEmployeeData() {
    axios.get('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees').then(response => {
      this.setState({employeeList: response})
    })
  };

  render() {
    if (!this.state.employeeList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-6" id="lstDiv"> 
      <div className="container">
            <h1>Employee Table</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of birth</th>
                    <th>Address</th>
                    <th>Date of joining</th>
                    <th>salary</th>
                    <th>designation</th>
                    <th>View Details</th> 
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.employeeList.data.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.first_name} {employee.last_name}</td>
                                <td>{employee.date_of_birth}</td>
                                <td>{employee.address}</td> 
                                <td>{employee.date_of_joining}</td> 
                                <td>{employee.salary}</td> 
                                <td>{employee.designation}</td> 
                                <td><Button bsStyle="info" onClick={() => this.setState({selectedEmployee: employee.id})}>

Details

</Button></td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      
      </div>
      <div className="col-md-3">
      <EmployeeDetails val={this.state.selectedEmployee}/>
      </div>
    </div>)
  }

}
