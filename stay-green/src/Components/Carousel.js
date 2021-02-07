import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    FormLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Paper,
    Button,
    Slider,
    Typography,
    Card
} from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import "./Carousel.scss"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

async function likeItem(id) {
    const url = 'https://giftgreen.herokuapp.com/like';
    let payload = {
        'id': id,
        'liked': true
    }
    try {
        let response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(payload)
        });
        if (response.status === 200) {
            console.log('liked item: ' + id)
        }
    } catch (e) {
        console.log(e)
    }
}

function Project(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.Image}
                    title={props.item.Name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.Name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.Description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={props.item.Link} size="small" color="primary">
                    Buy now for {props.item.Price}$
                </Button>
                <Button onClick={likeItem(props.item.id)} size="small" color="primary">
                    Save for later!
                </Button>
            </CardActions>
        </Card>
    )
}

export default class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.items = props.items;

        this.state = {
            autoPlay: false,
            animation: "slide",
            indicators: false,
            timeout: 200,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <Carousel
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}

                >
                    {
                        this.items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>
            </div>
        )
    }
}