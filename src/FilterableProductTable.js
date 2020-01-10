import React from 'react';
import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}

	handleInStockChange = (inStockOnly) => {
		this.setState({
            inStockOnly: inStockOnly
        })
	}
	
	handleOnFilterTextChange = (filterText) => {
		this.setState({
			filterText: filterText
		})
	}

	render() {
		// console.log(this.state.filterText);
		return(
			<div className="container">
				<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleOnFilterTextChange} onInStockChange={this.handleInStockChange}/>
				<ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products}/>
			</div>
		);
	}
}

export default FilterableProductTable;
