import './FontSet.css'

import React from 'react'
import { Button, CardPanel } from 'react-materialize'
import { connect } from 'react-redux';
import { deleteSelectedFont } from 'redux/state/selectedFonts/actions'
import { copySelectedCss, copySelectedHtml } from 'utilities/utilities';

const FontSet = (props) => (
    <CardPanel 
        className="font-set white black-text z-depth-2"
    >
        <h2 className="font-set__title _capitalize">Current Set</h2>
        {
            props.selectedFonts.length > 0 
            ? (
                <div className="font-set__interaction__code">
                    <Button onClick={() => copySelectedHtml(props.selectedFonts)}>Copy HTML Set</Button>
                    <Button onClick={() => copySelectedCss(props.selectedFonts)}>Copy CSS Set</Button>
                </div>
            )
            : <p>No currently selected fonts</p>
        }
        {
            props.selectedFonts.map((font) => (
                <div key={font.family} className='chip'>
                    {font.family}
                    <i 
                        className="close material-icons"
                        onClick={() => props.deleteSelectedFont(font.family) }
                    >close</i>
                </div>
                )
            )
        }
    </CardPanel>
)

const mapStateToProps = (state) => ({ selectedFonts: state.selectedFonts })

const mapDispatchToProps = { deleteSelectedFont }

export default connect(mapStateToProps, mapDispatchToProps)(FontSet)