import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EmployeesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("https://glacial-cove-51366.herokuapp.com/employees").then((res) => {
            this.setState({
                employees: res.data,
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("error")
        });
    }

    componentWillUnmount() { }
    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                    <th>Employee Name</th>
                                    <th>Position Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employees.map((element, index) => {
                                        return (
                                                <tr>
                                                    <td>{element.FirstName} {element.LastName}</td>
                                                    <td>{element.Position.PositionName}</td>
                                                </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                    </div>
                </div>
        )
    }
};
export default EmployeesPanel;