import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product Page</h1>
                <Link to="/"><button>BACK</button></Link>
                </div>
            )

    }
}
export default Product;