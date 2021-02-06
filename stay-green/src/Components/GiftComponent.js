import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

//Interest event tracking
export default function GiftComponent(props) {

    return (
        <div>
            <h1>Hello</h1>
            <Card>
                <CardMedia
                    image={props.link}
                    title={props.name}
                />

            </Card>
        </div>
    );

}
