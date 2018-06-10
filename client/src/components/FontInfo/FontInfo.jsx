// @flow
import React from 'react';
import {Button, Dropdown, Collection, CollectionItem} from 'react-materialize';

import './FontInfo.css';

type Props = {
    url: string,
    family: string,
    category: string,
    variants: string[],
}

export default function FontInfo(props: Props) {
	return(
		<div className="font info">
			<a href={props.url} target='_blank' rel="noopener noreferrer" className="font url">
				<h1 className="family">{props.family}</h1>
			</a>
			<p className="category">{props.category}</p>
			<Dropdown trigger={
				<Button>{props.variants.length} Variant{props.variants.length > 1 && 's'}</Button>
			}>
				<Collection>
					{
						props.variants.map(variant => {
							return <CollectionItem className='variant' key={variant}>{variant}</CollectionItem>;
						})
					}
				</Collection>
			</Dropdown>
		</div>
	);
}