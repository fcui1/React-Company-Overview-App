import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class ProjectsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("https://glacial-cove-51366.herokuapp.com/projects").then((res) => {
          this.setState({
            projects: res.data,
            dataLoaded: true 
          });
        }).catch((err) => {
          console.log("error")
        });
    }

    componentWillUnmount() {

    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Active # Days</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.projects.map((element, index) => {
                                    return (
                                            <tr>
                                                <td>{element.ProjectName}</td>
                                                <td>{ moment().diff( moment([element.ProjectStartDate]), 'days' ) }</td>
                                            </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        )
    }
};

export default ProjectsPanel;