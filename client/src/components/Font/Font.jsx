//@flow
import React from 'react';
import {CardPanel, Button, Modal, Dropdown, Collection, CollectionItem} from 'react-materialize';

import './Font.css';
import FontInfo from '../FontInfo/FontInfo';
type Props = {
    category: string,
    family: string,
    urlFamily: string,
    id: string,
    url: string,
    variants: string[],
}

export default function Font({category, family, urlFamily, id, url, variants}: Props){
	return(
		<CardPanel 
			className="font-card white black-text z-depth-2"
		>
			<FontInfo 
				category={category} 
				family={family} 
				id={id}
				url={url}
				variants={variants}
			/>
			<div className="font-interaction">
				<Button 
					floating 
					className='red' 
					waves='light' 
					icon='favorite'
				/>
				<Modal
					header={family}
					trigger={<Button>Add Style</Button>}
					className='import-code'
				>
					<div className="html">
						<h2>Add to HTML</h2>
						<blockquote><pre><code>
							{`<link href="https://fonts.googleapis.com/css?family=${urlFamily}" rel="stylesheet">`}
						</code></pre></blockquote>
					</div>
					<div className="css">
						<h2>Add to CSS</h2>
						<blockquote><pre><code>
							{`font-family: '${family}', ${category};`}
						</code></pre></blockquote>
					</div>                    
				</Modal>
			</div>
		</CardPanel>
	);
}