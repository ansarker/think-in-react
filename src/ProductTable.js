import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
    render() {
        const product = this.props.product;
        // const category = [];

        // for(let i=0; i<product.length; i++) {
        //     category.push(product[i].category)
        // }

        const rows = [];
        if (product.length > 0) {

            rows.push(
                <tbody>
                    <ProductCategoryRow category={product[0].category} />

                    <ProductRow name={product[0].name} price={product[0].price} />
                </tbody>
            )
            for (let i = 0; i < product.length - 1; i++) {
                rows.push(
                    <tbody>
                        {((i + 1 !== product.length) && (product[i].category != product[i + 1].category)) &&
                            <ProductCategoryRow category={product[i + 1].category} />
                        }
                        <ProductRow name={product[i + 1].name} price={product[i + 1].price} />
                    </tbody>
                )
            }
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Price</strong></td>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    {rows}
                    {/* </tbody> */}
                </table>
            </div>
        );
    }
}

export default ProductTable;