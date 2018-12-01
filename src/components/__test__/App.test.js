import React from 'react';

import App from 'components/App'
import { shallow } from 'enzyme'


let  wrappered;
beforeEach(()=>{
    wrappered = shallow(<App />);
});

it('App - render each component', () => {
    expect(wrappered).toMatchSnapshot();
});

