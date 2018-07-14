// @flow
import React from 'react';
import './FavItem.css';
import {formatFontNameForHref} from 'utilities/utilities';
import {Button} from 'react-materialize';
import AddToProjectModal from '../AddToProjectModal/AddToProjectModal';


type Props = {
	family: string,
	category: string,
	url: string,
	deleteFavorite(hrefFamily: string):void,
}

export default function FavItem({family, category, url, deleteFavorite}: Props) {
	return ( 
		<div 
			className='fav-item'
		>
			<a href={url} target='_blank' rel="noopener noreferrer">{family}</a>
			<p>{category}</p>
			<Button 
				floating 
				className='red' 
				waves='light' 
				icon='remove'
				onClick={() => {deleteFavorite(formatFontNameForHref({family}));}}
			/>
			<AddToProjectModal 
				category={category} 
				family={family} 
				url={url}
			/>
		</div>
	);
}
