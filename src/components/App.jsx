import React from 'react'
import '../styles/global.scss'
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

const App = () => {
    return (
        <div>
            <ProfileHeader></ProfileHeader>
            <ProfileBody></ProfileBody>
        </div>
    );
}

export default App;
