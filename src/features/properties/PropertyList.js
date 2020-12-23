import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlacesThunk } from '../home/HomeSlice';
import PropertyListItem from './PropertyListItem';
import usePagination from '../../common/usePagination'
import Search from '../../common/Search';

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
    } = usePagination(placeData, 10)
    const renderList = () => {
        return currentData().map((item) => (
            <Link to={`/property-details/${item.id}`} className="pb-4 text-dark mt-4 border-bottom">
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
            </Link>
        ))
    }
    const renderPageNumber = () => {
        const pages = []
        for (let i = 1; i <= maxPage; i++) {
            pages.push(
                <li key={i} className={`page-item ${i === currentPage ? "active" : ''}`}>
                    <button className="page-link" onClick={() => jump(i)}>{i}</button>
                </li>
            )
        }
        return pages
    }
    return (
        <div className="container padding-horizontal">
            <Search />
            { isLoading ? (
                <h1>Loading</h1>
            ) : (
                    <div className="mt-4">
                        {
                            renderList()
                        }
                    </div>
                )
            }
            <div className="col-md-12 text-center p-5">
                <div aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage !== 1 ? "" : "disabled"}`}>
                            <button className="page-link" tabIndex="-1" onClick={() => prev()}>Previous</button>
                        </li>
                        {renderPageNumber()}
                        <li className={`page-item ${currentPage === maxPage ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => next()}>Next</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default PropertyList;