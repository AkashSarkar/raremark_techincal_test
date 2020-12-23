import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaceThunk } from '../home/HomeSlice';
const styles = {
    avatar: {
        height: "50px",
        width: "50px",
        borderRadius: '25px'
    },
    cart: {
        padding: '20px'
    }
}
const PropertyDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getPlaceThunk(id))
    }, [])

    const place = useSelector(state => state.home.places.place)
    console.log(place)
    return (
        <div className="container padding-horizontal">
            <div className="d-flex flex-row ">
                <h5 className="text-info mr-3">{place.place_name}</h5>
                <div className="d-flex flex-row mt-1">
                    <i className="fas fa-star mr-1" style={{ color: 'orange' }}></i>
                    <i className="fas fa-star mr-1" style={{ color: 'orange' }}></i>
                    <i className="fas fa-star mr-1" style={{ color: 'orange' }}></i>
                    <i className="fas fa-star mr-1" style={{ color: 'orange' }}></i>
                </div>
            </div>
            <div className="fs-12">
                {place.city}, {place.country}
            </div>
            <div className="d-flex flex-row mt-1 align-items-center fs-12">
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star-half-alt mr-1" style={{ color: 'green' }}></i>
                <div className="text-primary"> {place.review} reviews</div>
            </div>
            <div className="mt-3 mb-2">
                <img src={place.image} alt='home' style={{ width: '100%', height: "500px" }} />
            </div>
            <div className="d-flex flex-row mt-5">
                <div className="col-md-8">
                    <div className="d-flex flex-row ">
                        <h3>{place.title}</h3>
                        <div className="col-md-2 d-flex flex-column justify-content-start align-items-center"

                        >
                            <img src={place.avatar} style={styles.avatar} alt="profile" />
                            <div className="fs-14 text-secondary d-flex justify-content-center align-items-center">
                                {place.username}
                            </div>
                        </div>
                    </div>
                    <div className="fs-14 text-secondary">{place.country}</div>
                    <div>
                        <div className="d-flex flex-row mt-3 align-items-start">
                            <i className="fas fa-home mr-4" />
                            <div>
                                <p className="m-0 fs-16">Private room in flat</p>
                                <div className="d-flex flex-row text-secondary fs-14">
                                    <p className="m-0 pr-3">{place.guests} guests  </p>
                                    <p className="m-0 pr-3">{place.bedrooms} bedroom  </p>
                                    <p className="m-0 pr-3">{place.beds} beds  </p>
                                    <p className="m-0 pr-3">{place.bathrooms} bathrooms</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-3 align-items-start">
                            <i className="fas fa-bell mr-4" />
                            <div>
                                <p className="m-0 fs-16">Self Check-in</p>
                                <div className="d-flex flex-row text-secondary fs-14">
                                    <p className="m-0 pr-3">Check yourself in with the lockbox </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-3 align-items-start">
                            <i class="fas fa-cloud-meatball mr-4" />
                            <div>
                                <p className="m-0 fs-16">Breakfast</p>
                                <div className="d-flex flex-row text-secondary fs-14">
                                    <p className="m-0 pr-3">This is one of a few place of this area that has this feature</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-3 align-items-start">
                            <i className="fas fa-phone mr-4" />
                            <div>
                                <p className="m-0 fs-16">Great communication</p>
                                <div className="d-flex flex-row text-secondary fs-14">
                                    <p className="m-0 pr-3">100% of recent guests has rated this place 5-star in communication</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom mt-4" />
                        <div className="mt-4 text-secondary fs-14" >{place.description}</div>
                    </div>
                </div>
                <div className="col-md-4 d-flex border" style={styles.cart}>
                    <div className="d-flex flex-column m-0 w-100 ">
                        <p className='m-0'><strong className="fs-16">${place.price}</strong> <span className="fs-12">per night</span></p>
                        <div className="fs-12">
                            <i className="fas fa-star mr-1" style={{ color: 'green' }} />
                            {place.rating}<span className="text-secondary">({place.review} reviews)</span>
                        </div>
                        <div className="border-bottom mt-3" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default PropertyDetails;