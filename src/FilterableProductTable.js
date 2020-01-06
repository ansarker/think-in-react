import React from 'react';
import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
	render() {
		return(
			<div className="container">
				<SearchBar />
				<ProductTable product={this.props.product}/>
			</div>
		);
	}
}

export default FilterableProductTable;
