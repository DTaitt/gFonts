import React, { memo } from 'react'

const ModalSection = memo((props:Props) => {
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