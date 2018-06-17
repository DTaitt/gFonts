//@flow
import React from 'react';
import {Row, Input, CollectionItem, Dropdown, Button, Collection} from 'react-materialize';
import './VariantsFilter.css';
import {options} from 'utilities/utilities';

export default function VariantsFilter() {
	return(
		<CollectionItem className='variant'>
			<Row /*onChange={props.handleVariant}*/>
				<Dropdown trigger={
					<Button>All Variants</Button>
				}>
					<Collection>
						{
							options.variants.map(variant => {
								return (
									<CollectionItem className='variant' key={variant}>
										<Input 
											key={variant} 
											name={variant} 
											type="checkbox" 
											value={variant} 
											label={variant} 
										/>
									</CollectionItem>);
							})
						}
					</Collection>
				</Dropdown>
			</Row>
		</CollectionItem> 
	);
}