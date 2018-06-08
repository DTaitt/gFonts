//@flow
import React from 'react';
import {Row, Input, CollectionItem} from 'react-materialize';
import './Variants.css';
import {options} from 'utilities/utilities';

export default function Variants() {
	return(
		<CollectionItem className='variant'>
			<Row /*onChange={props.handleVariant}*/>
				{
					options.variants.map((variant) => {
						return (
							<Input 
								key={variant} 
								name={variant} 
								type="checkbox" 
								value={variant} 
								label={variant} 
							/>
						);
					})
				}
			</Row>
		</CollectionItem> 
	);
}