import React from 'react';
const styles = {
    badge: {
        backgroundColor: '#e8eaed',
        borderRadius: "12px",
        padding: '5px',
        paddingLeft: "10px",
        paddingRight: "10px",
        fontWeight: 'bold',
        fontSize: 12
    },
    imageBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        height: '30px',
        width: '30px',
        backgroundColor: '#ffff',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
const PropertyListItem = ({
    username, image, rating, title, description, price, type, comments, avatar,
    country, city, profession, room_type, review, beds, bedrooms, bathrooms, guests,
    facility
}) => {
    return (
        <div className="d-flex flex-row">
            <div className="position-relative">
                <img src={image} alt="property" style={{ height: '250px', width: '300px' }} />
                <div style={styles.imageBadge}>
                    <i class="far fa-heart" style={{ fontSize: 15 }} />
                </div>
            </div>
            <div className="d-flex flex-column ml-4 w-100">
                <div className="d-flex flex-row justify-content-between">
                    <div className="text-secondary">{room_type}</div>
                    <div>
                        <i className="fas fa-star mr-1" style={{ color: 'red' }} />
                        {rating} <span className="text-secondary">({review})</span></div>
                </div>
                <div className="mt-2">{title}</div>
                <div className="d-flex flex-row text-secondary mt-2">
                    <p className="m-0">{guests} guests . </p>
                    <p className="m-0">{bedrooms} bedroom . </p>
                    <p className="m-0">{beds} beds . </p>
                    <p className="m-0">{bathrooms} bathrooms</p>
                </div>
                <div className="d-flex flex-row text-secondary">
                    {facility}
                </div>
                <div className="d-flex flex-row justify-content-between align-items-end h-100">
                    <div style={styles.badge}>
                        <i class="far fa-gem fs-12 mr-1" />Rare Find
                    </div>
                    <div className="d-flex flex-column align-items-end m-0 ">
                        <p className='m-0'><strong>${price}</strong> / night</p>
                        <p className="text-secondary m-0 fs-14">
                            ${price} total
                        <i className="far fa-question-circle ml-1" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyListItem;