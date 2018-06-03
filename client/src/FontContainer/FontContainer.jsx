// @flow
import React, { Component, Fragment } from "react";
import axios from 'axios'
import Font from '../Font/Font';
import {connect} from 'react-redux';

type Props = {
    category:string,
    family:string,
    hrefFamily:string,
    id:string,
    url:string,
    variants:string[],
}

type State = {}

export default class FontContainer extends Component<Props, State> {
    render() {
        return (
             <Fragment>
                <Font {...this.props} />
             </Fragment>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         font: fontReducer,
//     }
// }

// export default connect(mapStateToProps)(FontContainer);