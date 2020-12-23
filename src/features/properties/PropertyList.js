import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlacesThunk } from '../home/HomeSlice';
import PropertyListItem from './PropertyListItem';

const PropertyList = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    useEffect(() => {
        dispatch(getPlacesThunk())
    }, [])
    const placeData = useSelector(state => state.home.places.data) || []
    const isLoading = useSelector(state => state.home.places.isLoading)
    const {
        currentPage, currentData, next, prev, maxPage, jump
    } = usePagination(blogPostsList, 5)
    const renderList = () => {
        return placeData.map((item) => (
            <div className="pb-4 mt-4 border-bottom">
                <PropertyListItem
                    username={item.username}
                    image={item.image}
                    rating={item.rating}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    type={item.type}
                    comments={item.comments}
                    avatar={item.avatar}
                    country={item.country}
                    city={item.city}
                    profession={item.profession}
                    room_type={item.room_type}
                    review={item.review}
                    beds={item.beds}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    guests={item.guests}
                    facility={item.facility}
                />
            </div>
        ))
    }
    return (
        <div className="container padding-horizontal">
            { isLoading ? (
                <h1>Loading</h1>
            ) : (

                    renderList()
                )
            }

        </div>
    )
};
export default PropertyList;