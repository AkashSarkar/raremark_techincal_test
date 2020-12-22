import React from 'react';
import { truncate } from '../util/StringModificarion'
const styles = {
    avatar: {
        height: "30px",
        width: "30px",
        borderRadius: '15px'
    }
}
const HorizontalCard = ({ image, rating, description, user }) => {

    return (
        <div style={{ maxWidth: "300px" }}>
            <img
                src={image.default}
                style={{
                    height: "200px", width: "300px",
                    borderRadius: '3px'
                }}
                alt='img'
            />
            <div className="d-flex flex-row mt-2">
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
                <i className="fas fa-star mr-1" style={{ color: 'green' }}></i>
            </div>
            <div className='mt-2' style={{ maxWidth: "250px" }}>
                <p className="text-dark, fs-12"> {truncate(description, 80)}</p>
            </div>
            <div className="d-flex flex-row mb-2">
                <img src={user.img.default} style={styles.avatar} alt="profile" />
                <div className="ml-3 fs-12">
                    <div className="fw-600">{user.name}</div>
                    <div>{user.location}</div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard;