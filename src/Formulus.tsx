import { Field, Form, Formik } from 'formik';

export const Formulus = () => {
    <Formik
        initialValues={{
            username: '',
            email: '',
        }}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
        }}
    >
    {({ errors, touched, isValidating }) => (
        <Form>
            <Field name="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="username" validate={validateUsername} />
            {errors.username && touched.username && <div>{errors.username}</div>}

            <button type="submit">Submit</button>
        </Form>
    )}
    </Formik>

};
