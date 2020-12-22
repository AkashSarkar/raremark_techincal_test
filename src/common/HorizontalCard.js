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
        <div style={{ maxWidth: "250px" }}>
            <img
                src={image.default}
                style={{
                    height: "150px", width: "250px",
                    borderRadius: '3px'
                }}
                alt='img'
            />
            <div className="d-flex flex-row">
                <i className="fas fa-star" style={{ color: 'green' }}></i>
                <i className="fas fa-star" style={{ color: 'green' }}></i>
                <i className="fas fa-star" style={{ color: 'green' }}></i>
                <i className="fas fa-star" style={{ color: 'green' }}></i>
            </div>
            <div style={{ maxWidth: "200px" }}>
                <p className="text-dark, fs-12"> {truncate(description, 80)}</p>
            </div>
            <div className="d-flex flex-row">
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