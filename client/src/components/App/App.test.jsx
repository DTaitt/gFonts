import Helm from 'components/Helm/Helm'
import enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from './App';
const wrapper = shallow(<App />)

describe('<App />', () => {
    describe('should render', () => {
        it('<Helm />', () => {
            expect(wrapper.exists('Connect(Helm)')).toBe(true)
        })
        it('<Menu />', () => {
            expect(wrapper.exists('Connect(Menu)')).toBe(true)
        })
        it('<Main />', () => {
            expect(wrapper.exists('Main')).toBe(true)
        })
    })
})