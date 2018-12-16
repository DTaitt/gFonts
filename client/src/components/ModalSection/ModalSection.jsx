import React, { memo } from 'react'

import './ModalSection.css'

const ModalSection = memo((props) => {
    return(
        <div className={`${props.language}`}>
			<h2>{`Add to ${props.language.toUpperCase()}`}</h2>
			<blockquote className={`${props.language}`}>
				<pre>
					<code>
						{props.code}
					</code>
				</pre>
			</blockquote>
		</div>
    )
})

export default ModalSection