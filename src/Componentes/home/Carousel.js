import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import {Paper,Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
      // a must if you want to set arrows, indicator as absolute
      position: 'relative',
      width: '100%',
    },
    image: {
      zIndex: 10,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    arrow: {
      display: 'none',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [breakpoints.up('sm')]: {
        display: 'inline-flex',
      },
    },
    arrowLeft: {
      left: 0,
      [breakpoints.up('lg')]: {
        left: -64,
      },
    },
    arrowRight: {
      right: 0,
      [breakpoints.up('lg')]: {
        right: -64,
      },
    },
  }));

 
function Example(props)
{
   
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:
            // eslint-disable-next-line max-len
            '../mate.jpg',
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:
            // eslint-disable-next-line max-len
            '../mates2.jpg',
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    return (
            <>
             <img  src={props.item.image} className={classes.image}  />
           </>
    )
}

export default Example ;