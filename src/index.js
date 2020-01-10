import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';
import * as serviceWorker from './serviceWorker';


const PRODUCTS = [
   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
    {category: "Fruits", price: "$7.99", stocked: false, name: "Orange"},
    {category: "Fruits", price: "$9.99", stocked: true, name: "Zuzube"},
    {category: "Fruits", price: "$6.99", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$10.99", stocked: true, name: "Mango"},
];

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));

serviceWorker.unregister();
