import './Font.css'

import FontInfo from 'components/FontInfo/FontInfo';
import FontInteraction from 'components/FontInteraction/FontInteraction';
import React, { memo } from 'react';
import { CardPanel } from 'react-materialize';
import { connect } from 'react-redux';
import { addFavorite } from 'redux/state/favorites/actions';

const Font = memo((props) => (
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
			<div style={{fontFamily: `${props.family}, ${props.category}`}} className="font__pangram">
				<p>A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.</p>
			</div>
			<FontInteraction 
				family={props.family} 
				category={props.category} 
				url={props.url}
				variants={props.variants}
				willAddFont={true}
			/>
		</CardPanel>
	)
)

const mapDispatchToProps = ({ addFavorite });

export default connect(null, mapDispatchToProps)(Font);