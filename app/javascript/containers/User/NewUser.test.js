import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewUser from "./NewUser";

configure({adapter: new Adapter()});

describe('<NewUser />', () => {
    it('renders <NewUser /> components', () => {
        const wrapper = mount(<NewUser />);
        expect(wrapper.find('input')).toHaveLength(5);
        expect(wrapper.find('h1').text()).toEqual('Criar novo usuário');
    });

    describe('when click on save button', () => {
        it('shows error message', () => {
            const wrapper = mount(<NewUser />);
            wrapper.find('button').simulate('click');
            expect(wrapper.find('TextInputWithLabel').get(0).props.error).toEqual('Este campo é obrigatório')
            expect(wrapper.find('TextInputWithLabel').get(1).props.error).toEqual('Este campo é obrigatório')
            expect(wrapper.find('TextInputWithLabel').get(2).props.error).toEqual('Este campo é obrigatório')
            expect(wrapper.find('TextInputWithLabel').get(3).props.error).toEqual('Este campo é obrigatório')
            expect(wrapper.find('TextInputWithLabel').get(4).props.error).toEqual(undefined)
        });
    });
});
