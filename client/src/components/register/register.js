import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export function Register() {
    function handleregister(event) {
        event.preventDefault()

        var fname = document.getElementById("fname").value
        var lname = document.getElementById("lname").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var location = document.getElementById("location").value
        var phone = document.getElementById("phone").value
        var age = document.getElementById("age").value



        var userdetails = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            location: location,
            phone: phone,
            age: age

        }

        if (email === '' || password === '') {
            alert("Enter the field")
        }

        else {
            axios.post("http://localhost:3005/register", userdetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Registration not Success")
                    }
                    else if (res.data.status === "success") {
                        alert("Register details Successfully")
                        window.location.href = "/login"
                    }
                })
        }
    }
    return (
        <>
            <div className="registerdiv">
                <div className="register container d-flex align-items-center justify-content-center">
                    <div>
                        <h1>Registration Form</h1>

                        <form onSubmit={handleregister}>
                            <div className="pt-3">

                                <span className="details ">First Name</span><br></br>
                                <input classname="fields " type="text" id="fname" placeholder="Enter firstname" /><br></br>

                                <span className="details ">Last Name</span><br></br>
                                <input classname="fields" type="text" id="lname" placeholder="Enter lastname" /><br></br>

                                <span className="details ">Email</span><br></br>
                                <input classname="fields " type="email" id="email" placeholder="Enter email" /><br></br>

                                <span className="details ">Password</span><br></br>
                                <input classname="fields " type="password" id="password" placeholder="Enter password" /><br></br>

                                <span className="details ">Location</span><br></br>
                                <input classname="fields " type="text" id="location" placeholder="Enter location" /><br></br>

                                <span className="details ">Age</span><br></br>
                                <input classname="fields " type="text" id="age" placeholder="Enter age" /><br></br>

                                <span className="details ">Phone</span><br></br>
                                <input classname="fields pb-5" type="text" id="phone" placeholder="Enter phone" /><br></br>


                                <br></br><button type="submit" className="btn btn-primary  w-100">Submit</button>
                                <h6>Already having an account<Link className="ms-3" to="/Login">Login</Link></h6>
                            </div>
                        </form >
                    </div >
                </div >
            </div >

        </>
    );
}