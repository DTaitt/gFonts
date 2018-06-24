//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './CategoryFilter.css';
import {fontOptions} from 'utilities/utilities';

export default function CategoryFilter(props) {
	return(
		<CollectionItem className="categories">
			<Row>
				<Input 
					s={12} 
					type="select" 
					label="Category Type" 
					defaultValue="0" 
					onChange={props.handleCategory}
				>
					{
						fontOptions.categories.map((option) => {
							return (
								<option 
									key={option} 
									value={option}
								>
									{option.toLocaleUpperCase()}
								</option>
							);
						})
					}
				</Input>
			</Row>
		</CollectionItem>
	);
}