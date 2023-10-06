import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Adupdate() {
    var { id } = useParams()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        fetch('http://localhost:3005/getoneuser/' + id)
            .then(data => data.json())
            .then((res) => {
                setFname(res[0].fname)
                setLname(res[0].lname)
                setEmail(res[0].email)
                setPassword(res[0].password)
                setLocation(res[0].location)
                setAge(res[0].age)
                setPhone(res[0].phone)
            })
    }, [])

    function handleupdateuser(event) {
        event.preventDefault()

        var fname = document.getElementById("fname").value
        var lname = document.getElementById("lname").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var location = document.getElementById("location").value
        var age = document.getElementById("age").value
        var phone = document.getElementById("phone").value

        var updatedetails = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            location: location,
            age: age,
            phone: phone,
        }
        if (fname === '' || lname === '' || email === '' || password === '' || location === '') {
            alert("Field is not empty!")
        }
        else {
            axios.post('http://localhost:3005/updateuser/' + id, updatedetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data is not updated!")
                    }
                    else if (res.data.status === "success") {
                        alert("Data updated successfully!")
                        window.location.href = `/viewuser`
                    }
                })
        }
    }
    return (
        <>
            <section>
                <div className="bg-info">
                    <div><h1>Update details</h1></div>
                    <form onSubmit={handleupdateuser}>
                        <table>
                            <tbody>
                                <tr><td><label>First Name</label></td><td><input type="text" id="fname" value={fname} onChange={(updatedata) => { setFname(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Last Name</label></td><td><input type="text" id="lname" value={lname} onChange={(updatedata) => { setLname(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Email</label></td><td><input type="text" id="email" value={email} onChange={(updatedata) => { setEmail(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Password</label></td><td><input type="text" id="password" value={password} onChange={(updatedata) => { setPassword(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Location</label></td><td><input type="text" id="location" value={location} onChange={(updatedata) => { setLocation(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Age</label></td><td><input type="number" id="age" value={age} onChange={(updatedata) => { setAge(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Phone</label></td><td><input type="number" id="phone" value={phone} onChange={(updatedata) => { setPhone(updatedata.target.value) }} /></td></tr>

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"><input type="submit" className="btn btn-success" value="Submit" /></td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </section>
        </>
    );

}