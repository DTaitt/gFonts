// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import VariantsFilter from 'components/VariantsFilter/VariantsFilter';
import ConnectedSearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';
import ConnectedCategoryFilterContainer from '../CategoryFilterContainer/CategoryFilterContainer';

export default function Filter() {
	return (
		<div className="filter">
			<Collection>
				<ConnectedSearchFilterContainer />
				<ConnectedCategoryFilterContainer />
				<VariantsFilter/>
			</Collection>
		</div>
	);
}