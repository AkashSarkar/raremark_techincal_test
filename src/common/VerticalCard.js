import React from 'react';
import { truncate } from '../util/StringModification'

const VerticalCard = ({ image, rating, review, amount, description }) => {

    return (
        <div style={{ maxWidth: "200px" }}>
            <img
                src={image.default}
                style={{
                    height: "300px", width: "200px",
                    borderRadius: '3px'
                }}
                alt='img'
            />
            <div className='mt-2' style={{ maxWidth: "250px" }}>
                <p className="text-dark, fs-12">
                    <span>${amount} </span> {truncate(description, 80)}</p>
            </div>
            <div className="d-flex flex-row mt-2 fs-12">
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <span>{review} reviews</span>
            </div>
        </div>
    )
}

export default VerticalCard;