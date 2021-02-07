import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    cover: {
        width: 300,
        height: 200
    },
}));

export default function GiftComponent(props) {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={props.image}
                    title={props.name}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardContent className={classes.content}>

                </CardContent>
            </Card>
        </div>
    );

}
