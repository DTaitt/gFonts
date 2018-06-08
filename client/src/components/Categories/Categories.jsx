//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './Categories.css';
import {categoryOptions} from 'utilities/utilities';

export default function Categories() {
	return(
		<CollectionItem className="categories">
			<Row>
				<Input 
					s={12} 
					type="select" 
					label="Category Type" 
					defaultValue="0" 
					// onChange={props.handleCategory}
				>
					{
						categoryOptions.map((option) => {
							return <option key={option} value={option}>{option.toLocaleUpperCase()}</option>;
						})
					}
				</Input>
			</Row>
		</CollectionItem>
	);
}