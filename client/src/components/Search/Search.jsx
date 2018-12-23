import React from 'react';
import { CollectionItem, Input, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { updateSearchValue } from 'redux/state/searchValue/actions';

const Search = (props) => {
	return (
		<CollectionItem style={{margin:'auto', height: '100%'}} className="search">
			<Row style={{width:'100%', margin:'auto'}}>
				<Input 
					// style={{width:'100%', margin:'auto'}}
					label="Search" 
					validate 
					onChange={(e) => props.updateSearchValue(e.target.value.toLowerCase())}/>
			</Row>
		</CollectionItem>
	)
}

const mapDispatchToProps = ({ updateSearchValue });

export default connect(null, mapDispatchToProps)(Search);
