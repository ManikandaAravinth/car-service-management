import axios from "axios";
import React, { useEffect, useState } from "react";

export function Booking() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/getbooking')
            .then(res => res.json())
            .then(details => setData(details))
    }, [])

    function bookdelete(bid) {

        var bkdelete = {
            bid: bid
        }
        alert(bkdelete.bid)
        axios.post('http://localhost:3005/deletebooking', bkdelete)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("booking are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data is deleted")
                    window.location.href = `/booking`
                }
            })
    }


    return (

        <>
            <div>
                <h1 className="text-center "> Service <span className="spn1">Booking </span>Details</h1 >
            </div>
            <section className="">
                <div className="row container">
                    <table className="table table-sm table-bordered table-striped table-bordered border-danger">
                        <thead className="table-primary">
                            <tr>
                                <th>BID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value, index) => (
                                    <>
                                        <tr>
                                            <td>{value.bid}</td>
                                            <td>{value.bname}</td>
                                            <td>{value.bmobile}</td>
                                            <td>{value.baddress}</td>

                                            <td><button className="btn btn-danger" onClick={() => { bookdelete(value.bid) }}>Delete</button></td>
                                        </tr>

                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section >

        </>
    );
}