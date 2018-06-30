//@flow
import React from 'react';
import {connect} from 'react-redux';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import {updateCategoryValue} from 'redux/actions/actions';

type Props = {
	updateCategoryValue(categoryValue: string):any
}

export function CategoryFilterContainer(props: Props) {

	function handleCategory(e: Object){
    	const categoryValue = e.target.value;
    	props.updateCategoryValue(categoryValue);
	}

	return <CategoryFilter handleCategory={handleCategory} />;
}

const mapDispatchToProps = ({
	updateCategoryValue,
});

const ConnectedCategoryFilterContainer = connect(null, mapDispatchToProps)(CategoryFilterContainer);
export default ConnectedCategoryFilterContainer;
