import './FontList.css'

import React, { memo, useEffect } from 'react';
import { prefixWithUrlRoute, separateByPlus } from 'utilities/utilities'

import Font from 'components/Font/Font';
import InfiniteScroll from 'react-infinite-scroller'
import _pipe from 'lodash.flow'
import { connect } from 'react-redux';
import { initializeFontData } from 'redux/state/fonts/actions';
import { renderAdditionalFonts } from 'redux/state/renderedFonts/actions'

const FontList = memo((props) => {

	useEffect(() => { props.initializeFontData() }, [])

	return(
		<section className="font-list">
            <InfiniteScroll
				pageStart={0}
				loadMore={props.renderAdditionalFonts}
				threshold={500}
				hasMore={props.fonts.length > props.renderedFonts.length}
                loader={null}>
                {
					props.renderedFonts.map((font) => (
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