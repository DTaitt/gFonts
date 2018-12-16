// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { deleteFavorite } from 'redux/state/favorites/actions'
import Modal from 'components/Modal/Modal';

const FavItem = (props) => {
	return(
		<div 
			className='fav-item'
		>
			<a href={props.url} target='_blank' rel="noopener noreferrer">{props.family}</a>
			<p>{props.category}</p>
			<Button 
				floating 
				className='red' 
				waves='light' 
				icon='remove'
				onClick={() => {deleteFavorite({family:props.family});}}
			/>
			<Modal 
				category={props.category} 
				family={props.family} 
				url={props.url}
			/>
		</div>
	)
}

const mapDispatchToProps = ({ deleteFavorite });

export default connect(null, mapDispatchToProps)(FavItem);

