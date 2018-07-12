// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import ConnectedSearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';

export default function Filter() {
	return (
		<div className="filter">
			<Collection>
				<ConnectedSearchFilterContainer />
			</Collection>
		</div>
	);
}