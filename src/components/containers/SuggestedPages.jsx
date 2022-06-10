import React from 'react';
import SuggestedPage from './SuggestedPage';

import pfp1 from '@img/1.jpg';
import pfp2 from '@img/2.jpg';
import pfp3 from '@img/3.jpg';
import pfp4 from '@img/4.jpg';
import pfp5 from '@img/5.jpg';

const SuggestedPages = () => {
    return (
        <div className='container-card'>
            <h6>Suggested Pages</h6>
            <SuggestedPage pfp={ pfp1 } name="Peter Reed" company_type="Company"></SuggestedPage>
            <SuggestedPage pfp={ pfp2 } name="Harriett Adkins" company_type="Company"></SuggestedPage>
            <SuggestedPage pfp={ pfp3 } name="Juan Weaver" company_type="Company"></SuggestedPage>
            <SuggestedPage pfp={ pfp4 } name="Claudia Chandler" company_type="Company"></SuggestedPage>
            <SuggestedPage pfp={ pfp5 } name="Earl Briggs" company_type="Company"></SuggestedPage>
            <SuggestedPage pfp={ pfp1 } name="Jonathan Lyons" company_type="Beauty Store"></SuggestedPage>
        </div>
    );
}

export default SuggestedPages;