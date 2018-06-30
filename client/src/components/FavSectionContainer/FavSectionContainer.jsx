// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {initializeFavData} from 'redux/actions/actions';
import FavSection from 'components/FavSection/FavSection';

type Props = {
    initializeFavData():void,
    favData: Object[],
}
type State = {}

class FavSectionContainer extends Component<Props, State> {

	componentDidMount() {
		this.props.initializeFavData();
	}

	render() {
		return <FavSection favData = { this.props.favData } />;
	}
}

function mapStateToProps(state) {
	return {
		favData: state.favData,
	};
};

const mapDispatchToProps = ({
	initializeFavData
});

const ConnectedFavSectionContainer = connect(mapStateToProps, mapDispatchToProps)(FavSectionContainer);
export default ConnectedFavSectionContainer;