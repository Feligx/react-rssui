import React from 'react'

const ProfileHeader = ({ user }) => {
    return (
        <div className="row profile-header">
            {/* <div><img className="header-bg" src="https://images.unsplash.com/photo-1606247357835-d27fe83fc6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" alt="" /></div> */}
            <div className="profile-header__avatar">
                <img className='img-thumbnail header-img' src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" />
                <div className='profile-header-name'>
                    <h3>Kitty Allanson</h3>
                    <h5>UI/UX Designer</h5>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-md-2'>

                </div>
                <div className='col-md-10 header-button-row'>
                    <button type="button" className="btn btn-primary header__btn-active">Feed</button>
                    <button type="button" className="btn btn-primary header__btn">About</button>
                    <button type="button" className="btn btn-primary header__btn">Photos</button>
                    <button type="button" className="btn btn-primary header__btn">Friends</button>
                    <button type="button" className="btn btn-primary header__btn-edit">Edit</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileHeader;