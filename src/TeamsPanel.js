import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class TeamsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://glacial-cove-51366.herokuapp.com/teams").then((res) => {
            this.setState({
                teams: res.data,
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
                        <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Team 1</th>
                                        <th># Employees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.teams.map((element, index) => {
                                       return (
                                                <tr>
                                                    <td>{element.TeamName}</td>
                                                    <td>{element.Employees.length}</td>
                                                </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                    </div>
                </div>
        )
    }
};
export default TeamsPanel;