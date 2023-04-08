import React, { useContext } from 'react';
import Couin from '../cousin/Couin';
import { MonyContex } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MonyContex);
    return (
        <div>
            <h2>uncla</h2>
            <p>Grandpa money: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>Send 1000 take</button>
            <section className='flex'>
                <Couin>Nabila</Couin>
                <Couin>Nabin</Couin>
            </section>
        </div>
    );
};

export default Uncle;