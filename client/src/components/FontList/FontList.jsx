import './FontList.css'

import React, { memo, useEffect, useReducer } from 'react';
import { fontsReducer, getFonts } from 'state/fonts'
import { prefixWithUrlRoute, separateByPlus } from 'utilities/utilities'

import Font from 'components/Font/Font';
import InfiniteScroll from 'react-infinite-scroller'
import _pipe from 'lodash.flow'
import appState from 'state/appState'
import { connect } from 'react-redux';
import { initializeFontData } from 'redux/state/fonts/actions';
import { renderAdditionalFonts } from 'redux/state/renderedFonts/actions'

const FontList = memo((props) => {

	const [ { fonts }, dispatch ] = useReducer(fontsReducer, appState)
	
	useEffect(() => { getFonts(dispatch) }, [])

	return(
		<section className="font-list">
            <InfiniteScroll
				pageStart={0}
				loadMore={props.renderAdditionalFonts}
				threshold={500}
				hasMore={fonts.length > props.renderedFonts.length}
                loader={null}>
                {
					fonts.map((font) => (
						<Font
							category={font.category}
							family={font.family}
							key={font.family}
							id={font.family}
							url={_pipe(separateByPlus, prefixWithUrlRoute)(font.family)}
							variants={font.variants}
						/>
					))
				}
            </InfiniteScroll>
		</section>
	)
})

const mapStateToProps = (state) => ({
	fonts: state.filteredFonts,
	renderedFonts: state.renderedFonts
})

const mapDispatchToProps = ({ initializeFontData, renderAdditionalFonts });

export default connect(mapStateToProps, mapDispatchToProps)(FontList);