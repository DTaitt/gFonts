//@flow
import React from 'react';
import {CardPanel, Button, Modal, Dropdown, Collection, CollectionItem} from 'react-materialize';

import './Font.css';
type Props = {
    category: string,
    family: string,
    urlFamily: string,
    id: string,
    url: string,
    variants: string[],
}

export default function Font(props: Props){
	return(
		<CardPanel 
			className="font-card white black-text z-depth-2"
		>
			<div className="font-info">
				<a href={props.url} target='_blank' rel="noopener noreferrer">
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
			<div className="font-interaction">
				<Button 
					floating 
					className='red' 
					waves='light' 
					icon='favorite'
				/>
				<Modal
					header={props.family}
					trigger={<Button>Add Style</Button>}
					className='import-code'
				>
					<div className="html">
						<h2>Add to HTML</h2>
						<blockquote><pre><code>
							{`<link href="https://fonts.googleapis.com/css?family=${props.urlFamily}" rel="stylesheet">`}
						</code></pre></blockquote>
					</div>
					<div className="css">
						<h2>Add to CSS</h2>
						<blockquote><pre><code>
							{`font-family: '${props.family}', ${props.category};`}
						</code></pre></blockquote>
					</div>                    
				</Modal>
			</div>
		</CardPanel>
	);
}