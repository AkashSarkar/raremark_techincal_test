import userEvent from '@testing-library/user-event';
import React from 'react';
import { truncate } from '../util/StringModification'

const SquareCard = ({ image, name, profession, type, description }) => {

    return (
        <div style={{ maxWidth: "200px" }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={image}
                    style={{
                        height: "200px", width: "200px",
                        borderRadius: '3px'
                    }}
                    alt='img'
                />
                <div style={{ position: 'absolute', bottom: '0px', left: '10px' }}>
                    <div>
                        <p
                            style={{
                                margin: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: "#ffff",
                                fontWeight: 'bold',
                                paddingLeft: "4px",
                                width: '50px',
                                borderRadius: '5px',
                                fontSize: 12
                            }}>
                            GUIDE
                    </p>
                    </div>

                    <p
                        className="font-weight-bold text-uppercase"
                        style={{
                            margin: 0,
                            fontWeight: 'bold',
                            color: '#ffff',
                            fontSize: 18,
                            letterSpacing: 0.1
                        }}
                    >
                        {type}
                    </p>
                </div>
            </div>
            <div className='mt-2' style={{ maxWidth: "200px" }}>
                <p className="text-dark, fs-12">
                    By {name} {profession}
                </p>
            </div>

        </div>
    )
}

export default SquareCard;