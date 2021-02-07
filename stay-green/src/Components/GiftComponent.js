import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 300,
    },
}));

export default function GiftComponent(props) {

    const classes = useStyles();

    return (
        <div>
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
                    <Button variant="contained" href={props.item.Link} size="small" color="primary">
                        Buy now for {props.item.Price}$
                </Button>
                    <Button variant="contained" color='secondary' onClick={() => props.func(props.item.id, false)} size="small">
                        Removed from saved items
                </Button>
                </CardActions>
            </Card>
        </div>
    );

}
