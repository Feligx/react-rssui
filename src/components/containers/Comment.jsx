import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import pfp from '@img/1.jpg';

const theme = createTheme({
    palette:{
        primary: {
            main: "#ef5350",
        },
        secondary: {
            main: grey[500],
        }
    }
});

const Comment = (props) => {

    const [isLiked, setIsLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(props.likes);

    const handleLike = () => {
        if(isLiked){
            setNumLikes(numLikes-1);
        }else{
            setNumLikes(numLikes + 1);
        }
        
        setIsLiked(!isLiked);
        
    };

    const pfp=props.pfp;
    const name=props.name;
    const content=props.content;
    const likes=props.likes;

    return (
        <div className='row comments__comment'>
            <div className='pfp-container-post'>
                <Avatar alt="Remy Sharp" src={ pfp } sx={{ width: 40, height: 40 }} />
            </div>

            <div className='account-name__container-post comments__comment-content'>
                <p className='account-name'>{ name }</p>
                <span>{ content }</span>
            </div>
            <div className='comments__comment-like'>
                <ThemeProvider theme={theme}>
                    <IconButton aria-label="favorite" size="small" color={isLiked?"primary":"secondary"} onClick={handleLike}>
                        {isLiked?<FavoriteRoundedIcon/>:<FavoriteBorderRoundedIcon/>}
                    </IconButton>
                </ThemeProvider>
                <span>{ numLikes+1 }</span>
            </div>
        </div>
    );
}

export default Comment;