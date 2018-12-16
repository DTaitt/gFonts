import React, { memo } from 'react';
import {Button, Modal as _Modal} from 'react-materialize';
import ModalSection from 'components/ModalSection/ModalSection';

const Modal = memo((props) => (
	<_Modal
		header={props.family}
		trigger={<Button>Add Style</Button>}
	>
		<ModalSection language='html' code={`<link href="${props.url}" rel="stylesheet">`} />
		<ModalSection language='css' code={`font-family: '${props.family}', ${props.category};`} />
	</_Modal>
))

export default Modal