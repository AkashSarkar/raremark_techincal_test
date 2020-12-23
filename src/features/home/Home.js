import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { assets } from '../../assets';
import HorizontalCard from '../../common/HorizontalCard';
import SquareCard from '../../common/SquareCard';
import VerticalCard from '../../common/VerticalCard';
import { getPlacesThunk } from './HomeSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlacesThunk())
    }, [])
    const placeData = useSelector(state => state.home.places.data) || []
    console.log(placeData);
    const homesData = [
        {
            id: 1,
            image: assets.image1,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            user: {
                img: assets.user,
                name: 'Nicky',
                location: 'china'
            }
        },
        {
            id: 2,
            image: assets.image2,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            user: {
                img: assets.user,
                name: 'Shanna',
                location: 'United Kingdom'
            }
        },
        {
            id: 3,
            image: assets.image3,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            user: {
                img: assets.user,
                name: 'Debra',
                location: 'United states'
            }
        }
    ]
    const bookingData = [
        {
            id: 1,
            image: assets.image1,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            rating: 4,
            amount: 7956,
            review: 84
        },
        {
            id: 2,
            image: assets.image2,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            rating: 4,
            amount: 7956,
            review: 84
        },
        {
            id: 3,
            image: assets.image3,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            rating: 4,
            amount: 13361,
            review: 84
        },
        {
            id: 4,
            image: assets.image4,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            rating: 4,
            amount: 23204,
            review: 84
        },
        {
            id: 5,
            image: assets.image3,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            rating: 4,
            amount: 18234,
            review: 84
        }
    ]

    const renderHorizontalCard = () => (
        homesData.slice(0, 3).map((item) => (
            <Link to='' className="text-dark mr-3" key={item.id}>
                <HorizontalCard
                    image={item.image}
                    description={item.description}
                    user={item.user}
                />
            </Link>
        ))
    );

    const renderVerticalCard = () => (
        bookingData.slice(0, 5).map((item) => (
            <Link to='' className="text-dark mr-3" key={item.id}>
                <VerticalCard
                    image={item.image}
                    description={item.description}
                    rating={item.rating}
                    amount={item.amount}
                    review={item.review}
                />
            </Link>
        ))
    );

    const renderSquareCard = () => (
        placeData.slice(0, 5).map((item) => (
            <Link to={`/property-details/${item.id}`} className="text-dark mr-3" key={item.id}>
                <SquareCard
                    image={item.image}
                    name={item.username}
                    profession={item.profession}
                    type={item.type}
                />
            </Link>
        ))
    );
    return (
        <div className='container d-flex justify-content-center flex-column'>
            <div className='padding-horizontal '>
                <h5>What guests are saying about homes in united Kingdom</h5>
                <p className="fs-14">
                    <i className="fas fa-star" style={{ color: 'orange' }}></i>
                    United Kingdom homes are rated <strong>4.7 out of 5 stars</strong> with
                    <strong> 10,500,00 + reviews</strong>
                </p>
                <div className='d-flex flex-row mt-3'>
                    {renderHorizontalCard()}
                </div>
            </div>

            <div className='padding-horizontal' style={{ marginTop: "70px" }}>
                <h5>Just Booked</h5>
                <div className='d-flex flex-row mt-4'>
                    {renderVerticalCard()}
                </div>
            </div>

            <div className='padding-horizontal' style={{ marginTop: "70px" }}>
                <div className="d-flex flex-row justify-content-between">
                    <h5>Places in London</h5>
                    <div>
                        <Link to="/properties" className="text-dark fs-12 mr-1" >See all <i class="fas fa-chevron-right fs-12" ></i></Link>
                    </div>
                </div>
                <div className='d-flex flex-row mt-4'>
                    {renderSquareCard()}
                </div>
            </div>

        </div>
    )
}
export default Home;