import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NgoCard from "./NgoCard";

configure({adapter: new Adapter()});

describe('<NgoCard />', () => {
    let ngo = {
        id: 123,
        fantasy_name_url: 'fantasynameurl',
        logo_path: 'http://logo_path',
        fantasy_name: 'Test Fantasy Name',
        description: 'Test Description',
        email: 'ngo@test.com',
        phone_number1: '99999999',
    }

    it('renders ngo title', () => {
        const wrapper = shallow(<NgoCard ngo={ngo} />);
        expect(wrapper.find('h1').text()).toEqual(ngo.fantasy_name);
    });

    it('renders ngo description', () => {
        const wrapper = shallow(<NgoCard ngo={ngo} />);
        expect(wrapper.find('p').text()).toEqual(ngo.description);
    });

    it('renders ngo labels', () => {
        const wrapper = shallow(<NgoCard ngo={ngo} />);
        expect(wrapper.find('span').get(0).props.children).toEqual("/");
        expect(wrapper.find('span').get(1).props.children).toEqual(ngo.email);
        expect(wrapper.find('span').get(2).props.children).toEqual("(999) 999-99");
    });

    describe('when ngo contains address', () => {
        it('renders formatted address label', () => {
            ngo['city'] = 'City'
            ngo['state'] = 'ST'

            const wrapper = shallow(<NgoCard ngo={ngo} />);
            expect(wrapper.find('span').get(0).props.children).toEqual("City/ST");
        });
    })
});
