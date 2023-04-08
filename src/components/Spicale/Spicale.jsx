import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spicale = ({ring}) => {
    const anti = useContext(RingContext);
    return (
        <div>
            <h2>Spicale</h2>
            <p><small>{anti}</small></p>
        </div>
    );
};

export default Spicale;