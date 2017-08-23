import React from "react";
import firebase from "firebase";
import "./app.css";
import { provider, auth } from "../firebase";
import { Route } from "react-router-dom";
import AuthUser from "../hoc/auth_user";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Search from "./search_list";
import Login from "./authentication/login";
import MentorRegistration from "./authentication/mentor_registration";
import Dashboard from "./protected/mentor_dashboard";
import ContactForm from "./contact_modal.js";
import MenteeSignUp from "./authentication/mentee_signup_form.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/mentee" component={MenteeSignUp} />
      <Route path="/mentors/dashboard" component={AuthUser(Dashboard)} />
      <Route path="/mentors/register" component={MentorRegistration} />
      <Route path="/mentors/login" component={Login} />
      <Route path="/results/:id" component={Search} />
      <Route exact path="/results" component={Search} />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={ContactForm} />
      <Footer />
    </div>
  );
};

export default App;
