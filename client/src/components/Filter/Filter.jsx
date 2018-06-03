// @flow
import React from 'react';
import './Filter.css';

import {Row, Input, Collection, CollectionItem} from 'react-materialize';
import Search from './../Search/Search';
type Props = {
  handleSearch(e:any):void,
  handleCategory(e:any):void,
  handleVariant(e:any):void,
  categoryOptions: string[],
  variantOptions: Object[],
};

export default function Filter(props:Props) {
    return (
        <div className="filter">
            <Collection>
                <Search />
                {/* <CollectionItem className="Categories">
                    <Row>
                        <Input 
                            s={12} 
                            type="select" 
                            label="Category Type" 
                            defaultValue="0" 
                            onChange={props.handleCategory}
                        >
                            {
                                props.categoryOptions.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </Input>
                    </Row>
                </CollectionItem> */}
                {/* <CollectionItem className='variant'>
                    <Row onChange={props.handleVariant}>
                        {
                            props.variantOptions.map((variant) => {
                                return (
                                    <Input 
                                        key={variant.value} 
                                        name={variant.value} 
                                        type="checkbox" 
                                        value={variant.value} 
                                        label={variant.label} 
                                    />
                                )
                            })
                        }
                    </Row>
                </CollectionItem>  */}
            </Collection>
        </div>
    )
}