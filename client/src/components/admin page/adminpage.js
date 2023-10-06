import React from "react";
import { Link, useResolvedPath } from "react-router-dom";
import carlogo from "../autoscout.png";
import users from "./users.png";
import services from "./OurServices.jpg";

export function Adminpage() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark text-white bg-black sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"></Link>
                    <img src={carlogo} alt="" class="carlogo d-inline-block align-text-top" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end fs-5" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                                <Link class="nav-link active text-danger " aria-current="page" to="/Login">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div className="admindiv">
                    <h1 className="text-center">Welcome  <span className="spn1">Admin</span></h1>
                </div>
            </div>

            <section id="admin_dashboard">
                <div className="admin_page ">
                    <div className="admin_page_body">
                        <div class="row row-cols-1 row-cols-md-2 w-100 ">
                            <div class="col-lg-6 d-flex justify-content-center ">
                                <div class="card user-icon h-100">
                                    <img src={users} class="adminimg container-fluid rounded-5 my-3" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title my-5 text-center">Users</h3>
                                        <Link to='/viewuser' className="btn btn-primary mx-5 btn-lg text-center d-flex">View Users</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex  justify-content-center"   >
                                <div class="card product-icon h-100">
                                    <img src={services} class="adminimg container-fluid my-2 rounded-5" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title my-4 text-center">Services</h3>
                                        <Link to='/viewservice' className="btn btn-primary btn-lg mx-5 text-center d-flex">View Services</Link>
                                        <br></br>
                                        <Link to='/addservices' className="btn btn-warning btn-lg mx-5 text-center d-flex">ADD Services</Link>
                                        <br></br>
                                        <Link to='/booking' className="btn btn-danger btn-lg mx-5 text-center d-flex"> View Booking </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}