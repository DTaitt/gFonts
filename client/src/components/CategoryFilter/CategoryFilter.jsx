//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './CategoryFilter.css';
import {fontOptions} from 'utilities/utilities';

type Props = {
	handleCategory(e: Object):void,
}

export default function CategoryFilter({handleCategory}: Props) {
	return(
		<CollectionItem className="categories">
			<Row>
				<Input 
					s={12} 
					type="select" 
					label="Category Type" 
					defaultValue="0" 
					onChange={handleCategory}
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