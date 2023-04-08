import React from 'react';
import Couin from '../cousin/Couin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Couin>Abir</Couin>
                <Couin>Nabir</Couin>
            </section>
        </div>
    );
};

export default Aunty;