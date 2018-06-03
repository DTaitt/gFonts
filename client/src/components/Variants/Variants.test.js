import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CollectionItem } from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Variants from './Variants';

const wrapper = shallow(<Variants />);

describe("Variants", function () {
    it("should render <Variants /> without throwing an error", function () {
        expect(wrapper.exists(<CollectionItem className="variant"></CollectionItem>)).toBe(true);
    });
});