import React from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends React.Component {
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
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name &amp; Position</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((element, index) => {
                            return (
                                <tr>
                                    <td>{element.FirstName} {element.LastName} - {element.Position.PositionName}</td>
                                    <td>{element.AddressStreet} {element.AddressCity}, {element.AddressState}, {element.AddressZip}</td>
                                    <td>{element.PhoneNum} ext. {element.Extension}</td>
                                    <td>{moment(element.HireDate).format('LL')}</td>
                                    <td>${element.SalaryBonus}.00</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Employees;