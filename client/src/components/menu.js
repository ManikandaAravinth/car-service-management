import React from "react";
import { Link } from "react-router-dom"
import carlogo from "./autoscout.png"
export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark text-white bg-black sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"></Link>
                    <img src={carlogo} alt="" class="carlogo d-inline-block align-text-top"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse justify-content-end navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <Link class="nav-link active text-danger" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to="/Register">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}


