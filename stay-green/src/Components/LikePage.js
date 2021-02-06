import './App.css';
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Grid, Input, InputBase } from '@material-ui/core';

//Interest event tracking
export default function LikePage() {
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
        <div>
            <Grid direction="column">
                <Grid container item xs={30} spacing={3} direction="row" justify="center">
                    <h2>How much are you willing to pay?</h2>
                </Grid>
                <Grid>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Grid>
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
        </div>
    );
}