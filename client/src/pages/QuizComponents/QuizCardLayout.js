import React, {useState, useEffect} from 'react'
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
        height: 150,
    },
});

export default function QuizCardLayout({details}) {
    const classes = useStyles()
    const [img, setImg] = useState(HouseImage)
    useEffect(() => {
    if(details.imgURL  !== null){
        setImg(details.imgURL);

    }else {
        setImg(HouseImage)
    }
    },[])

    return (
    
       <Card className= {classes.root}>
           <div className="quiz-card-header">
           <Typography gutterBottom variant="body2" component="h2">
                {details.type}
                </Typography>
                <div className="quiz-card-header-size">
                <Typography variant = "body2" color = "textSecondary" component = "p">
                {details.size}
                </Typography>
                </div>
           </div>
        <CardActionArea>
            <CardMedia 
                className = {classes.media}
                image = {img}
                title = {details.name}
            />
            <CardContent>
                <div className="quiz-card-pet-name">
                <Typography gutterBottom variant="h5" component="h2">
                {details.name}
                </Typography>
                </div>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                Buy Cost: ${details.buyCost}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                First year cost: ${details.firstYearCost}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                Annual Cost: ${details.annualCost}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                Activity Level: {details.activityLevel}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                Owner Experience: {details.ownerExp}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <div className="quiz-button">
            <Link to={{
                pathname: '/petlayout',
                state: details
            }} className="link-more" >
            <Button size = "small" color = "primary">
                Learn More
            </Button>
            </Link>
            </div>
        </CardActions>
       </Card>
      
    )
}



