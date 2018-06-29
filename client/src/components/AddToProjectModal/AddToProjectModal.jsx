// @flow
import React from 'react';
import {Button, Modal} from 'react-materialize';
import {modalSectionCreator} from 'utilities/utilities';
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
			{ modalSectionCreator('html', `<link href="${url}" rel="stylesheet">`) }
			{ modalSectionCreator('css', `font-family: '${family}', ${category};`) }
		</Modal>
	);
}