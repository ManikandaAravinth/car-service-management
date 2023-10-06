import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Viewuser() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/getall')
            .then(res => res.json())
            .then(details => setData(details))
    }, [])

    function handledelete(id) {
        alert(id)
        var deletedata = {
            id: id
        }
        alert(deletedata.id)
        axios.post('http://localhost:3005/deleteuser', deletedata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data is deleted")
                    window.location.href = `/viewuser`
                }


            })
    }
    return (<>

        <div className="">
            <h1 className="text-center "> <span className="spn1">User </span>Details</h1 >
        </div >
        <section className="">
            <div className=" row container">
                <table className="table table-sm table-bordered table-striped table-bordered border-danger">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Location</th>
                            <th>DOB</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Role</th>
                            {/* <th>Creayted_by</th>
                            <th>Updated_by</th>
                            <th>Created_date</th>
                            <th>Updated_date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index) => (
                                <>
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.fname}</td>
                                        <td>{value.lname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>{value.location}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.age}</td>
                                        <td>{value.Phone}</td>
                                        <td>{value.username}</td>
                                        <td>{value.role}</td>
                                        {/* <td>{value.created_by}</td>
                                        <td>{value.updated_by}</td>
                                        <td>{value.created_date}</td>
                                        <td>{value.updated_date}</td> */}
                                        <td><Link to={`/updateuser/${value.id}`} className="btn btn-success">Update</Link></td>
                                        <td><button className="btn btn-danger" onClick={() => { handledelete(value.id) }}>Delete</button></td>
                                    </tr>

                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section >
    </>)
}