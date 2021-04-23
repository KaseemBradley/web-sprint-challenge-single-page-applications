import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    
    return (
        <div>
            <h1>Kaseem's Pizza</h1>
            <Link to='/pizza'>
                <button id="order-pizza">Order</button>
            </Link>
        </div>
    )
}