// @flow
import React from 'react';
import './FontList.css';

// import FontCardContainer from './../FontCardContainer';

type Props = {};

export default function FontList(props: Props) {
    return (
        <section className="card-display">
            {
                props.fontData.map((font) => {
                    return (
                        // <FontCardContainer
                        //     key={font.family}
                        //     id={font.family}
                        //     family={font.family}
                        //     category={font.category}
                        //     url={`https://fonts.google.com/specimen/${font.family}`}
                        //     variants={font.variants}
                        //     isInFav={font.isInFav}
                        // />
                        <p>Font</p>
                    )
                })
            }
        </section>
    )
}