import { Field, Form, Formik } from 'formik';
import FormulusSchema from './FormulusSchema';

export const Formulus = () => {
    return (
        <Formik
            initialValues={{
                input: '',
                type: 'email',
            }}
            onSubmit={values => {
                console.log(values);
            }}
            validationSchema={FormulusSchema}
        >
        {({ dirty, errors, isValidating, touched, values }) => (
            <Form>
                <div>
                    <label htmlFor="type">Type</label>
                    <Field as="select" name="type">
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                    </Field>
                </div>
                <div>
                    <label htmlFor="input">Input</label>
                    <Field
                        name="input"
                        type={values.type}
                    />
                    {errors.input && touched.input && <div>{errors.input}</div>}
                </div>
                <button disabled={!dirty && isValidating} type="submit">Submit</button>
            </Form>
        )}
        </Formik>
    )
};
