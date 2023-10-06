import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Updateservice() {
    var { sno } = useParams()
    const [servicename, setServicename] = useState('')
    const [servicecost, setServicecost] = useState('')
    const [benifits, setBenifits] = useState('')

    useEffect(() => {
        fetch('http://localhost:3005/getoneservice/' + sno)
            .then(data => data.json())
            .then((res) => {
                setServicename(res[0].servicenamename)
                setServicecost(res[0].servicecost)
                setBenifits(res[0].benifits)
            })
    }, [])

    function handleupdateuser(event) {
        event.preventDefault()

        var servicename = document.getElementById("sname").value
        var servicecost = document.getElementById("scost").value
        var benifits = document.getElementById("benifit").value


        var updatedetails = {
            servicename: servicename,
            servicecost: servicecost,
            benifits: benifits

        }
        if (servicename === '' || servicecost === '' || benifits === '') {
            alert("Field is not empty!")
        }
        else {
            axios.post('http://localhost:3005/updateservice/' + sno, updatedetails)
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
                    <div><h1>Update Service details</h1></div>
                    <form onSubmit={handleupdateuser}>
                        <table>
                            <tbody>
                                <tr><td><label>Service Name</label></td><td><input type="text" id="sname" value={servicename} onChange={(updatedata) => { setServicename(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Service Cost</label></td><td><input type="text" id="scost" value={servicecost} onChange={(updatedata) => { setServicecost(updatedata.target.value) }} /></td></tr>
                                <tr><td><label>Benifits</label></td><td><input type="text" id="benifit" value={benifits} onChange={(updatedata) => { setBenifits(updatedata.target.value) }} /></td></tr>

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