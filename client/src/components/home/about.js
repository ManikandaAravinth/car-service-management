import React from "react";
import abtceram from "./aboutceramic.jpeg"
import carpro from "./carpro.png"
import mothers from "./mothers.png"
import menzer from "./menzerna.png"
import poorboy from "./poorboysworld.png"
import bilt from "./bilt-hamber.png"

import tata from "./tata.png"
import toyota from "./toyota.png"
import ford from "./ford.jpeg"
import fiat from "./fiat.png"
import suzuki from "./suzuki.jpeg"
import vw from "./vw.png"
import honda from "./honda.png"
import hyundai from "./hyundai.png"
import mahindra from "./mahindra.jpeg"
import mitsubishi from "./mitsubishi.png"

export function About() {
    return (
        <>
            <div>
                <h1 className="text-center my-3"><span className="spn1">ABOUT</span><span className="spn2" > US</span></h1>
                <h3 className="text-center">"<span className="spn1">Cars </span>Speak. <span className="spn1">We </span>Understand."</h3><br></br>
                <br></br>
                <div>
                    <img className="rounded mx-auto d-block" src={abtceram} alt="Responsive image" />
                </div>
                <br></br>
                <br></br>
                <p className="text-center"><span className="spn1 text-decoration-underline">CERAMIC STYLING EXPERT</span>- Luxury Cars & Bikes. India's most trusted Car Detailer. Providing complete service @ customer home also across Tamil Nadu, Maharashtra, Goa, Andhra Pradesh, Telangana, Karnataka, Pondicherry & Kerala. Our CERAMIC EXPERT TEAM is located very near to you & just a phone call away to reach your home!</p>
                <p className="text-center">Highly professional service with world-class German products. More than 5 years of Automobile corporate experience @ FIAT,FORD ,MARUTHI , TATA MOTORS & ROYAL ENFIELD.</p>
                <p className="text-center">1000s of Happy customers. <span className="spn1">100% </span>satisfaction guaranteed.</p>
            </div>
            <div className="bg-black ">
                <br></br>
                <h1 className="text-center text-white">Our Process</h1>
                <br></br>
                <br></br>
                <p className="text-center text-white ">We give attention to details. We don't mislead & suggest customers only the best which is suitable as per the car's condition.We begin with careful analysis of the car, mapping out its needs and planning our procedures accordingly. We then start off, ensuring only the greatest products & equipment touch your car. And we end up delivering results that compel you to cherish as you gaze at your ride in awe and renewed affection.</p>
                <br></br>
            </div>
            <div>
                <br></br>
                <h1 className=" text-center">Our Partners</h1>
                <br></br>
                <div>
                    <img className="rounded mx-auto ps-5 p-3" src={carpro} alt="Responsive image" />
                    <img className="rounded mx-auto p-4" src={mothers} alt="Responsive image" />
                    <img className="rounded mx-auto p-4" src={menzer} alt="Responsive image" />
                    <img className="rounded mx-auto p-3" src={poorboy} alt="Responsive image" />
                    <img className="rounded mx-auto p-3" src={bilt} alt="Responsive image" />
                </div>
                <div className="bg-black text-light">
                    <br></br>
                    <h1 className="text-center">Experts In</h1>
                    <br></br>
                    <div>
                        <img className="rounded mx-auto" src={tata} alt="Responsive image" />
                        <img className="rounded mx-auto" src={toyota} alt="Responsive image" />
                        <img className="rounded mx-auto" src={ford} alt="Responsive image" />
                        <img className="rounded mx-auto" src={fiat} alt="Responsive image" />
                        <img className="rounded mx-auto" src={suzuki} alt="Responsive image" />
                        <img className="rounded mx-auto" src={vw} alt="Responsive image" />
                        <img className="rounded mx-auto" src={honda} alt="Responsive image" />
                        <img className="rounded mx-auto" src={hyundai} alt="Responsive image" />
                        <img className="rounded mx-auto" src={mahindra} alt="Responsive image" />
                        <img className="rounded mx-auto" src={mitsubishi} alt="Responsive image" />

                        <br></br>
                        <br></br>
                        <h1 className="text-center">FOR BOOKINGS & FREE CERAMIC EXPERT CONSULTING  </h1>
                        <h1 className="text-center"><span className="spn1 ">CALL</span>- 9677475177 / 8438467720.</h1>
                    </div>
                </div>

            </div>
        </>
    );
}