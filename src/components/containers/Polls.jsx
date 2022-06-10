import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Polls = () => {
    return (
        <div className='container container-card'>

            <h6>Polls</h6>

            <p>Who is the best actor in Marvel Cinematic Universe?</p>

            <div className='row polls-checkrow'>
                <div className="col-md-4 form-check polls-checkrow-checkbtn">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <p>RDJ</p>
                </div>
                <div className='col-md-8 polls-checkrow-percentage'>
                    <p>82%</p>
                </div>
            </div>

            <div className="progress polls-progress">
                <div className="progress-bar polls-progress__bar" role="progressbar" style={ { width: '82%' } } aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className='polls-votedby'>
                <AvatarGroup className='post-social-stats_liked-by__avatars' max={5}>
                            <Avatar sx={{width: 24, height: 24}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </div>

            <div className='row polls-checkrow'>
                <div className="col-md-8 form-check polls-checkrow-checkbtn">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <p>Chris Hemswort</p>
                </div>
                <div className='col-md-4 polls-checkrow-percentage'>
                    <p>67%</p>
                </div>
            </div>
            <div className="progress polls-progress">
                <div className="progress-bar polls-progress__bar" role="progressbar" style={ { width: '67%' } } aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className='polls-votedby'>
                <AvatarGroup className='post-social-stats_liked-by__avatars' max={5}>
                            <Avatar sx={{width: 24, height: 24}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar sx={{width: 24, height: 24}} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                </AvatarGroup>
            </div>

        </div>
    );
}

export default Polls;