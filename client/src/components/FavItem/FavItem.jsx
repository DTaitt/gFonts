// @flow
import React from 'react';
import {deleteFavorite} from 'redux/actions/actions';
import {connect} from 'react-redux';
import AddToProjectModal from '../AddToProjectModal/AddToProjectModal';
import {Button} from 'react-materialize';

type Props = {
	family: string,
	category: string,
    url: string,
    deleteFavorite():void,
}

const FavItem = (props: Props) => {
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
			<AddToProjectModal 
				category={props.category} 
				family={props.family} 
				url={props.url}
			/>
		</div>
	)
}

const mapDispatchToProps = ({
	deleteFavorite,
});

export default connect(null, mapDispatchToProps)(FavItem);

