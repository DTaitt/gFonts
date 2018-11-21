// @flow
import React, { memo } from 'react';
import {Button, Dropdown, Collection, CollectionItem} from 'react-materialize';

import './FontInfo.css';

type Props = {
    url: string,
    family: string,
    category: string,
    variants: string[],
}

const FontInfo = (props: Props) => {
	return(
		<div className='font-info'>
			<a 
				href={props.url}
				target='_blank'
				rel="noopener noreferrer"
				className="font-info__link"
			>
				<h2>{props.family}</h2>
			</a>
			<p>{props.category}</p>
			<Dropdown trigger={
				<Button>{props.variants.length} Variant{props.variants.length > 1 && 's'}</Button>
			}>
				<Collection>
					{
						props.variants.map(variant => 
							(<CollectionItem 
								className='variant' 
								key={variant}>
								{variant}
							</CollectionItem>))
					}
				</Collection>
			</Dropdown>
		</div>
	)
}

export default FontInfo