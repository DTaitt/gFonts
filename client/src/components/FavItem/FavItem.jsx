import { Button } from 'react-materialize';
import React from 'react';
import { connect } from 'react-redux';
import { deleteFavorite } from 'redux/state/favorites/actions'

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
		</div>
	)
}

const mapDispatchToProps = ({ deleteFavorite });

export default connect(null, mapDispatchToProps)(FavItem);

