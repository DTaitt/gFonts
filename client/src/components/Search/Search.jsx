//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './Search.css';

type Props = {
	handleSearch(e: any):void
}

export default function Search(props: Props){
	return(
		<CollectionItem className="search">
			<Row>
				<Input s={6} label="Search" validate onChange={props.handleSearch} />
			</Row>
		</CollectionItem>
	);
}