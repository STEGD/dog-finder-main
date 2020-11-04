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
import {Link} from 'react-router-dom'
import './QuizCardLayout.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

export default function QuizCardLayout(props) {
    const classes = useStyles()

    return (
    
       <Card className= {classes.root}>
        <CardActionArea>
            <CardMedia 
                className = {classes.media}
                image = {HouseImage}
                title = "House Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.petName}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Link to="/petlayout" target="_blank" className="link-more">
            <Button size = "small" color = "primary">
                Learn More
            </Button>
            </Link>
        </CardActions>
       </Card>
      
    )
}



