import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import HouseImage from '../pics/logo.png'
import './CardArray.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

export default function CardLayout({details}) {
    const classes = useStyles()
    return (
    
       <Card className= {classes.root}>
           {/* Card action makes this component clickable*/}
        <CardActionArea>
            <CardMedia 
                className = {classes.media}
                image = {HouseImage}
                title = "House Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {details.type}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                    This is the chill house Edgar made during our design process though.
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button size = "small" color = "primary">
                Read more
            </Button>
        </CardActions>
       </Card>
      
    )
}
