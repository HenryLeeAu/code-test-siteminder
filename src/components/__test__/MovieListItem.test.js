import React from "react";

import MovieListItem from "components/MovieListItem";
import { shallow } from "enzyme";

it('MovieListItem - render each component', () => {
    const wrappered = shallow(<MovieListItem clicked={true}/>);
    expect(wrappered.find("li").hasClass('clicked')).toBeTruthy()
});
