import React from 'react';
import './App.css';
import { emojiJSON } from './emoji';

class Element extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: '😋'
		};
	}

	componentDidMount() {
		for (let el in emojiJSON) {
			if (emojiJSON[el].indexOf(this.props.name.toString().toLowerCase()) > -1) {
				this.setState({ img: el });
				break;
			}
		}

		for (let el in emojiJSON) {
			if (emojiJSON[el].indexOf(this.props.name.toString().toLowerCase().split(' ')[0]) > -1) {
				this.setState({ img: el });
				break;
			}
		}
	}

	addToCounter = () => {
		let newCounter = this.props.counter;
		newCounter.push({
			product: this.props.name,
			calories: this.props.calories,
			size: this.props.size1,
			sizeType: this.props.size2
		});
		this.props.setCounter(newCounter);
	};
	render() {
		return (
			<span className="btn-element old-element" onClick={() => this.addToCounter()}>
				<p id="product-img">{this.state.img}</p>
				<p className="btn-element-name">{this.props.name}</p>
				<p className="btn-element-cal">{this.props.calories} kcal</p>
				<p className="btn-element-size">
					{this.props.size1} {this.props.size2}
				</p>
			</span>
		);
	}
}

export default Element;
