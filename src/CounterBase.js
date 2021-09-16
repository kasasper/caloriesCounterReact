import React from 'react';
import './App.css';
import CounterElement from './CounterElement';

class CounterBase extends React.Component {
	render() {
		return (
			<div className="calculator">
				<ul className="added_elements">
					{this.props.counter.map((product) => {
						return (
							<CounterElement
								key={product.product}
								name={product.product}
								id={product.id}
								calories={product.calories}
								size1={product.size}
								size2={product.sizeType}
								setCaloriesArray={this.props.setCaloriesArray}
								caloriesArray={this.props.caloriesArray}
								setCounter={this.props.setCounter}
								counter={this.props.counter}
								summarize={this.props.summarize}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CounterBase;
