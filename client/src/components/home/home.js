import React from "react";
import { Link } from "react-router-dom";



export function Home() {
    return (
        <>
            <div>
                <div className="homediv">
                    <section className="sect">
                        <div className="container d-flex align-items-center justify-content-center">
                            <h3><span className="spn1 text-decoration-underline">A </span><span className="text-white text-decoration-underline">uto </span><span className="spn1 text-decoration-underline"> S </span><span className="text-white text-decoration-underline">cout</span></h3>
                        </div>
                        <div className=" spn1 container d-flex align-items-center justify-content-center">
                            <p> A clean car says a lot about you.</p>

                        </div >


                        <div>
                            <h1 className="text-white fs-1 fw-bold text-end">BETTER  <span className="spn1">SERVICE...</span></h1>
                            <h1 className="text-white fs-1 fw-bold text-end ">BETTER  <span className="spn1">SAFETY....</span></h1>


                        </div>
                    </section>
                    <h1 className="spn1">BOOKING<span className="text-white"> FOR</span> SERVICE</h1>
                    <div className="button text-center">
                        <button className="btn btn-danger" ><Link className=" m-5 link-light" to="/Register">BOOKING</Link></button>
                    </div>


                </div>
            </div>
        </>
    );
}