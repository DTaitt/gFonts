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

const mockStore = storeFactory({ renderedFonts })
const wrapper = mount(<Helm store={mockStore} />)

describe('<Helm />', () => {
    it('should render a <style> tag with the proper import for each font rendered on the page', () => {
        const styleTagsContent = wrapper.find('SideEffect(NullComponent)').props().style.map((font) => font.cssText);
        const renderedFontsStyle = renderedFonts.map((font) => createCssImport(font.family))
        
        expect(_isEqual(styleTagsContent, renderedFontsStyle)).toBe(true)
    })
})
