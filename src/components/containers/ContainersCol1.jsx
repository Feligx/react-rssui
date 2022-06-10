import React from 'react';
import ProfileInfo from './ProfileInfo';
import SuggestedPages from './SuggestedPages';
import TwitterFeeds from './TwitterFeeds';
import Post from './Post';
import LatestPhotos from './LatestPhotos';
import Suggestions from './Suggestions';
import Polls from './Polls';

import pfp1 from '@img/1.jpg';
import pfp2 from '@img/2.jpg';
import pfp3 from '@img/3.jpg';
import pfp4 from '@img/4.jpg';
import pfp5 from '@img/5.jpg';

const ContainersCol1 = () => {

    const post_content1="Wonderful Machine. A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to client who are looking for the perfect fit.";
    const post_img1="https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
    const post_img2="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

    return (
        <>
            
            <div className='col-md-3' style={{ padding: '0', paddingRight: '36px',}}>
                <ProfileInfo></ProfileInfo>
                <SuggestedPages></SuggestedPages>
                <TwitterFeeds></TwitterFeeds>
            </div>

            <div className='col-md-6' style={{ padding: '0'}}>
                <Post pfp={pfp1} name="Leeana Alvord" pubdate="12 Dec 2018 at 1:16 AM" content={ post_content1 } img={ post_img1 }></Post>
                <Post pfp={pfp2} name="Rosa Walters" pubdate="12 Dec 2018 at 1:16 AM" content={ post_content1 } img={ post_img2 }></Post>
                <Post pfp={pfp2} name="Charles Watson" pubdate="12 Dec 2018 at 1:16 AM" content={ post_content1 } img={ post_img1 }></Post>
                <div style={{ textAlign:'center', marginBottom: '8px' }}>
                    <button className="btn btn-primary post-comment-box__btn" type="submit">Load More</button>
                </div>
            </div>
            
            <div className='col-md-3' style={{ padding: '0', paddingLeft: '36px'}}>
                <LatestPhotos></LatestPhotos>
                <Suggestions></Suggestions>
                <Polls></Polls>
            </div>
        
        </>
    );
}

export default ContainersCol1;