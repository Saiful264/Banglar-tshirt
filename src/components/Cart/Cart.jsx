import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    let massage;
    if (cart.length === 0) {
        massage = <p>Please add some products</p>
    }else{
        massage = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giveing your mony</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order summary:{cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {
                cart.length > 2 
                ? <samp className='orange'>Aro keino</samp>
                : <span>fokira</span>
            }
            {massage}
            {
                cart.map(tshirt => <p 
                    key={tshirt.id}>
                        {tshirt.name}
                        <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                        </p>)
            }
            {
                cart.length === 2 && <p>Double bonza !!!</p>
            }
            {
                cart.length === 3 || <h3>Thin ta to holo na!!</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contian na element, components
 * 2. ternary operator : condition ? 'for ture' : 'for false'
 * 3. Logical && : (if the condition is ture then the next thing will be displayed)
 * 4. Logical or (||): (if the condition is false then the next thing will be displayed)
 * */ 

/**
 * CONDITIONAL CSS CLASS
 * 1. useing ternary operator
 * 2. ternary operator inside the template string
 * */ 