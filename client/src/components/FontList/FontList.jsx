// @flow
import React from 'react';
import './FontList.css';
import FontContainer from 'components/FontContainer/FontContainer';

type Props = {
    fontData: Object[],
};

export default function FontList(props: Props) {
    return (
        <section className="card-display">
            {
                props.fontData.map((font) => {
                    return (
                        <FontContainer
                            category={font.category}
                            family={font.family}
                            hrefFamily={font.hrefFamily}
                            key={font.family}
                            id={font.family}
                            url={`https://fonts.google.com/specimen/${font.hrefFamily}`}
                            variants={font.variants}
                        />
                    )
                })
            }
        </section>
    )
}