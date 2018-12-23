import React, { memo } from 'react';

import { Collection } from 'react-materialize';
import Search from 'components/Search/Search';

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