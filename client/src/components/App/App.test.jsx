import Helm from 'components/Helm/Helm'
import Main from 'components/Main/Main'
import Menu from 'components/Menu/Menu'
import enzyme, { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App';
const wrapper = shallow(<App />)

describe('<App />', () => {
    describe('should render', () => {
        it('<Helm />', () => {
            expect(wrapper.exists(<Helm />)).toBe(true)
        })
        it('<Menu />', () => {
            expect(wrapper.exists(<Menu />)).toBe(true)
        })
        it('<Main />', () => {
            expect(wrapper.exists(<Main />)).toBe(true)
        })
    })
})