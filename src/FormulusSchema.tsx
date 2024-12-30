import * as Yup from 'yup';

export const FormulusSchema = Yup.object().shape({
    type: Yup.string().oneOf(['email', 'phone', 'number'], 'Invalid type'),
    input: Yup.string().when('type', (type, schema) => {
        return type[0] === 'email'
            ? schema.email('Invalid email').required('Required')
            : type[0] === 'phone'
            ? schema.matches(/^[0-9]+$/, 'Phone number is not valid').required('Required')
            : type[0] === 'number'
            ? Yup.number().typeError('Must be a number').required('Required')
            : schema.required('Required');
    }),
});

