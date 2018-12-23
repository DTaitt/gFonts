import './FavItem.css'

import FontInfo from 'components/FontInfo/FontInfo'
import React from 'react';
import { CardPanel } from 'react-materialize';
import { connect } from 'react-redux';
import { deleteFavorite } from 'redux/state/favorites/actions'
import FontInteraction from '../FontInteraction/FontInteraction';

const FavItem = (props) => (
	<CardPanel 
		className="fav_item white black-text z-depth-2"
	>
		<FontInfo 
			category={props.category} 
			family={props.family} 
			id={props.id}
			url={props.url}
			variants={props.variants}
		/>
		<FontInteraction family={props.family} category={props.category} willAddFont={false} />
	</CardPanel>
)

const mapDispatchToProps = ({ deleteFavorite });

export default connect(null, mapDispatchToProps)(FavItem);

