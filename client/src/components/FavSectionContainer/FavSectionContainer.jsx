// @flow
import React, { Component } from 'react';
import {Collection} from 'react-materialize';
import {connect} from 'react-redux';
import axios from 'axios';
import {initializeFavData} from 'redux/actions/actions';
import FavSection from 'components/FavSection/FavSection';

type Props = {
    initializeFavData():void,
    favData: Object[],
}
type State = {}

class FavSectionContainer extends Component<Props, State> {

	componentDidMount() {
		this.fetchFavorites();
	}

	async fetchFavorites() {
		try {
			const {data: favorites} = await axios.get('/favorites/?format=json');
			this.props.initializeFavData(favorites);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<FavSection favData = { this.props.favData } />
		);
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