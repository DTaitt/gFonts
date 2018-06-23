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

	function sectionCreator(language: string, code: string) {
		return(
			<div className={`${language}`}>
				<h2>Add to {language.toUpperCase()}</h2>
				<blockquote className={`${language}`}>
					<pre>
						<code>
							{code}
						</code>
					</pre>
				</blockquote>
			</div>
		);
	}
	
	return(
		<Modal
			header={family}
			trigger={<Button>Add Style</Button>}
			className='import-code'
		>
			{ sectionCreator('html', `<link href="${url}" rel="stylesheet">`) }
			{ sectionCreator('css', `font-family: '${family}', ${category};`) }
		</Modal>
	);
}