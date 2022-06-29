import React from "react";
export default class LoginForm extends React.Component {
    render() {
        return (

            <div className="form">
             <h3>Login</h3>
                <form>
                    <div className="input-container">
                       
                        <input type="text" placeholder="Username" />
                        </div>
                        <br></br>
                    <div className="input-container">
                        
                        <input type="password" placeholder="Password" />

                    </div>
                    <div className="btn btn-primary">
                        Submit
                    </div>
                </form>
            </div>
        )

    }
}


