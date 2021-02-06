import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));

export default function GiftComponent(props) {

    const classes = useStyles();

    return (
        <div>
            <h1>Hello</h1>
            <Card className={classes.root}>
                <CardMedia
                    image={props.link}
                    title={props.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.Description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}
