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

export class FontListContainer extends Component<Props, State>{
	componentDidMount() {
		this.fetchFontsData();
	}

	async fetchFontsData() {
		try {
			const {data:{items:res = {}}} = await axios.get('/fonts');
			this.props.initializeFontData(formatFontData(res.slice(0,24)));
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

const ConnectedFontListContainer = connect(mapStateToProps, mapDispatchToProps)(FontListContainer);
export default ConnectedFontListContainer;