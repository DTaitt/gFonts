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
        {
            props.favorites.map((fav) => (
                <style key={fav.family}>
                    {`@import url('https://fonts.googleapis.com/css?family=${separateByPlus(fav.family)}');`}
                </style>
            ))
        }
    </Helmet>
)

const mapStateToProps = (state) => ({ renderedFonts: state.renderedFonts, favorites: state.favorites })

export default connect(mapStateToProps)(Helm)
