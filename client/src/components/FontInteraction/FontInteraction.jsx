import './FontInteraction.css'

import _pipe from 'lodash.flow'
import React from 'react'
import { Button } from 'react-materialize';
import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from 'redux/state/favorites/actions'
import { copyToClipboard, createCssStyle, createHtmlLink, separateByPlus } from 'utilities/utilities';

const FontInteraction = (props) => (
    <div className="font__interaction">
        <div className="font__interaction__code">
            <Button onClick={
                () => _pipe(
                    separateByPlus,
                    createHtmlLink,
                    copyToClipboard
                    )(props.family)
                }>Copy HTML</Button>
            <Button onClick={
                () => _pipe(
                    createCssStyle,
                    copyToClipboard
                )(props.family, props.category)
                }>Copy CSS</Button>
        </div>
        <Button 
            className={`font__interaction__btn ${props.willAddFont ? 'btn_add' : 'btn_delete'} red`} 
            waves='light' 
            floating
            icon={props.willAddFont ? 'favorite' : 'remove'}
            onClick={
                props.willAddFont
                ? () => props.addFavorite({
                category: props.category,
                family: props.family,
                url: props.url,
                variants: props.variants
                })
                : () => props.deleteFavorite(props.family)
            }
        />
    </div>
)

const mapDispatchToProps = ({ addFavorite, deleteFavorite })

export default connect(null, mapDispatchToProps)(FontInteraction)