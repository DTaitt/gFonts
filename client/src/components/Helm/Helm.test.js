import enzyme, { mount } from 'enzyme'
import _isEqual from 'lodash.isequal'
import React from 'react'
import { storeFactory } from 'redux/store';
import { createCssImport } from 'utilities/utilities';
import Helm from './Helm';

const renderedFonts = [
    { family: 'family' },
    { family: 'a second family' },
    { family: 'a third family' },
]

const favorites = [
    { family: 'favorite' },
    { family: 'a second favorite' },
    { family: 'a third favorite' },
]

const mockStore = storeFactory({ renderedFonts, favorites })
const wrapper = mount(<Helm store={mockStore} />)

beforeEach(() => {
    wrapper.setState({ renderedFonts })
})

describe('<Helm />', () => {
    it('should render a <style> tag with the proper import for each font and favorite rendered on the page', () => {

        const renderedFontsStyle = renderedFonts.map(font => createCssImport(font.family))
        const renderedFavoritesStyle = favorites.map(fav => createCssImport(fav.family))
        const fontAndFavStyles = [...renderedFontsStyle, ...renderedFavoritesStyle]

        const headProps = wrapper.find('SideEffect(NullComponent)').props()
        const styleTagsContent = headProps.style.map(font => font.cssText)

        expect(_isEqual(styleTagsContent, fontAndFavStyles)).toBe(true)
    })
})
