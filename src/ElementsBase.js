import React from 'react';
import './App.css';
import Element from './Element';

class ElementsBase extends React.Component {
	render() {
		return (
			<span id="base">
				{this.props.list.map((product) => {
					return (
						<Element
							key={product.product}
							name={product.product}
							calories={product.calories}
							size1={product.size}
							size2={product.sizeType}
						/>
					);
				})}
			</span>
		);
	}
}

export default ElementsBase;
