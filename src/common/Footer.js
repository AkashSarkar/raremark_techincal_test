import React from 'react'
const Footer = () => (
    <footer className="border-top">
        <div className="d-flex flex-row justify-content-between wrapper pt-4">
            <div className='col-2'>
                <select className="custom-select my-1 mr-sm-2">
                    <option >English</option>
                    <option>Espaniol</option>
                    <option>French</option>
                </select>

                <select className="custom-select my-1 mr-sm-2">
                    <option>INR</option>
                </select>
            </div>
            <div className='col-1'>
                <ul className="list-layout">
                    <li><a href="/about/about-us" className="text-dark mb-3">Airbnb</a></li>
                    <li><a href="/about/about-us" className="text-dark">About</a></li>
                    <li><a href="/careers" className="text-dark">Careers</a></li>
                    <li><a href="/press/news" className="text-dark">Press</a></li>
                    <li><a href="http://blog.airbnb.com" className="text-dark">Blog</a></li>
                    <li><a href="/help?from=footer" className="text-dark">Help</a></li>
                    <li><a href="/policies" className="text-dark">Policies</a></li>

                </ul>
            </div>
            <div className='col-1'>
                <ul className="list-layout">
                    <li><a href="/trust" className="text-dark mb-3">Discover</a></li>
                    <li><a href="/trust" className="text-dark">Trust &amp; Safety</a></li>
                    <li><a href="/invite?r=6" className="text-dark">Travel Credit</a></li>
                    <li><a href="/gift" className="text-dark">Gift Cards</a></li>
                    <li><a href="/wishlists/airbnb_picks" className="text-dark">Airbnb Picks</a></li>
                    <li><a href="/mobile" className="text-dark">Mobile</a></li>

                </ul>
            </div>
            <div className='col-1'>
                <ul className="list-layout">
                    <li><a href="/host" className="text-dark mb-3">Hosting</a></li>
                    <li><a href="/hospitality" className="text-dark">Hospitality</a></li>
                    <li><a href="/help/responsible-hosting" className="text-dark">Responsible Hosting</a></li>
                    <li><a href="/home-safety" className="text-dark">Home Safety</a></li>
                    <li><a href="/host/instant" className="text-dark">Instant Book</a></li>
                </ul>
            </div>
        </div>

        <div className="border-top wrapper mb-5 d-flex justify-content-between">
            <div className="mt-3">
                <i className="fab fa-airbnb text-dark mr-1" />
                <span className="text-dark">Airbnb, Inc.</span>
            </div>
            <div className='d-flex flex-row mt-3'>
                <li><a href="/trust" className="text-dark mb-3 fs-12">Terms</a></li>
                <li><a href="/trust" className="text-dark fs-12">Privacy</a></li>
                <li><a href="/invite?r=6" className="text-dark fs-12">Site</a></li>
                <li><a href="/gift" className="text-dark fs-12">Map</a></li>
                <li><i className="fab fa-facebook-f text-dark"></i></li>
                <li><i className="fab fa-twitter text-dark"></i></li>
                <li><i className="fab fa-instagram text-dark"></i></li>
            </div>
        </div>
    </footer>
)

export default Footer;