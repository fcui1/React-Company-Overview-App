import React from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';

class NotFound extends React.Component {
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
            <MainContainer>
                <h1 className="page-header">Not Found</h1>
                Page Not Found <span role="img" aria-label="Confused face">🤔</span>
            </MainContainer>
        );
    }
}

export default NotFound;