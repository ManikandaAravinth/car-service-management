import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export function Addservice() {
    function handleregister(event) {
        event.preventDefault()

        var servicename = document.getElementById("sname").value
        var servicecost = document.getElementById("scost").value
        var benifits = document.getElementById("benifit").value

        var servicedetails = {
            servicename: servicename,
            servicecost: servicecost,
            benifits: benifits

        }

        axios.post("http://localhost:3005/addservice", servicedetails)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not inserted")
                }
                else if (res.data.status === "success") {
                    alert("data are inserted")
                    window.location.href = `/addservices`

                }
            })

    }
    return (
        <>
            <div>
                <div class="d-flex justify-content-end">
                    <button className="bg-info" ><Link className="ms-3 link-danger" to="/adminpage">Admin</Link></button>
                </div>
                <div className="row justify-content-center">
                    <h1 className="text-danger">Add Service Details</h1>

                    <form onSubmit={handleregister}>
                        <div className="pt-3">

                            <span >Service Name</span><br></br>
                            <input className="text-black" type="text" id="sname" placeholder="Enter the Service" /><br></br>

                            <span >Service Cost</span><br></br>
                            <input className="text-black" type="text" id="scost" placeholder="Enter the Amount" /><br></br>

                            <span >Benifits</span><br></br>
                            <input className="text-black" type="text" id="benifit" placeholder="Enter the benifits" /><br></br>


                            <br></br><button type="submit" className="btn btn-primary w-50">Submit</button>
                        </div>
                    </form >
                </div>
            </div >

        </>
    );
}