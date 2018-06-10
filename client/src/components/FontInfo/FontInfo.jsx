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

export default function FontInfo({url, family, category, variants}: Props) {
	return(
		<div className="font info">
			<a href={url} target='_blank' rel="noopener noreferrer" className="font url">
				<h1 className="family">{family}</h1>
			</a>
			<p className="category">{category}</p>
			<Dropdown trigger={
				<Button>{variants.length} Variant{variants.length > 1 && 's'}</Button>
			}>
				<Collection>
					{
						variants.map(variant => {
							return <CollectionItem className='variant' key={variant}>{variant}</CollectionItem>;
						})
					}
				</Collection>
			</Dropdown>
		</div>
	);
}