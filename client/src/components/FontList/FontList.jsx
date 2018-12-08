//@flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {initializeFontData} from 'redux/state/fonts/actions';
import Font from 'components/Font/Font';
import { createFontsUrl, seperateByPlus } from '../../utilities/utilities';
import './FontList.css'

export class FontList extends PureComponent {
	componentDidMount() {
		this.props.initializeFontData();
	}

	render() {
		return (
			<section className="font-list">
				{
					this.props.fonts.map((font) => (
						<Font
							category={font.category}
							family={font.family}
							key={font.family}
							id={font.family}
							url={createFontsUrl(seperateByPlus(font.family))}
							variants={font.variants}
						/>
					))
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

export default connect(mapStateToProps, mapDispatchToProps)(FontList);