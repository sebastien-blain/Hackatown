import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Grid, Input, InputBase } from '@material-ui/core';
import Slide from './Carousel'
//Interest event tracking
import Button from '@material-ui/core/Button'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import {Link} from "react-router-dom";
import logo from '../images/logo_hackatown.png'




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  likedArticles: {
    marginTop: 75,
    marginRight: 30
  }
}));

export default function HomePage() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedTech: false,
        checkedClothes: false,
        checkedCare: false,
        checkedHousehold: false,
        checkedToy: false,
        checkedOther: false,
        checkedMom: false,
        checkedDad: false,
        checkedGirlfriend: false,
        checkedBoyfriend: false,
        checkedFriend: false,
        checkedSibling: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
    <Grid direction="column">
    <Grid container item xs={30} spacing={3} direction="row" justify="space-between">
    <Button color="primary" to={'/'} component={Link}>
      <img src={logo} alt="logo"/>
    </Button>
    <Grid>
    <Button className={classes.likedArticles} color="primary" variant="contained" to={'/LikePage'}>
      See Liked Articles
    </Button>
    </Grid>
    </Grid>
    <Grid container item xs={30} spacing={3} direction="row" justify="space-evenly">
        <h2>How much are you willing to pay?</h2>
          <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          maxWidth: 800
        }}
    />
    </Grid>
    <Grid container item direction="row" alignItems="flex-start" justify="space-evenly">
        <Grid>
            <FormGroup>
                <h3>SELECT YOUR INTERESTS</h3>
                <FormControlLabel
                    control={<Switch checked={state.checkedTech} onChange={handleChange} name="checkedTech" color="primary" />}
                    label="Tech"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedClothes} onChange={handleChange} name="checkedClothes" color="primary" />}
                    label="Clothes"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedCare} onChange={handleChange} name="checkedCare" color="primary" />}
                    label="Care"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedHousehold} onChange={handleChange} name="checkedHousehold" color="primary" />}
                    label="Household"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedToy} onChange={handleChange} name="checkedToy" color="primary" />}
                    label="Toy"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedOther} onChange={handleChange} name="checkedOther" color="primary" />}
                    label="Other"
                />
            </FormGroup>
        </Grid>
        <Grid>
            <FormGroup>
                <h3>WHO IS IT FOR:</h3>
                <FormControlLabel
                    control={<Switch checked={state.checkedMom} onChange={handleChange} name="checkedMom" color="primary" />}
                    label="Mom"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedDad} onChange={handleChange} name="checkedDad" color="primary" />}
                    label="Dad"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedGirlfriend} onChange={handleChange} name="checkedGirlfriend" color="primary" />}
                    label="Girlfriend"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedBoyfriend} onChange={handleChange} name="checkedBoyfriend" color="primary" />}
                    label="Boyfriend"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedFriend} onChange={handleChange} name="checkedFriend" color="primary" />}
                    label="Friend"
                />
            </FormGroup>
        </Grid>
    </Grid>
    </Grid>
    );
}