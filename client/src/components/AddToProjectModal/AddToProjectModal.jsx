// @flow
import React, { memo } from 'react';
import {Button, Modal} from 'react-materialize';
import './AddToProjectModal.css';
import ModalSection from '../ModalSection/ModalSection';

type Props = {
    category: string,
    family: string,
    url: string,
}

const AddToProjectModal = memo((props: Props) => {
	return(
		<Modal
			header={props.family}
			trigger={<Button>Add Style</Button>}
			className='import-code'
		>
			<ModalSection language='html' code={`<link href="${props.url}" rel="stylesheet">`} />
			<ModalSection language='css' code={`font-family: '${props.family}', ${props.category};`} />
		</Modal>
	);
})

export default AddToProjectModal