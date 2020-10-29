import React, {useEffect, useState} from 'react'
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
    const [image_pic, image_update] = useState(HouseImage)
    //get the image from details else assign default
    // need to check if the details have info to display it does not use default values!!!
    useEffect(() => {

        if(details.primary_photo_cropped !== null)
            console.log("Image is: " , details.primary_photo_cropped.small)
        if(details.primary_photo_cropped !== null){
            image_update(details.primary_photo_cropped['small'])
        }
        else {
            image_update(HouseImage)
        }
        // Object.keys(details).map(keys => {
        //     // this loops through all the keys until get 1
        //     if(keys === 'primary_photo_cropped'){
        //         //if its not empty get the small image
        //         if(details[keys] != null){
        //             Object.keys(details[keys]).map(
        //                 pics => {
        //                     // checks the keys small, large, med
        //                     if(details[keys][pics] === 'small'){
        //                         image_update(details[keys][pics])
        //                     }
        //                 }
        //             )
                  
        //         }
        //         //else do nothing keep the default house pic
        //     }
        // })

    },[])

    function sendToURL(){
        window.open(details.url)
    }
 //card media must have an image prop!
 //need to get image but cant!
    return (
    
       <Card className= {classes.root}>
           {/* Card action makes this component clickable*/}
        <CardActionArea>
            <CardMedia 
                className = {classes.media}
                image = {image_pic}
                title = {details.type}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {details.name}
                </Typography>
                <Typography variant = "body2" color = "textSecondary" component = "p">
                    {details.description}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button size = "small" color = "primary" onClick={sendToURL}>
                Read more
            </Button>
        </CardActions>
       </Card>
      
    )
}
