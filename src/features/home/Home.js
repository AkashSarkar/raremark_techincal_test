import React from 'react';
import { assets } from '../../assets';
import HorizontalCard from '../../common/HorizontalCard';

const Home = () => {

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
    const renderHorizontalCard = () => (
        homesData.slice(0, 3).map((item) => (
            <div className="mr-3" key={item.id}>
                <HorizontalCard
                    image={item.image}
                    description={item.description}
                    user={item.user}
                />
            </div>
        ))
    )
    return (
        <div className='container d-flex justify-content-center '>
            <div className='padding-horizontal '>
                <h5>What guests are saying about homes in united Kingdom</h5>
                <p className="fs-14">
                    <i className="fas fa-star" style={{ color: 'orange' }}></i>
                    United Kingdom homes are rated <strong>4.7 out of 5 stars</strong> with
                    <strong> 10,500,00 + reviews</strong>
                </p>
                <div className='d-flex flex-row'>
                    {renderHorizontalCard()}
                </div>

            </div>

        </div>
    )
}
export default Home;