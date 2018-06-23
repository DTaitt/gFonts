//@flow
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {initializeFontData} from 'redux/actions/actions';
import FontList from 'components/FontList/FontList';
import {formatFontData} from 'utilities/utilities';

type Props = {
    filterFontData: Object[],
    initializeFontData(Object[]):Object[],
};
type State = {};

export class FontListContainer extends Component<Props, State>{
	componentDidMount() {
		this.fetchFontsData();
	}

	async fetchFontsData() {
		try {
			const {
				data:{
					items:fonts = {}
				}
			} = await axios.get('/fonts');
			this.props.initializeFontData(formatFontData(fonts.slice(0,24)));
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<FontList fontData = {this.props.filterFontData} />
		);
	}
}

const mapStateToProps = state => {
	return {
		filterFontData: state.filterFontData
	};
};

const mapDispatchToProps = ({
	initializeFontData,
});

const ConnectedFontListContainer = connect(mapStateToProps, mapDispatchToProps)(FontListContainer);
export default ConnectedFontListContainer;