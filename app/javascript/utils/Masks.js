import { conformToMask } from 'react-text-mask';

const Masks = {
    phoneMask(phoneNumber) {
        const phoneNumberMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        return conformToMask(
            phoneNumber,
            phoneNumberMask,
            {guide: false}
        ).conformedValue;
    }
};

export default Masks;
