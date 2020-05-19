import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInputWithLabel from "./TextInputWithLabel";

configure({adapter: new Adapter()});

describe('<TextInputWithLabel />', () => {
    it('renders three <TextInputWithLabel /> components', () => {
        const wrapper = shallow(<TextInputWithLabel />);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('renders input label when passed in', () => {
        const wrapper = shallow(<TextInputWithLabel label='Input Label' />);
        expect(wrapper.text()).toEqual('Input Label');
    });

    describe('when <TextInputWithLabel /> receives an error', () => {
        it('shows error message', () => {
            const wrapper = shallow(<TextInputWithLabel error={{ message: 'This input is invalid' }} />);
            expect(wrapper.text()).toEqual('This input is invalid');
        });
    });
});
