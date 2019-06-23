import React from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/Landing/Landing';
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import PasswordForgetPage from './components/PasswordForget/PasswordForget';
import HomePage from './components/Home/Home';
import AccountPage from './components/Account/Account';
import AdminPage from './components/Admin/Admin';

import * as ROUTES from './constants/Routes'

class App extends React.Component {
    state = {
        items: []
    }
    updateChecked = (id) => {
        this.setState({ items: this.state.items.map(item => {
            if(item.id === id){
                item.isCompleted = !item.isCompleted;
            }
            return item;
        })});
    }

    updateDelete = (id) => {
        this.setState({ items: this.state.items.filter(item =>
            item.id !== id    
        )});
    }

    handleAddTodo = (title) => {
        this.setState( { items: this.state.items.concat({id: this.state.items.length+1, title: title, isCompleted: false})

        })
    }
    componentDidUpdate = () => {
        console.log("updated");
    }
    render(){
        return (
            <div className="App">
                <Router>
                    <div>
                        <Navigation />

                        <hr />

                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route path={ROUTES.ADMIN} component={AdminPage} />
                    </div>
                </Router>
                <Header />
                <AddTodo handleSubmit={this.handleAddTodo}/>
                <Todo todo={this.state.items} updateChecked={this.updateChecked} onDelete={this.updateDelete}/>
            </div>
        );
    }
}

export default App;
