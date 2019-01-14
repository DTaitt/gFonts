import React from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'
import { createCssImport } from 'utilities/utilities';

const Helm = (props) => (
    <Helmet>
        <title>gFonts</title>
        { props.renderedFonts.map((font) => <style key={font.family}>{ createCssImport(font.family) }</style>) }
        { props.favorites.map((fav) => <style key={fav.family}>{ createCssImport(fav.family) }</style>) }
    </Helmet>
)

const mapStateToProps = (state) => ({ renderedFonts: state.renderedFonts, favorites: state.favorites })

export default connect(mapStateToProps)(Helm)
