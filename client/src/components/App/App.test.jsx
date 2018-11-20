import React from 'react';
import enzyme, { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Main from '../Main/Main'

const wrapper = shallow(<App />)

describe('<App />', () => {
    describe('should render', () => {
        it('itself', () => {
            expect(wrapper.exists()).toBe(true)
        })
        it('<Header />', () => {
            expect(wrapper.exists(<Header />)).toBe(true)
        })
        it('<Main />', () => {
            expect(wrapper.exists(<Main />)).toBe(true)
        })
    })
})