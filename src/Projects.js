import React from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer';

class Projects extends React.Component {
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

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((element, index) => {

                            return (
                                <tr>
                                    <td>{element.ProjectName}</td>
                                    <td>{element.ProjectDescription}</td>
                                    <td>{ moment(element.ProjectStartDate).format('LL') }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Projects;