import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
    render() {
        let lastCategory = null;
        const rows = [];

        const filterText = this.props.filterText.toLowerCase();
        const inStockOnly = this.props.inStockOnly;
        
        // METHOD: Too old
        // const products = this.props.products;
        // if (products.length > 0) {
        //     rows.push(<ProductCategoryRow category={products[0].category} stocked={products[0].stocked}/>);
        //     rows.push(<ProductRow name={products[0].name} price={products[0].price} stocked={products[0].stocked} />)

        //     for (let i = 0; i < products.length - 1; i++) {
        //         {((i + 1 !== products.length) && (products[i].category !== products[i + 1].category)) &&
        //             rows.push(<ProductCategoryRow category={products[i + 1].category} stocked={products[i + 1].stocked}/>)
        //         }
        //         rows.push(<ProductRow name={products[i + 1].name} price={products[i + 1].price} stocked={products[i + 1].stocked}/>)
        //     }
        // }


        // METHOD: Efficient way
        let i = 0;
        this.props.products.forEach(product => {
            if (product.name.toLowerCase().match(filterText)) {

                if(product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.name}/>)
                }
                
                if (inStockOnly && product.stocked) {
                    rows.push(<ProductRow product={product} key={i.toString()} />)
                } else if (!inStockOnly) {
                    rows.push(<ProductRow product={product} key={i.toString()} />)
                }
                
                lastCategory = product.category;
            }
            i++;
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Price</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;