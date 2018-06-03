//@flow
import React from 'react';
import {Row, Input, Collection, CollectionItem} from 'react-materialize';
import './Variants.css';
import {variantOptions} from '../../utilities/utilities';

export default function Variants() {
    
    return(
        <CollectionItem className='variant'>
            <Row /*onChange={props.handleVariant}*/>
                {
                    variantOptions.map((variant) => {
                        return (
                            <Input 
                                key={variant} 
                                name={variant} 
                                type="checkbox" 
                                value={variant} 
                                label={variant} 
                            />
                        )
                    })
                }
            </Row>
        </CollectionItem> 
    )
}