import React, { useEffect } from 'react';
import GiftComponent from './GiftComponent';
import { useState, useCallback } from 'react';

//Interest event tracking
export default function LikePage() {
    const [items, setItems] = useState([]);


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
        <div>
            {items.map((value, index) => {
                return <GiftComponent key={value.id} name={value.name} link={value.Link} />
            })}
        </div>
    );
}