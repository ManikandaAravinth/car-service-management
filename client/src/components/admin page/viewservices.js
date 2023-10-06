import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Viewservice() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/getallservice')
            .then(res => res.json())
            .then(details => setData(details))
    }, [])

    function handledelete(sno) {
        alert(sno)
        var deletedata = {
            sno: sno
        }
        alert(deletedata.sno)
        axios.post('http://localhost:3005/deleteservice', deletedata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data is deleted")
                    window.location.href = `/viewservice`
                }
            })
    }
    return (<>

        <div>
            <h1 className="text-center "> <span className="spn1">Service </span>Details</h1 >
        </div>
        <section className="">
            <div className="row container">
                <table className="table table-sm table-bordered table-striped table-bordered border-danger">
                    <thead className="table-primary">
                        <tr>
                            <th>sno</th>
                            <th>ServiceName</th>
                            <th>ServiceCost</th>
                            <th>benifits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index) => (
                                <>
                                    <tr>
                                        <td>{value.sno}</td>
                                        <td>{value.servicename}</td>
                                        <td>{value.servicecost}</td>
                                        <td>{value.benifits}</td>
                                        <td><Link to={`/update/${value.id}`} className="btn btn-success">Update</Link></td>
                                        <td><button className="btn btn-danger" onClick={() => { handledelete(value.sno) }}>Delete</button></td>
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