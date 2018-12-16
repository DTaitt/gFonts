// @flow
import React from 'react';
import {addFavorite} from 'redux/state/favorites/actions';
import {connect} from 'react-redux';
import {CardPanel, Button} from 'react-materialize';
import FontInfo from 'components/FontInfo/FontInfo';
import Modal from 'components/Modal/Modal';
import './Font.css'

const Font = (props) => (
	<CardPanel 
		className="font white black-text z-depth-2"
	>
		<FontInfo 
			category={props.category} 
			family={props.family} 
			id={props.id}
			url={props.url}
			variants={props.variants}
		/>
		<div className="font__interaction">
			<Button 
				className='font__interaction__btn red' 
				waves='light' 
				icon='favorite'
			/>
			<Modal 
				category={props.category} 
				family={props.family} 
				url={props.url}
			/>
		</div>
	</CardPanel>
)

const mapDispatchToProps = ({ addFavorite });

export default connect(null, mapDispatchToProps)(Font);