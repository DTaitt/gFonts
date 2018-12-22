import './FontList.css'

import React, { memo, useEffect, useReducer } from 'react';
import { fontsReducer, getFonts } from 'state/fonts'
import { prefixWithUrlRoute, separateByPlus } from 'utilities/utilities'
import { renderMoreFonts, renderedFontsReducer } from 'state/renderedFonts'

import Font from 'components/Font/Font';
import InfiniteScroll from 'react-infinite-scroller'
import _pipe from 'lodash.flow'
import appState from 'state/appState'

const FontList = memo(() => {

	const [ 
		{ fonts }, 
		fontsDispatch 
	] = useReducer(fontsReducer, appState)
	
	const [ 
		{ renderedFonts, renderedFontsIndex }, 
		renderedFontsDispatch 
	] = useReducer(renderedFontsReducer, appState)

	useEffect(() => { getFonts(fontsDispatch) }, [])

	return(
		<section className="font-list">
            <InfiniteScroll
				pageStart={0}
				initialLoad={true}
				loadMore={() => renderMoreFonts(renderedFontsDispatch, fonts, renderedFontsIndex)}
				threshold={500}
				hasMore={fonts.length > renderedFonts.length}
                loader={null}>
                {
					renderedFonts.map((font) => (
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

export default FontList;