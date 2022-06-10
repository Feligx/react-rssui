import React from 'react';

const Photo = (props) => {

    const photo = props.photo;

    return (
    <div className='col latest-photos-col'>
        <img className='latest-photos-photo' src={ photo }></img>
    </div>
    );
}

const LatestPhotos = () => {
    return (
        <div className='container container-card'>

            <h6>Latest Photos</h6>

            <div className='row latest-photos-row'>

                <Photo photo="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"></Photo>
                
            </div>

            <div className='row latest-photos-row'>

                <Photo photo="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"></Photo>
                
            </div>
            
            <div className='row'>

                <Photo photo="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"></Photo>

                <Photo photo="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"></Photo>
                
            </div>

        </div>
    );
}

export default LatestPhotos;