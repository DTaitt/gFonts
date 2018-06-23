// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import Categories from 'components/Categories/Categories';
import VariantsFilter from 'components/VariantsFilter/VariantsFilter';
import ConnectedSearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';

export default function Filter() {
	return (
		<div className="filter">
			<Collection>
				<ConnectedSearchFilterContainer />
				<Categories />
				<VariantsFilter/>
			</Collection>
		</div>
	);
}