import React, { Component } from 'react';
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from "./components/pageNotFouns";
// import Users from "./components/users";
import Signup from "./components/signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/signIn";
import usersService from './services/usersService';
import Logout from './components/logout';
import signupBiz from './components/signupbiz';
import NewCard from './components/newCard';
import ProtectedRoute from './components/common/protectedRoute';
import MyCards from './components/myCards';
import EditCard from './components/editCard';

class App extends Component {
  state = {}

  componentDidMount() {
    this.setState({
      user: usersService.getCurrentUser(),
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App d-flex flex-column min-vh-100">
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <header className="">

          <Navbar user={user} />
        </header>
        <main className="container flex-fill">
          <Switch>
            <ProtectedRoute path="/my-cards/edit/:id" component={EditCard} biz={true} exact />
            <ProtectedRoute path="/create-card" component={NewCard} biz={true} exact />
            <ProtectedRoute path="/all-cards" component={MyCards} exact />
            <ProtectedRoute path="/my-cards" render={() => <MyCards variation="my-cards" key={Date.now()} />} biz={true} exact />
            <ProtectedRoute path="/favourite-cards" render={() => <MyCards variation="favourite-cards" key={Date.now()} />} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/signupbiz" component={signupBiz} />
            <Route path="/signin" component={SignIn} />
            <Route path="/logout" component={Logout} />
            {/* <Route path="/users" component={Users} /> */}
            < Route path="/about" component={About} />
            <Route path="/pageNotFound" exact component={PageNotFound} />
            <Route path={["/home", "/"]} component={Home} exact />
            <Redirect to="/pageNotFound"></Redirect>
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;



