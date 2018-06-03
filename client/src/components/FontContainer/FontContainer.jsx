// @flow
import React, { Component, Fragment } from "react";
import Font from '../Font/Font';

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