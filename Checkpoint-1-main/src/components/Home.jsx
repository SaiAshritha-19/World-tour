import React, { useState } from 'react';
import '../App.css';
import image from "../assets/booking.jpg"
import Card from './Card';
import { AiOutlineCalendar } from "react-icons/ai";
import Services from './ServicesCard';
import Slider from './Silder';
import { data } from './services';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Carousel from './Gallery';
import { CgFacebook } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { CgYoutube } from "react-icons/cg";
import { CgTwitter } from "react-icons/cg";
import { Link } from 'react-router-dom';

export const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const Home = () => {

    const [date, setDate] = useState({ 1: new Date(), 2: new Date() });
    const [showCalendar, setShowCalendar] = useState(false);
    const [showCalendar1, setShowCalendar1] = useState(false);
    const [where, setWhereValue] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState('');
    const [hidden, setHidden] = useState(false)

    const [defaultTxt, setDefault] = useState({ 1: true, 2: true })

    const handleSelectChange = () => {
        // const { value } = event.target;
        setHidden(true); // Disable "Where To" option if a selection is made
    };

    const handleIconClick = (type) => {
        if (type === 1)
            setShowCalendar(!showCalendar);
        else
            setShowCalendar1(!showCalendar1)
    };

    const handleDateChange = (newDate, type) => {
        setDate(prevDate => ({
            ...prevDate,
            [type]: newDate
        }));
        if (type === 1) {
            setShowCalendar(false);
            setDefault(prev => (
                { ...prev, [type]: false }
            ))
        } // Hide the calendar after a date is selected
        else if (type === 2) {
            setShowCalendar1(false);
            setDefault(prev => (
                { ...prev, [type]: false }
            ))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (where && count && description)
            console.log(where && count && description, "wgere");
        alert("booking successfull")
        // You can also perform other actions here, such as sending data to a server
    };



    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        {/* Replace the text with brand name or logo */}
                        <span>Travel</span>
                    </div>
                    <ul className="navbar-menu">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#book" className="nav-link">Book</a></li>
                        <li className="nav-item">
                            <a href="#packages" className="nav-link dropdown-toggle">Packages</a></li>
                        {/* <li className="nav-item dropdown">
              <a href="#packages" className="nav-link dropdown-toggle">Packages</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">United States of America</a>
                <a href="#" className="dropdown-item">Germany</a>
                <a href="#" className="dropdown-item">France</a>
                <a href="#" className="dropdown-item">India</a>
              </div>
            </li> */}
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#Gallery" className="nav-link">Gallery</a></li>
                        <li className="nav-item"><a href="#About" className="nav-link">About</a></li>
                    </ul>
                    <div className="navbar-actions">
                        <input type='text' placeholder='Search' />
                        <button className="btn btn-login"><Link to="/login">Login</Link></button>
                        <button className="btn btn-register"><Link to="/register">Register</Link></button>
                    </div>
                </nav>
                <div className="backgroundImage">
                    <div className="content">
                        <h1 >Welcome to World</h1>
                        <h2 style={{ color: "black", fontSize: "50px", marginTop: "-30px" }} id="countryName"><span style={{ color: "brown", }}>Love is the food of life, travel is dessert</span></h2>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='formContainer' style={{ marginTop: "50px" }} id='book'>

                <p style={{ color: "black", fontWeight: "bold", fontSize: "35px", textAlign: "center" }}><span style={{ color: "orange" }}>B</span>ook</p>
                <div className="main-container">
                    <div className="image-container">
                        <img src={image} alt="Image" />
                    </div>
                    <div className="form-container">
                        <select style={{ width: "94%" }} onClick={handleSelectChange} onChange={(e) => { setWhereValue(e.target.value) }} className="shadow-input input-box">
                            <option value="" hidden={hidden} selected={!hidden} d>Where To</option>
                            <option value="option1">USA</option>
                            <option value="option2">Canada</option>
                            <option value="option3">India</option>
                            <option value="option4">Switzerland</option>
                            <option value="option5">Poland</option>
                            <option value="option6">Armsterdam</option>
                        </select>
                        {/* <input type="text" className="shadow-input input-box" onChange={e => setWhereValue(e.target.value)} placeholder="Where To." /> */}
                        <input type="text" style={{ marginTop: "20px" }} onChange={e => setCount(e.target.value)} className="shadow-input input-box" placeholder="How Many" />
                        <div className="date">
                            <input type="text" id="date-input1" value={defaultTxt[1] ? "dd/mm/yyyy" : formatDate(date[1])} className="date-input" placeholder="mm/dd/yyyy" />
                            <AiOutlineCalendar onClick={() => handleIconClick(1)} />
                            {showCalendar && (
                                <div style={{ position: 'absolute', zIndex: 999, top: '70', right: 150 }}
                                >
                                    <Calendar
                                        onChange={(newDate) => handleDateChange(newDate, 1)}
                                        value={date[1]}
                                    />
                                </div>

                            )}
                        </div>
                        <div className="date">
                            <input type="text" id="date-input2" value={defaultTxt[2] ? "dd/mm/yyy" : formatDate(date[2])} className="date-input" placeholder="mm/dd/yyyy" />
                            <AiOutlineCalendar onClick={() => handleIconClick(2)} />
                            {showCalendar1 && (
                                <div style={{ position: 'absolute', zIndex: 999, top: '70', right: 150 }}
                                >
                                    <Calendar
                                        onChange={(newDate) => handleDateChange(newDate, 2)}
                                        value={date[2]}
                                    />
                                </div>

                            )}
                        </div>
                        <textarea className="description" onChange={e => setDescription(e.target.value)} placeholder='Enter Your Name & Details' />
                        <button type='submit' style={{ marginTop: "20px", backgroundColor: "orange", borderRadius: "10px", color: "white", padding: "8px" }} className="btn btn-book">Book Now</button>

                    </div>

                </div>
            </form>
            <p id='packages' style={{ marginTop: "10px", textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>Packages</p>

            <div className="wrapper" >
                <Card
                    img="https://th.bing.com/th?id=OIP.ExeAH2r8o_VXPhyB6lj-_AHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                    title="India"
                    description="A style that combines elements from Persian Indian"
                    price="100.00"
                    rating={5}
                />

                <Card
                    img="https://img.budgettravel.com/_galleryImage/golden-gate-bridge-san-francisco-952012-114744_original.jpeg?mtime=20140903194435"
                    title="United States of America"
                    description="World's greatest economic power"
                    price="400.95"
                    rating={4}
                />
                <Card
                    img="https://toptravellists.com/wp-content/uploads/2015/01/10279599073_3289f463a9_b_Eiffel-Tower.jpg"
                    title="France"
                    description="Most visited country in the world"
                    price="350.99"
                    rating={3.5}
                />
                <Card
                    img="https://th.bing.com/th/id/OIP.yI-6LW141uE5EXS3qFTm7gAAAA?rs=1&pid=ImgDetMain"
                    title="Germany"
                    description="Gained importance as the Holy Roman Empire"
                    price="420"
                    rating={4}
                />
                <Card
                    img="https://www.planetware.com/wpimages/2021/06/canada-tourist-attractions-banff-rocky-mountains-lake-louise-and-glacier.jpg"
                    title="Canada"
                    description="World's largest coastline"
                    price="29.95"
                    rating={4.2}
                />
                <Card
                    img="https://th.bing.com/th/id/OIP.aqXrnWXh3IZI7ode4D_p1QHaE7?rs=1&pid=ImgDetMain"
                    title="United Kingdom"
                    description="Sixth-largest economy by nominal gross domestic product"
                    price="190.99"
                    rating={3.9}
                />
                <Card
                    img="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/05/31154134531_e69f6abbb0_k.jpg"
                    title="Switzerland"
                    description="Rugged topography and multicultural milieu"
                    price="430.95"
                    rating={4.8}
                />
                <Card
                    img="https://www.roadaffair.com/wp-content/uploads/2017/10/amsterdam-canals-netherlands-shutterstock_245749633.jpg"
                    title="Amsterdam"
                    description="Situated in a flat and low-lying area"
                    price="600"
                    rating={4.5}
                />
                <Card
                    img="https://dag08uxs564ub.cloudfront.net/images/Top_attractions_of_Gdansk_Motlawa_river_overh.width-1200.jpg"
                    title="Poland"
                    description="Territory traverses the central European plain"
                    price="280.56"
                    rating={4}
                />

                <div style={{ width: "150vh" }} id='services'>
                    <p style={{ marginTop: "10px", textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>Services</p>

                    <Slider options={{ align: "center" }}>
                        {data.map((testimonial, i) => {
                            return (

                                <div key={i} style={{ width: "100%" }}>
                                    <Services {...testimonial} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>

            <div id='Gallery' style={{ marginRight: "20px", marginLeft: "20px" }}>
                <p style={{ marginTop: "10px", textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>Gallery</p>

                <Carousel />
            </div>
            <div id='About' style={{ marginRight: "20px", marginLeft: "20px" }}>
                <p style={{ marginTop: "10px", textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>About Us</p>

                <div className="main-container">
                    <div className="image-container">
                        <img src={image} alt="Image" />
                    </div>
                    <div className="form-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <p>
                            Founded in the year 2005 as TourMyIndia.com, an online travel platform, the company boosted as a private limited in the year 2013 and has emerged as the “Best Upcoming Inbound Tour Operators in India”. It has been awarded in the category of “Excellence in the Tourism Industry” by World Tourism Brand Academy.
                        </p>
                        <p>
                            The Noida based company, with a strong presence in inbound travel trade and corporate segment, today has excelled its branches over Delhi, Mumbai, Agra, Jaipur, Haridwar, Rishikesh & Badrinath. The company with its professionally managed travel engine specializes mainly in organizing Adventure, Cultural, Religious, hill station & wildlife tours in India through a sprawling network. It offers 24 X 7 hours services that include travel planning, itinerary design, hotel bookings, ticket reservations and transport facilities. It also provides holiday packages, customized as per client’s need and budget.
                        </p>
                    </div>
                </div>
            </div>

            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><span className='icon'><CgFacebook /></span></a>
                        <a href="#"><span className='icon'><CgInstagram /></span></a>
                        <a href="#"><span className='icon'><CgYoutube /></span></a>
                        <a href="#"><span className='icon'><CgTwitter /></span></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Home;
