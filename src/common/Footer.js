import React from 'react'
const Footer = () => (
    <footer className="border-top">
        <div className="d-flex flex-row justify-content-between wrapper pt-4">
            <div class='col-2'>
                <select class="custom-select my-1 mr-sm-2">
                    <option >English</option>
                    <option>Espaniol</option>
                    <option>French</option>
                </select>

                <select class="custom-select my-1 mr-sm-2">
                    <option>INR</option>
                </select>
            </div>
            <div class='col-1'>
                <ul class="list-layout">
                    <li><a href="/about/about-us" className="text-dark mb-3">Airbnb</a></li>
                    <li><a href="/about/about-us" class="text-dark">About</a></li>
                    <li><a href="/careers" class="text-dark">Careers</a></li>
                    <li><a href="/press/news" class="text-dark">Press</a></li>
                    <li><a href="http://blog.airbnb.com" class="text-dark">Blog</a></li>
                    <li><a href="/help?from=footer" class="text-dark">Help</a></li>
                    <li><a href="/policies" class="text-dark">Policies</a></li>

                </ul>
            </div>
            <div class='col-1'>
                <ul class="list-layout">
                    <li><a href="/trust" class="text-dark mb-3">Discover</a></li>
                    <li><a href="/trust" class="text-dark">Trust &amp; Safety</a></li>
                    <li><a href="/invite?r=6" class="text-dark">Travel Credit</a></li>
                    <li><a href="/gift" class="text-dark">Gift Cards</a></li>
                    <li><a href="/wishlists/airbnb_picks" class="text-dark">Airbnb Picks</a></li>
                    <li><a href="/mobile" class="text-dark">Mobile</a></li>

                </ul>
            </div>
            <div class='col-1'>
                <ul class="list-layout">
                    <li><a href="/host" class="text-dark mb-3">Hosting</a></li>
                    <li><a href="/hospitality" class="text-dark">Hospitality</a></li>
                    <li><a href="/help/responsible-hosting" class="text-dark">Responsible Hosting</a></li>
                    <li><a href="/home-safety" class="text-dark">Home Safety</a></li>
                    <li><a href="/host/instant" class="text-dark">Instant Book</a></li>
                </ul>
            </div>
        </div>

        <div className="border-top wrapper mb-5 d-flex justify-content-between">
            <div className="mt-3">
                <i class="fab fa-airbnb text-dark mr-1" />
                <span className="text-dark">Airbnb, Inc.</span>
            </div>
            <div class='d-flex flex-row mt-3'>
                <li><a href="/trust" className="text-dark mb-3 fs-12">Terms</a></li>
                <li><a href="/trust" className="text-dark fs-12">Privacy</a></li>
                <li><a href="/invite?r=6" className="text-dark fs-12">Site</a></li>
                <li><a href="/gift" className="text-dark fs-12">Map</a></li>
                <li><i class="fab fa-facebook-f text-dark"></i></li>
                <li><i class="fab fa-twitter text-dark"></i></li>
                <li><i class="fab fa-instagram text-dark"></i></li>
            </div>
        </div>
    </footer>
)

export default Footer;