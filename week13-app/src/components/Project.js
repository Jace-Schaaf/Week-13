import React from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

export default class Project extends React.Component {
    render() {
        return React.createElement('div', { class: 'container' },
            React.createElement(Navbar, {}, " "),
            React.createElement(LoginForm, {}, " "),
        );
    }
}