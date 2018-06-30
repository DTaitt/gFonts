//@flow
import React from 'react';
import './Main.css';
import ConnectedSidebar from 'components/Sidebar/Sidebar';
import ConnectedFontListContainer from '../FontListContainer/FontListContainer';

type Props = {}

export default function Main(props: Props) {
	return (
		<main>
			<div className="my-container">
				<ConnectedFontListContainer />
				<ConnectedSidebar />
			</div>
		</main>
	);
}
