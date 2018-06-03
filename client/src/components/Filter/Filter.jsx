// @flow
import React from 'react';
import './Filter.css';

import {Row, Input, Collection, CollectionItem} from 'react-materialize';
import Search from './../Search/Search';
import Categories from './../Categories/Categories';
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
                <Categories />
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