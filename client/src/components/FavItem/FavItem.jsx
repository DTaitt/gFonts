// @flow
import React from 'react';
import './FavItem.css';
import {formatFontNameForHref} from 'utilities/utilities';

type Props = {
	family: string,
	category: string,
	url: string,
	deleteFavorite():void,
}

export default function FavItem({family, category, url, deleteFavorite}: Props) {
	return ( 
		<div 
			className='fav-item'
			onClick={() => {deleteFavorite(formatFontNameForHref({family}));}}
		>
			<p>{family}</p>
			<p>{category}</p>
			<p>{url}</p>
		</div>
	);
}
