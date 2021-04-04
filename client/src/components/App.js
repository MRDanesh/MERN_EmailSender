import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

import Header from '../components/Header';
import Landing from './Landing';

const Dashboard = () => {
    return (
        <div>
            Dashboard
        </div>
    );
};

const surveyNew = () => {
    return (
        <div>
            surveyNew
        </div>
    );
};


class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <Header/>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/surveys' component={Dashboard} />
                    <Route exact path='/surveys/new' component={surveyNew} />
                </BrowserRouter>
            </div>
        );
    }
};


export default connect(null, {fetchUser}) (App);