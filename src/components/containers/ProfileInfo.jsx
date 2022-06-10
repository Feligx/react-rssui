import React from 'react';

const ProfileInfo = () => {
    return (
        <div className= "container-card-left">
            <div id="About">
                <h6>
                    About
                </h6>
                <p className='profile-text'>
                    Tart I love sugar plum I love oat cake. Sweet ⚜ roll caramels I love jujubes. Topping cake wafer.
                </p>
            </div>
            <div id="Joined">
                <h6>
                    Joined
                </h6>
                <p className='profile-text'>
                    November 15, 2015
                </p>
            </div>
            <div id="Lives">
                <h6>
                    Lives
                </h6>
                <p className='profile-text'>
                    New York, USA
                </p>
            </div>
            <div id="Email">
                <h6>
                    Email
                </h6>
                <p className='profile-text'>
                    bucketful@fiendhead.org
                </p>
            </div>
            <div id="Website">
                <h6>
                    Website
                </h6>
                <p className='profile-text'>
                    www.pixinvent.com
                </p>
            </div>
        </div>
    );
}

export default ProfileInfo;