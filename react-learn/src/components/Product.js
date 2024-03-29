import React from 'react'

function Product(props){
    <div>
        <h2>{props.product.name}</h2>
        <p>{props.product.price.toLocalString("en-US",{style:"currency", currency:"USD"})}
        - {props.product.description}</p>
    </div>
}

export default Product