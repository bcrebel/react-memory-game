import React from 'react'

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

export default Card