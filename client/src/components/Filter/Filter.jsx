// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import Search from 'components/Search/Search';
import Categories from 'components/Categories/Categories';
import VariantsFilter from 'components/VariantsFilter/VariantsFilter';

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
				<Search />
				<Categories />
				<VariantsFilter/>
			</Collection>
		</div>
	);
}