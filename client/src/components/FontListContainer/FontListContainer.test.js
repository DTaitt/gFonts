import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });
import {Provider} from 'react-redux'
import FontListContainer from './FontListContainer';
import FontList from '../FontList/FontList';
import store from '../../redux/store';

const wrapper = shallow(
    <Provider store = {store}>
        <FontListContainer />
    </Provider>
);

describe("FontListContainer", function () {
    it("should render without throwing an error", function () {
        expect(wrapper.exists(FontList)).toBe(true);
    });
});