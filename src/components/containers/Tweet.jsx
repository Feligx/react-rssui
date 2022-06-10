import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary: {
            main: "#ff9800",
        },
        secondary: {
            main: grey[500],
        },
        tertiary: {
            main: purple[500],
        }
    }
});

const Tweet = (props) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const pfp=props.pfp;
    const name=props.name;
    const acc=props.acc;
    const content=props.content;
    const tags=props.tags;
    console.log(tags);

    return (
        <div className='tweet'>
            <div className='row acc_row'>
                <div className='col-md-3'>
                    <Avatar alt="Remy Sharp" src={ pfp } />
                </div>
                <div className='col-md-6 account-name__container'>
                    <p className='account-name'>{ name }</p>
                    <span>
                        { acc }
                        <ThemeProvider theme={theme}>
                            <TaskAltIcon fontSize='inherit' color='tertiary' className='acc-check-icon'></TaskAltIcon>
                        </ThemeProvider>
                    </span>
                </div>
                <div className='col-md-3' style= {{ textAlign: 'end' }}>
                    <ThemeProvider theme={theme}>
                        <IconButton aria-label="favorite" size="small" color={isLiked?"primary":"secondary"} onClick={handleLike}>
                            {isLiked?<StarRateRoundedIcon fontSize='small'/>:<StarOutlineRoundedIcon fontSize='small'/>}
                        </IconButton>
                    </ThemeProvider>
                </div>
            </div>
            <p className='tweet-content'>
                { content }
            </p>
            {
                tags?<div className='row'>
                <a href='#' className='tweet-tags'>{ tags[0] }</a>
                <a href='#' className='tweet-tags'>{ tags[1] }</a>
            </div>:<></>}
        </div>
    );
}

export default Tweet;