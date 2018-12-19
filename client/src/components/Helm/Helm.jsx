import React from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'
import { separateByPlus } from 'utilities/utilities';

const Helm = (props) => (
    <Helmet>
        <title>gFonts</title>
        {
            props.renderedFonts.map((font) => (
                <style key={font.family}>
                    {`@import url('https://fonts.googleapis.com/css?family=${separateByPlus(font.family)}');`}
                </style>
            ))
        }
    </Helmet>
)

const mapStateToProps = (state) => ({ renderedFonts: state.renderedFonts })

export default connect(mapStateToProps)(Helm)
