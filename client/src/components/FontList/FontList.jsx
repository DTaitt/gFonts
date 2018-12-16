//@flow
import React, { useEffect } from 'react';
import _flow from 'lodash.flow';
import { connect } from 'react-redux';
import { initializeFontData } from 'redux/state/fonts/actions';
import { prefixWithUrlRoute, separateByPlus } from 'utilities/utilities';
import Font from 'components/Font/Font';

import './FontList.css'

const FontList = (props) => {
	useEffect(() => {
		props.initializeFontData();
	},[])

	return(
		<section className="font-list">
			{
				props.fonts.map((font) => (
					<Font
						category={font.category}
						family={font.family}
						key={font.family}
						id={font.family}
						url={_flow(separateByPlus, prefixWithUrlRoute)(font.family)}
						variants={font.variants}
					/>
				))
			}
		</section>
	)
}

const mapStateToProps = (state) => ({ fonts: state.filteredFonts })
const mapDispatchToProps = ({ initializeFontData });

export default connect(mapStateToProps, mapDispatchToProps)(FontList);