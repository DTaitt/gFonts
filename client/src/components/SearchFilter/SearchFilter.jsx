//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './SearchFilter.css';

type Props = {
	handleSearch(e: any):void
}

export default function SearchFilter({handleSearch}: Props){
	return(
		<CollectionItem className="search">
			<Row>
				<Input s={6} label="Search" validate onChange={handleSearch} />
			</Row>
		</CollectionItem>
	);
}