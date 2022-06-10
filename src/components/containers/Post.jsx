import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import Comment from './Comment';

import pfp1 from '@img/1.jpg';
import pfp2 from '@img/2.jpg';
import pfp3 from '@img/3.jpg';
import pfp4 from '@img/4.jpg';
import pfp5 from '@img/5.jpg';

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

const Post = (props) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const pfp=props.pfp;
    const name=props.name;
    const pubdate=props.pubdate;
    const content=props.content;
    const img=props.img;
    const content1="Easy & smart fuzzy research 🕵️‍♀️ functionality wich enables users to search quickly.";
    const content2="Unlimited color🖌 options allows you to set your application color as per your branding 🤪";

    return (
        <div className='container-card'>


            <div className='row'>

                <div className='pfp-container-post'>
                    <Avatar alt="Remy Sharp" src={ pfp } sx={{ width: 56, height: 56 }} />
                    
                </div>

                <div className='account-name__container-post'>
                    <p className='account-name'>{ name }</p>
                    <span>{ pubdate }</span>
                </div>

            </div>


            <p className='post-content'>
                { content }
            </p>


            <div className='post-image'>
                <img  src={ img } alt='post' />
            </div>


            <div className='row post-social-stats' >

                <div className='col-md-8 post-social-stats_liked-by'>
                    
                    <div className='post-social-stats_liked-by__heart'>
                        <ThemeProvider theme={theme}>
                            <IconButton aria-label="favorite" size="small" color={isLiked?"primary":"secondary"} onClick={handleLike}>
                                {isLiked?<FavoriteRoundedIcon/>:<FavoriteBorderRoundedIcon/>}
                            </IconButton>
                        </ThemeProvider>
                        <span>1.2k</span>
                    </div>

                    <AvatarGroup className='post-social-stats_liked-by__avatars' max={5}>
                        <Avatar sx={{width: 32, height: 32}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar sx={{width: 32, height: 32}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar sx={{width: 32, height: 32}} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar sx={{width: 32, height: 32}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        <Avatar sx={{width: 32, height: 32}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <span>+140 more</span>

                </div>

                <div className='col-md-4 post-social-stats__comms-share'>
                    <div>
                        <ThemeProvider theme={theme}>
                            <IconButton aria-label="favorite" size="small" color="secondary" onClick={()=>{}}>
                                <ChatBubbleOutlineRoundedIcon/>
                            </IconButton>
                        </ThemeProvider>
                        <span>1.2k</span>
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <IconButton aria-label="favorite" size="small" color="secondary" onClick={()=>{}}>
                                <ShareOutlinedIcon/>
                            </IconButton>
                        </ThemeProvider>
                        <span>1.2k</span>
                    </div>

                </div>

            </div>

            <div className='comments'>

                <Comment pfp={ pfp1 } name="Leeana Alvord" content={ content1 } likes={ 34 }></Comment>
                <Comment pfp={ pfp2 } name="Jackey Potter" content={ content2 } likes={ 61 }></Comment>
                
            </div>
            
            
            <div className="mb-3 post-comment-box">
                <textarea className="form-control" id="CommentBox" rows="3" placeholder="Add comment"></textarea>
                <button className="btn btn-primary post-comment-box__btn" type="submit">Post Comment</button>
            </div>
            

        </div>
    );
}

export default Post;