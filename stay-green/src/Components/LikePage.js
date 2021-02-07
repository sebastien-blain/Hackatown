import React, { useEffect } from 'react';
import GiftComponent from './GiftComponent';
import { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/logo_hackatown.png'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    barCard: {
        flexGrow: 1,
    },
    navItem: {

    },
    media: {
        maxWidth: '200px',
    },
}));

export default function LikePage() {
    const [items, setItems] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const url = 'https://giftgreen.herokuapp.com/gifts/like';

        try {
            let response = await fetch(url, {
                method: 'get',
            });
            if (response.status === 200) {
                let json = await response.json();

                let num = json['num'];
                let gifts = json['gifts'];

                if (num > 0) {
                    setItems(gifts)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems="center" className={classes.barCard} spacing={2}>
                <Grid item xs={3} >
                    <Button color="primary" to={'/'} component={Link}>
                        <img className={classes.media} src={logo} alt="logo" />
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <h1 className={classes.navItem}>This is your liked items</h1>
                </Grid>
            </Grid >
            {
                items.map((value, index) => {
                    return <GiftComponent key={value.id} name={value.name} image={value.Image} description={value.Description} />
                })
            }
        </div >
    );
}