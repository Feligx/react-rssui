import React from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Avatar from '@mui/material/Avatar';


const Suggestion= (props) => {

    const name = props.name;
    const pfp = props.pfp;
    const mutualFriends = props.mutualFriends;

    return (
        <div className='row acc_row'>

            <div className='col-md-3'>
                <Avatar alt="Remy Sharp" src={ pfp } />
            </div>

            <div className='col-md-6 account-name__container'>
                <p className='account-name'>{ name }</p>
                <span>{ mutualFriends } Mutual Friends</span>
            </div>

            <div className='col-md-3 '>
                <a className="btn btn-primary suggestions__btn" href="#" role="button">
                    <PersonAddOutlinedIcon fontSize='small'></PersonAddOutlinedIcon>
                </a>
            </div>

        </div>
    );
}

export default Suggestion;