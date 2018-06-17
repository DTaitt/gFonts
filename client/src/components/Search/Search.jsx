//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Input, CollectionItem} from 'react-materialize';
import './Search.css';
import {updateSearchValue} from '../FontListContainer/actions/actions';

type Props = {
	handleSearch(e: any):void
}
type State = {}

export default function Search(props: Props){
	return(
		<CollectionItem className="search">
			<Row>
				<Input s={6} label="Search" validate onChange={props.handleSearch} />
			</Row>
		</CollectionItem>
	);
}