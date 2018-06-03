// @flow
import React from 'react';
import './Filter.css';

import {Collection} from 'react-materialize';
import Categories from '../Categories/Categories';
import Variants from '../Variants/Variants';
import SearchContainer from '../SearchContainer/SearchContainer';
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
                <SearchContainer />
                <Categories />
                <Variants/>
            </Collection>
        </div>
    )
}