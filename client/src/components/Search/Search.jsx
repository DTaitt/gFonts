//@flow
import React from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from 'redux/actions/actions';
import {Row, Input, CollectionItem} from 'react-materialize';

type Props = {
	updateSearchValue(searchValue: string):string
}

const Search = (props: Props) => {
	return (
		<CollectionItem className="search">
			<Row>
				<Input 
					s={6} 
					label="Search" 
					validate 
					onChange={(e) => { 
						props.updateSearchValue(e.target.value.toLowerCase())} 
					} />
			</Row>
		</CollectionItem>
	)
}

const mapDispatchToProps = ({
	updateSearchValue,
});

export default connect(null, mapDispatchToProps)(Search);
