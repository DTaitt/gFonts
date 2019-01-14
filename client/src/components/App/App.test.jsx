import enzyme, { shallow } from 'enzyme';
import React from 'react';
import Main from '../Main/Main'
import App from './App';

const wrapper = shallow(<App />)

describe('<App />', () => {
    describe('should render', () => {
        it('itself', () => {
            expect(wrapper.exists()).toBe(true)
        })
        // it('<Header />', () => {
        //     expect(wrapper.exists(<Header />)).toBe(true)
        // })
        // it('<Main />', () => {
        //     expect(wrapper.exists(<Main />)).toBe(true)
        // })
    })
})