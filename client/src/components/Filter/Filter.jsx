// @flow
import React, { memo } from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import Search from '../Search/Search';

const Filter = memo(() => {
	return (
		<div className="filter">
			<Collection>
				<Search  />
			</Collection>
		</div>
	);
})

export default Filter