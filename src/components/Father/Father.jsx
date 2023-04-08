import React from 'react';
import Myselfe from '../Myselfe/Myselfe';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myselfe ring={ring}></Myselfe>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;