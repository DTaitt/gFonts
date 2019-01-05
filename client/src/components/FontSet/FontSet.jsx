import React from 'react'
import { Button, CardPanel } from 'react-materialize'
import { connect } from 'react-redux';
import { copySelectedCss, copySelectedHtml } from 'utilities/utilities';

const FontSet = (props) => {
    return(
        <CardPanel 
            className="font white black-text z-depth-2"
        >
            <div className="font__interaction__code">
                <Button onClick={() => copySelectedHtml(props.selectedFonts)}>Copy HTML Set</Button>
                <Button onClick={() => copySelectedCss(props.selectedFonts)}>Copy CSS Set</Button>
            </div>
        </CardPanel>
    )
}

const mapStateToProps = (state) => ({ selectedFonts: state.selectedFonts })

export default connect(mapStateToProps)(FontSet)