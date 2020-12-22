import React from 'react';
import { assets } from '../../assets';
import HorizontalCard from '../../common/HorizontalCard';

const Home = () => {
    const homesData = [
        {
            image: assets.image1,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            user: {
                img: assets.user,
                name: 'Nicky',
                location: 'china'
            }
        },
        {
            image: assets.image2,
            description: "A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London",
            user: {
                img: assets.user,
                name: 'Shanna',
                location: 'United Kingdom'
            }
        }
    ]
    return (
        <div>
            <HorizontalCard
                image={assets.image4}
                description={"A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in my home and welcoming you to London"}
                user={{
                    img: assets.user,
                    name: 'Nicky',
                    location: 'china'
                }}
            />
        </div>
    )
}
export default Home;