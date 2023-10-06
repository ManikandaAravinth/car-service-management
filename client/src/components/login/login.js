import axios from "axios";
import React from "react";
import carlogo from "../autoscout.png"
import { Link } from "react-router-dom";


export function Login() {

    function handlelogin(event) {
        event.preventDefault()

        var email = document.getElementById("email").value
        var password = document.getElementById("password").value

        var logindetails = {
            email: email,
            password: password
        }

        if (email === "") {
            alert("enter the username")
        }
        if (password === "") {
            alert("enter the password")
        }
        else {
            axios.post("http://localhost:3005/login", logindetails)
                .then((res) => {
                    if (res.data.status === "success") {
                        var roll = res.data.roll
                        var id = res.data.id
                        if (roll === "user") {
                            alert("user page")
                            window.location.href = `/user/${id}`
                        }
                        else if (roll === "Admin") {
                            alert("admin page")
                            window.location.href = `/adminpage/${id}`
                        }
                        // window.location.href = `/Dashboard`
                    }
                    else if (res.data.status === "invalid") {
                        alert("password invalid")
                    }
                    else if (res.data.status === "empty_set") {
                        alert("username & password invalid")
                    }
                    else if (res.data.status === "error") {
                        alert("contact admin")
                    }
                })
        }

    }

    return (
        <>
            <div className="logindiv">
                <div>
                    <img src={carlogo} alt="" class="carlogo d-inline-block align-text-top"></img>
                    <button className="btn justify-content-end " ><Link className=" m-5 link-danger" to="/">HOME</Link></button>

                </div>
                <div className="login container d-flex align-items-center justify-content-center">
                    <div >
                        <h1>Login</h1>

                        <form onSubmit={handlelogin} >
                            <div className="pt-5">

                                <span className="details ">User Name</span><br></br>
                                <input className="field" type="email" id="email" placeholder="Enter your Email" required /><br></br>

                                <span className="details ">Password</span><br></br>
                                <input className="field " type="password" id="password" placeholder="Enter your password" required /><br></br>

                            </div>
                            <div className="button">
                                <br></br>
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        </>
    )

}