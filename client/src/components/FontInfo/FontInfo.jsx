// @flow
import React, { memo } from 'react';
import {Button, Dropdown, Collection, CollectionItem} from 'react-materialize';

import './FontInfo.css';

const FontInfo = memo((props) => (
	<div className='font-info'>
		<a 
			href={props.url}
			target='_blank'
			rel="noopener noreferrer"
		>
			<h2 style={{fontFamily: `${props.family}, ${props.category}`}} className="font-info__link _capitalize">{props.family}</h2>
		</a>
		<p className='font-info__category _uppercase'>{props.category}</p>
		<Dropdown trigger={
			<Button 
				className='font-info__dropdown-btn'
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