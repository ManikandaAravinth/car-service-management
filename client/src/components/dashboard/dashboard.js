import React from "react";


import carwash from "./carwash.jpg"
import ceramic from "./Ceramicoating.jpg"
import modified from "./modifiedcar.jpg"


import logo from "../autoscout.png"
import carshampoo from "./product1.jpeg"
import waxpolish from "./product2.jpeg"
import nanocoating from "./product3.jpeg"
import carperfume from "./product4.jpeg"
import interiortoys from "./product5.jpeg"
import tyrecare from "./product6.jpeg"
import { Link } from "react-router-dom";
import carlogo from "../autoscout.png"
import teflon from "./teflon.jpeg"
import film from "./film.jpeg"
import ceramicoat from "./ceramic.jpeg"
import axios from "axios";

export function Dashboard() {
    function bookingdetails(event) {
        event.preventDefault()

        var bname = document.getElementById("bname").value
        var bmobile = document.getElementById("bmobile").value
        var baddress = document.getElementById("baddress").value

        var bookdetail = {
            bname: bname,
            bmobile: bmobile,
            baddress: baddress
        }

        if (bname === '' || bmobile === '') {
            alert("Enter the field")
        }
        else {
            axios.post("http://localhost:3005/booking", bookdetail)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Booking not Success")
                    }
                    else if (res.data.status === "success") {
                        alert("Your Booking Success")
                        window.location.href = "/user/:id"
                    }
                })
        }
    }
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


            <div className="dashboard overflow-hidden">
                <div class="card-group row d-flex w-100 justify-content-center">
                    <h1 class="text-center text-white my-3">SERVICES</h1>
                    <h1 className="text-center my-3"><span className="spn1">What Are You</span><span className="spn2" > Looking For</span><span className="spn1"> ?</span></h1>

                    <div class="card bg-transparent border-0 lg-4 mx-3 md-4 sm-3">
                        <div className="card-cus-img mx-3">
                            <img src={carwash} class="card-img-top h-100 rounded-5" alt="..." />
                        </div>
                        <div class="card-body w-100 d-flex align-items-center justify-content-center">
                            <h3 class="card-title">Car Wash</h3>
                        </div>
                        <div class="card-footer bg-transparent text-center border-0">
                            <a href="#carwash" class="btn btn-primary my-3">ViewMore</a>
                        </div>
                    </div>
                    <div class="card bg-transparent border-0 lg-4 md-4 mx-3 sm-3">
                        <div className="card-cus-img mx-3">
                            <img src={ceramic} class="card-img-top h-100 rounded-5" alt="..." />
                        </div>
                        <div class="card-body w-100 d-flex align-items-center justify-content-center">
                            <h3 class="card-title text-center">Car Polish</h3>
                        </div>
                        <div class="card-footer bg-transparent text-center border-0">
                            <a href="#detailing" class="btn btn-primary my-3">ViewMore</a>
                        </div>
                    </div>
                    <div class="card bg-transparent border-0 lg-4 md-4 mx-3 sm-3">
                        <div className="card-cus-img mx-3">
                            <img src={modified} class="card-img-top h-100 rounded-5" alt="..." />
                        </div>
                        <div class="card-body w-100 d-flex align-items-center justify-content-center">
                            <h3 class="card-title text-center">Car modified</h3>
                        </div>
                        <div class="card-footer bg-transparent text-center border-0">
                            <a href="#" class="btn btn-primary my-3">ViewMore</a>
                        </div>
                    </div>
                </div>

                <div id="carwash">
                    <div class="card-group row justify-content-center my-5">
                        <h1 class="text-center text-white mt-3 pt-5" >Wash Services</h1>
                    </div>

                    <div className="products py-5">

                        <div class="row row-cols-1 row-cols-md-3 g-4 px-4">
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={carshampoo} class="card-img-top" alt="" />
                                    <div class="card-body w-100">
                                        <h5 class="card-title ">Interior Wash</h5>
                                        <p>Service cost :  ₹ 500/-</p>
                                        <p>Every 3 mnts (recomended)</p>
                                        <p class="card-text">you want to maintain a healthy environment and an enjoyable ride for your family or business clients.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={waxpolish} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Exterior Wash</h5>
                                        <p>Service cost :  ₹ 500/-</p>
                                        <p>Every month (recomended)</p>
                                        <p class="card-text">boost its resale value. It is important to clean your vehicle regularly to preserve the paint finish</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={nanocoating} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Under Chassis Wash</h5>
                                        <p>Service cost :  ₹ 300/-</p>
                                        <p>Every month (recomended)</p>
                                        <p class="card-text">Cleaning the undercarriage also helps to prevent rust</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={carperfume} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Sanitizer Foam Wash</h5>
                                        <p>Service cost :  ₹ 1000/-</p>
                                        <p>Not necessery only if you needed</p>
                                        <p class="card-text">its help break down all the stubborn dirt particles from your car's paint surface and wheels.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={interiortoys} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Engine Bay Wash</h5>
                                        <p>Service cost :  ₹ 300/-</p>
                                        <p>Every 10,000 kms(recomended)</p>
                                        <p class="card-text text-wrap">Regular cleaning can help to prevent rust and corrosion, as well as improve the overall efficiency of your engine.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={tyrecare} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Over All Cleaning</h5>
                                        <p>Service cost :  ₹ 2000/-</p>
                                        <p>Not necessery only if you needed</p>
                                        <p class="card-text">Advanced silicone-based tyre polish for car that is truly multipurpose in nature, it can be used on rubber, tyres, dashboard, vinyl, leatherite etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="detailing">
                    <div class="card-group row justify-content-center my-5">
                        <h1 class="text-center text-white mt-3 pt-5" > Car Polishes</h1>
                    </div>

                    <div className="products py-5">

                        <div class="row row-cols-1 row-cols-md-3 g-4 px-4">
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={teflon} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title ">Teflon Coating</h5>
                                        <p>Service cost :  ₹ 5000/-</p>
                                        <p>Every 3 mnts (recomended)</p>
                                        <p class="card-text">PTFE coatings are resistant to corrosive chemicals, provides good insulation from electricity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={film} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Protection Film</h5>
                                        <p>Service cost :  ₹ 6000/-</p>
                                        <p>Every 3 yrs (recomended)</p>
                                        <p class="card-text">A car's paint is vulnerable to damage from elements such as debris, bugs, and UV rays.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <div class="card h-100">
                                    <img src={ceramicoat} class="card-img-top" alt="..." />
                                    <div class="card-body w-100">
                                        <h5 class="card-title">Ceramic Coating</h5>
                                        <p>Service cost :  ₹ 8000/-</p>
                                        <p>Every month (recomended)</p>
                                        <p class="card-text">Ceramic coating provides a strong, protective surface on your car's body.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="booking d-flex justify-content-center px-5" >
                <div className="enquiry col-md-6 bg-transparent row align-items-center p-2">
                    <h3 className="spn1 text-center">For Enquiries</h3>
                    <form onSubmit={bookingdetails}>
                        <div>
                            <input className="bname text-black" type="text" id="bname" placeholder="Your Name"></input>
                        </div>
                        <div>
                            <input className="bmobile text-black" type="text" id="bmobile" placeholder="Your Mobile"></input>
                        </div>
                        <div>
                            <textarea className="bg-transparent " id="baddress" placeholder="Your Address"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-outline-danger btn-lg">Send</button>
                        </div>
                    </form>
                </div>
            </div>

            <footer id="contact">
                <div class="container">
                    <div class="row overflow-hidden">
                        <div class="col-lg-4 col-12 mt-5 ">
                            <div class="img">
                                <img src={logo} class="img-fluid" alt="" />
                            </div>

                            <p class="mt-2">8/12 , Ganapathy Nagar, Coimbatore, Tamilnadu, India</p>
                        </div>
                        <div class="col-lg-4 mt-5">
                            <h1 className="spn1">Contact Us</h1>
                            <br></br>
                            <h3>autoscout@gmail.com</h3>
                            <br></br>
                            <h3>9600504422</h3>
                            <br></br>
                            <h3> Aravinth AK</h3>
                        </div>
                        <div class="col-lg-4 mt-5">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3 className="spn1">HELP</h3>

                            <h4>Coimbatore,Tamilnadu</h4>
                            <h5>ph - 8610977377 </h5>

                            <h4>Erode, Tamilnadu</h4>
                            <h5>ph - 9976171372</h5>

                            <h4>Tirupur,Tamilnadu</h4>
                            <h5>ph - 6380819539</h5>

                            <h4>Kochi,Kerala</h4>
                            <h5>ph - 9345466852</h5>
                        </div>
                    </div>
                    <hr />
                    <p class="text-center"><span className="spn1">Ⓒ</span> Manikanda Aravinth @ Created with React & Node</p>

                </div>
            </footer>

        </>
    );
}