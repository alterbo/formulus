import * as Yup from 'yup';

const FormulusSchema = Yup.object().shape({
    type: Yup.string().oneOf(['email', 'phone', 'text', 'number'], 'Invalid type'),
    email: Yup.string().email(),
    number: Yup.number(),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone number is not valid'),
    text: Yup.string(),
});

export default FormulusSchema;
