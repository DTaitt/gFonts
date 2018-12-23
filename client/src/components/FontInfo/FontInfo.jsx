import './FontInfo.css';

import React, { memo } from 'react';
import { Button, Collection, CollectionItem, Dropdown } from 'react-materialize';

const FontInfo = memo((props) => (
	<div className='font_info'>
		<a 
			href={props.url}
			target='_blank'
			rel="noopener noreferrer"
			className="font_info__link"
		>
			<h2 style={{fontFamily: `${props.family}, ${props.category}`}} className="font_info__title _capitalize">{props.family}</h2>
		</a>
		<p className='font_info__category _uppercase'>{props.category}</p>
		<Dropdown trigger={
			<Button 
				className='font_info__dropdown-btn'
			>{props.variants.length} Variant{props.variants.length > 1 && 's'}</Button>
		}>
			<Collection>
				{
					props.variants.map(variant => (
						<CollectionItem 
							className='variant _uppercase' 
							key={variant}>
							{variant}
						</CollectionItem>)
					)
				}
			</Collection>
		</Dropdown>
	</div>
))

export default FontInfo