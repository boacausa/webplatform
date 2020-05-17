import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubmitButton from "./SubmitButton";

configure({adapter: new Adapter()});

describe('<SubmitButton />', () => {
    it('renders three <SubmitButton /> components', () => {
        const wrapper = shallow(<SubmitButton />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders button title when passed in', () => {
        const wrapper = shallow(<SubmitButton title='Button Title' />);
        expect(wrapper.text()).toEqual('Button Title');
    });

    it('simulates click events', () => {
        const spy = jest.fn();
        const wrapper = shallow(<SubmitButton clicked={spy} />);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled()
    });

    describe('when <SubmitButton /> is disabled', () => {
        it('has disabled flag', () => {
            const wrapper = shallow(<SubmitButton isDisabled />);
            expect(wrapper.find('button').is('[disabled]')).toBe(true);
        });
    });
});
