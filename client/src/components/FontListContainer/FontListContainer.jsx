//@flow
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {initializeFontData} from './actions/actions';
import FontList from 'components/FontList/FontList';
import {formatFontData} from 'utilities/utilities';

type Props = {
    fontData: Object[],
    initializeFontData(Object[]):Object[],
};
type State = {};

class FontListContainer extends Component<Props, State>{
	componentDidMount() {
		this.fetchFontsData();
	}

	async fetchFontsData() {
		const url = 'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4';
		try {
			const res = await axios.get(url);
			this.props.initializeFontData(formatFontData(res.data.items.slice(0,24)));
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<FontList fontData = {this.props.fontData} />
		);
	}
}

const mapStateToProps = state => {
	return {
		fontData: state.fontData,
	};
};

const mapDispatchToProps = ({
	initializeFontData,
});

export default connect(mapStateToProps, mapDispatchToProps)(FontListContainer);