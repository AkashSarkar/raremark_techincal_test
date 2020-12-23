import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { assets } from '../assets';

const styles = {
    searchWrapper: {
        backgroundColor: '#314a91',
        height: '150px',
        // opacity:0.8
        position: 'relative',
    },
    body: {
        top: 0,
        padding: '5px',
        width: '100%'
    },
    searchBox: {
        marginTop: '35px',
        backgroundColor: 'orange',
        borderRadius: "3px",
        display: 'flex',
        // alignItems: 'flex-end'
    },
    input: {
        border: 'none',
        fontSize: 12,
        paddingTop: '10px',
        paddingBottom: '10px'
    }
}
const Search = () => {
    const [adult, setGuest] = useState(0)
    const [children, setChildren] = useState(0)
    const [room, setRoom] = useState(0)
    const _onFocus = (e) => {

        e.currentTarget.type = "date";
    };
    const _onBlur = (e) => {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Anytime";
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href="#"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={{
                color: 'grey', textDecoration: 'none',
            }}
        >
            {children}
          &#x25bc;
        </a>
    ));
    return (
        <div style={styles.searchWrapper}>
            <img
                src={assets.image2.default}
                style={{ height: '150px', width: '100%', opacity: 0.2 }}
                alt='background'

            />
            <div className='position-absolute' style={styles.body}>
                <div className="text-white fw-700" style={{ fontSize: 26 }}>Resorts</div>
                <div className="text-white fw-700 fs-12">Treat yourself! your dream resorts stay just a few click away</div>

                <div style={styles.searchBox}>
                    <div className="d-flex w-100 p-1">
                        <div className='col-md-5 d-flex align-items-center mr-1' style={{ backgroundColor: '#fff' }}>
                            <i className="fas fa-location-arrow mr-2"></i>
                            <input type="text"
                                className='w-100 border-none'
                                style={styles.input}
                                placeholder='More places than you could ever go(But you can try!)'
                            />
                        </div>
                        <div className='col-md-2  d-flex align-items-center mr-1' style={{ backgroundColor: '#fff' }}>
                            <i className="fas fa-calendar-alt mr-2" />
                            <input placeholder="Check-in -- check-out" style={styles.input} type="text" onFocus={_onFocus} onBlur={_onBlur} />
                        </div>
                        <div className='col-md-4' style={{ backgroundColor: '#fff' }}>
                            <Dropdown >
                                <Dropdown.Toggle as={CustomToggle}>
                                    <i className="fas fa-user-friends mr-2"></i>
                                    {adult} adult . {children} children . {room} room
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='col-md-1 d-flex justify-content-start'>
                            <button className="btn btn-primary btn-sm">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;