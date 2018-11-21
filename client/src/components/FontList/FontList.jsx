//@flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {initializeFontData} from 'redux/state/fonts/actions';
import Font from 'components/Font/Font';
import { createFontsUrl, seperateByPlus } from '../../utilities/utilities';

type Props = {
    filteredFonts: Object[],
    initializeFontData():Object[],
};
type State = {};

export class FontList extends PureComponent<Props, State>{
	componentDidMount() {
		this.props.initializeFontData();
	}

	render() {
		return (
			<section className="font-list">
				{
					this.props.fonts.map((font) => {
						return (
							<Font
								category={font.category}
								family={font.family}
								key={font.family}
								id={font.family}
								url={createFontsUrl(seperateByPlus(font.family))}
								variants={font.variants}
							/>
						);
					})
				}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	fonts: state.filteredFonts
})

const mapDispatchToProps = ({
	initializeFontData,
});

export default FontList = connect(mapStateToProps, mapDispatchToProps)(FontList);