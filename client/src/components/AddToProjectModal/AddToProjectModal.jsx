// @flow
import React from 'react';
import {Button, Modal} from 'react-materialize';

import './AddToProjectModal.css';

type Props = {
    category: string,
    family: string,
    url: string,
}

export default function AddToProjectModal({category, family, url}: Props) {
	return(
		<Modal
			header={family}
			trigger={<Button>Add Style</Button>}
			className='import-code'
		>
			<div className="html">
				<h2>Add to HTML</h2>
				<blockquote className="html"><pre><code>
					{`<link href="${url}" rel="stylesheet">`}
				</code></pre></blockquote>
			</div>
			<div className="css">
				<h2>Add to CSS</h2>
				<blockquote className="css"><pre><code>
					{`font-family: '${family}', ${category};`}
				</code></pre></blockquote>
			</div>                    
		</Modal>
	);
}