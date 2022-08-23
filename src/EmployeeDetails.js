import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel' 
import axios from 'axios'

//This Component is a child Component of Employees Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() { 
    this.getEmployeeDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Emplyee Details only if props has changed
    if (this.props.val !== prevProps.val) { 
      this.getEmployeeDetails(this.props.val)
    }
  }

  //Function to Load the employeedetails data from json.
  getEmployeeDetails(id) { 
   document.getElementById("lstDiv").style.display = "none";
    axios.get('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees').then(response => {
      const filteredArray = response.data.filter(user=> user.id === id);
      
      this.setState({employeeDetails: filteredArray}); 
    }) 
  };

  render() {
     
    if (!this.state.employeeDetails)
      return (<p>Loading Data</p>)
    if (this.state.employeeDetails) 
    {
     if(this.state.employeeDetails!='')
     {
      return (<div className="employeedetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.employeeDetails[0].first_name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.employeeDetails[0].first_name} {this.state.employeeDetails[0].last_name}</p>
          <p>Date of birth : {this.state.employeeDetails[0].date_of_birth}</p>
          <p>Address : {this.state.employeeDetails[0].address}</p>
          <p>Date of joining : {this.state.employeeDetails[0].date_of_joining}</p>
          <p>Salary : {this.state.employeeDetails[0].salary}</p>
          <p>Designation : {this.state.employeeDetails[0].designation}</p>  
        </Panel.Body>
      </Panel> 
      <Panel.Heading>
          <Panel.Title componentClass="h3">
            <a bsStyle="info" href='employeelist'>

          Back to list

</a></Panel.Title>
        </Panel.Heading>
    </div>)
     }
     else
     {
      document.getElementById("lstDiv").style.display = "block";
      return (<p>Loading Data</p>)
     }
      
    }
    else
    {
      return (<p>Loading Data</p>)
    }
  }
}
