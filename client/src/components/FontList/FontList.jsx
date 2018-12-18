//@flow
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller'
import _pipe from 'lodash.flow'
import { initializeFontData } from 'redux/state/fonts/actions';
import Font from 'components/Font/Font';
import { separateByPlus, prefixWithUrlRoute } from 'utilities/utilities'

import './FontList.css'

const FontList = memo((props) => {

	useEffect(() => props.initializeFontData(), [])

	const [ startIndex, setStartIndex ] = useState(0)

	const [ fonts, setFonts ] = useState([])

	const loadMoreFonts = (numOfFonts) => {
		const endIndex = startIndex + numOfFonts;
		const newFonts = props.fonts.slice(startIndex, endIndex)
		setFonts([...fonts, ...newFonts])
		setStartIndex(startIndex + numOfFonts)
	}

	useEffect(() => {
		const hasNotLoadedAllFonts = fonts.length !== props.fonts.length
		hasNotLoadedAllFonts && loadMoreFonts(12) 
	}, [props.fonts])

	return(
		<section className="font-list">
            <InfiniteScroll
				pageStart={0}
				loadMore={loadMoreFonts}
				threshold={500}
				hasMore={fonts.length !== props.fonts.length}
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

const mapStateToProps = (state) => ({ fonts: state.filteredFonts })
const mapDispatchToProps = ({ initializeFontData });

export default connect(mapStateToProps, mapDispatchToProps)(FontList);