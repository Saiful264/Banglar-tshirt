import React, { Children } from 'react';

const Couin = ({Children}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{Children}</small></p>
        </div>
    );
};

export default Couin;