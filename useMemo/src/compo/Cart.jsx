import React from "react"

let Cart = React.memo((props) => {
    console.log('Cart render');
    let calc = () => {
        let val = 0;
        for (let i = 1; i <= 100; i++) {
            val += i;
        }
        return val;
    }

    let value = calc();

    return (
        <>
            <p>math library</p>
            <p>Value {value} {props.title}</p>
        </>
    )
})


export default Cart
