//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import {updateCategoryValue} from 'redux/actions/actions';

type Props = {
	updateCategoryValue(categoryValue: string):any
}
type State = {}

export class CategoryFilterContainer extends Component<Props, State> {

    handleCategory = this.handleCategory.bind(this)

    handleCategory(e: Object){
    	const categoryValue = e.target.value;
    	this.props.updateCategoryValue(categoryValue);
    }

    render() {
    	return(
    		<CategoryFilter handleCategory={this.handleCategory} />
    	);
    }
}

const mapDispatchToProps = ({
	updateCategoryValue,
});

const ConnectedCategoryFilterContainer = connect(null, mapDispatchToProps)(CategoryFilterContainer);
export default ConnectedCategoryFilterContainer;
