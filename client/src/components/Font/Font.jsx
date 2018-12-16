// @flow
import React from 'react';
import { CardPanel, Button } from 'react-materialize';
import { connect } from 'react-redux';
import _pipe from 'lodash.flow'
import { addFavorite } from 'redux/state/favorites/actions';
import FontInfo from 'components/FontInfo/FontInfo';
import { separateByPlus, createHtmlLink, createCssStyle, copyToClipboard } from 'utilities/utilities';
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
			<div className="font__interaction__code">
				<Button onClick={() => _pipe(separateByPlus, createHtmlLink, copyToClipboard)(props.family)}>Copy HTML</Button>
				<Button onClick={() => _pipe(createCssStyle, copyToClipboard)(props.family)}>Copy CSS</Button>
			</div>
			<Button 
				className='font__interaction__btn red' 
				waves='light' 
				floating
				icon='favorite'
			/>
		</div>
	</CardPanel>
)

const mapDispatchToProps = ({ addFavorite });

export default connect(null, mapDispatchToProps)(Font);