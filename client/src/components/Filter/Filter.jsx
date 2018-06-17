// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import Categories from 'components/Categories/Categories';
import VariantsFilter from 'components/VariantsFilter/VariantsFilter';
import ConnectedSearchContainer from '../SearchContainer/SearchContainer';

type Props = {
//   handleSearch(e: any):void,
//   handleCategory(e: any):void,
//   handleVariant(e: any):void,
//   categoryOptions: string[],
//   variantOptions: Object[],
};

export default function Filter(props: Props) {
	return (
		<div className="filter">
			<Collection>
				<ConnectedSearchContainer />
				<Categories />
				<VariantsFilter/>
			</Collection>
		</div>
	);
}