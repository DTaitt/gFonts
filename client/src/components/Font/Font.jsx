// @flow
import React from 'react';
import {addFavorite} from 'redux/state/favorites/actions';
import {connect} from 'react-redux';
import {CardPanel, Button} from 'react-materialize';
import FontInfo from 'components/FontInfo/FontInfo';
import AddToProjectModal from 'components/AddToProjectModal/AddToProjectModal';
import './Font.css'

const Font = (props) => (
	<CardPanel 
		className="font-card white black-text z-depth-2"
	>
		<FontInfo 
			category={props.category} 
			family={props.family} 
			id={props.id}
			url={props.url}
			variants={props.variants}
		/>
		<div className="font-interaction">
			<Button 
				// floating 
				className='red' 
				waves='light' 
				icon='favorite'
				onClick={() => {
					addFavorite({
						category: props.category, 
						family:props.family, 
						url:props.url, 
						// hrefFamily: formatFontNameForHref({family: props.family})
					});
				}}
			/>
			<AddToProjectModal 
				category={props.category} 
				family={props.family} 
				url={props.url}
			/>
		</div>
	</CardPanel>
)

const mapDispatchToProps = ({
	addFavorite,
});

export default connect(null, mapDispatchToProps)(Font);