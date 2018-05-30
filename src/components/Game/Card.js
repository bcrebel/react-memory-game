import React from 'react'
import PropTypes from 'prop-types';

class Card extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {  

		return (
			<li key={this.props.key} type={this.props.type} id={this.props.id} onClick={this.props.onClick} className={this.props.className}>
				{this.props.children}
			</li>
		)
	}
}

Card.propTypes = {
	key: PropTypes.number,
	type: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.element.isRequired
};

export default Card