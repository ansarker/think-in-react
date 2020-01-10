import React from 'react';

class SearchBar extends React.Component {

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked)
    }

    handleOnFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleOnFilterTextChange} /><br/>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange} />Only show products in stock
            </div>
        );
    }
}

export default SearchBar;