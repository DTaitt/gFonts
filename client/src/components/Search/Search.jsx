//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './Search.css';

export default function Search() {
	return(
		<CollectionItem className="search">
			<Row>
				<Input s={6} label="Search" validate /*onChange={props.handleSearch}*/ />
			</Row>
		</CollectionItem>
	);
}