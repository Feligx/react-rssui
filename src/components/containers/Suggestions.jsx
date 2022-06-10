import React from 'react';
import Suggestion from './Suggestion';

import pfp1 from '@img/1.jpg';
import pfp2 from '@img/2.jpg';
import pfp3 from '@img/3.jpg';
import pfp4 from '@img/4.jpg';
import pfp5 from '@img/5.jpg';

const Suggestions = () => {
    return (
        <div className='container container-card-right'>

            <h6>Suggestions</h6>

            <div className='row'>

                <Suggestion pfp={ pfp1 } name="Peter Reed" mutualFriends="6"></Suggestion>

                <Suggestion pfp={ pfp2 } name="Harriett Adkins" mutualFriends="3"></Suggestion>

                <Suggestion pfp={ pfp3 } name="Juan Weaver" mutualFriends="1"></Suggestion>

                <Suggestion pfp={ pfp4 } name="Claudia Chandler" mutualFriends="16"></Suggestion>

                <Suggestion pfp={ pfp5 } name="Earl Briggs" mutualFriends="4"></Suggestion>

                <Suggestion pfp={ pfp1 } name="Jonathan Lyons" mutualFriends="25"></Suggestion>
            </div>

        </div>
    );
}

export default Suggestions;