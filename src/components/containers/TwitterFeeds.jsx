import React from 'react';
import Tweet from './Tweet';

import pfp1 from '@img/1.jpg';
import pfp2 from '@img/2.jpg';
import pfp3 from '@img/3.jpg';
import pfp4 from '@img/4.jpg';
import pfp5 from '@img/5.jpg';

const TwitterFeeds = () => {

    const content1="I love cookie chupa chups sweet tart pie ⚜ chocolate bar.";
    const content2="Halvah I love powder jelly I love cheesecake cotton candy. 😍";
    const content3="Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake.";

    return (
        <div className='container-card'>
            <h6>Twitter Feeds</h6>
            <Tweet pfp={ pfp4 } name="Gertrude Stevens" acc="@tiana59" content={ content1 } tags={["design", "fashion"]}></Tweet>
            <Tweet pfp={ pfp5 } name="Lura Jones" acc="@tiana59" content={ content1 } tags={["vuejs", "code"]}></Tweet>
            <Tweet pfp={ pfp1 } name="Norman Gross" acc="@tiana59" content={ content1 } tags={["sketch", "uiux"]}></Tweet>
        </div>
        );
}

export default TwitterFeeds;