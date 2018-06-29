// @flow
import React, { Component } from 'react';
import './FavItem.css';

type Props = {
	family: string,
	category: string,
	url: string,
}

class FavItem extends Component<Props, State> {
	render() { 
		return ( 
			<div className='fav-item'>
				<p>{this.props.family}</p>
				<p>{this.props.category}</p>
				<p>{this.props.url}</p>
			</div>
		);
	}
}
 
export default FavItem;