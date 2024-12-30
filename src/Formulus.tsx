import { Field, Form, Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';
import { FormulusSchema } from './FormulusSchema';
import { FormulusColumn } from './FormulusColumn';
import OneDefault from './ornaments/one-default';
import OneSuccess from './ornaments/one-success';
import OneError from './ornaments/one-error';
import { useState } from 'react';
import { ThreeDefault } from './ornaments/three-default';
import { ThreeError } from './ornaments/three-error';
import { ThreeSuccess } from './ornaments/three-success';
import { TwoDefault } from './ornaments/two-default';
import { TwoError } from './ornaments/two-error';
import { TwoSuccess } from './ornaments/two-success';
import { FourDefault } from './ornaments/four-default';
import { FourError } from './ornaments/four-error';
import { FourSuccess } from './ornaments/four-success';
import { FiveDefault } from './ornaments/five-default';
import { FiveError } from './ornaments/five-error';
import { FiveSuccess } from './ornaments/five-success';

interface FormValues {
    type: string;
    input: string;
}

export const Formulus = () => {
    const [isValid, setIsValid] = useState(false);
    const [validating, setValidating] = useState(false);

    const handleValidation = (validateForm: FormikProps<FormikValues>['validateForm']) => {
        setValidating(true);
        validateForm().then((formErrors: any) => {
            setIsValid(Object.keys(formErrors).length === 0);
            setTimeout(() => {
                setValidating(false);
                setTimeout(() => {
                    setValidating(true);
                }, 100);
            }, 100);
        });
    };

    return (
        <Formik
            initialValues={{
                type: 'email',
                input: '',
            }}
            onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                console.log(values);
                setSubmitting(false);
            }}
            validationSchema={FormulusSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
        {({ errors, validateForm, values }) => (
            <Form className="border-b border-slate-400 grow gap-12 mb-3 mt-12 w-full">
                <div className="flex flex-wrap gap-6 justify-around h-full content-end mx-auto px-12">
                    <div className="flex flex-col px-3">
                        <div className="border border-slate-400 p-2 rounded">
                            <label className="block mb-2" htmlFor="type">Type</label>
                            <Field className="border border-slate-400 p-1" as="select" id="type" name="type">
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                                <option value="number">Number</option>
                            </Field>
                        </div>
                        <FormulusColumn key={validating.toString()} validating={validating}>
                            <div className="content-between grid grid-cols-5 grid-rows-1 h-full">
                                <div className="col-start-1 col-end-4">
                                    {!values.input ? <TwoDefault /> : Object.keys(errors).length > 0 && !isValid ? <TwoError /> : isValid ? <TwoSuccess /> : <TwoDefault />}
                                </div>
                                <div className="col-start-2 col-end-5 h-[70%] self-end">
                                    {!values.input ? <ThreeDefault /> : Object.keys(errors).length > 0 && !isValid ? <ThreeError /> : isValid ? <ThreeSuccess /> : <ThreeDefault />}                                
                                </div>
                            </div>
                        </FormulusColumn>
                    </div>
                    <div className="flex flex-col basis-3/6 px-3 relative">
                        <div className="border border-slate-400 p-2 rounded">
                            <label className="block mb-2" htmlFor={values.type}>Input</label>
                            <Field
                                className="border border-slate-400 p-1 w-100"
                                id="input"
                                name="input"
                                type={values.type}
                            />
                            {errors[values.type as keyof typeof errors] && <div>{errors[values.type as keyof typeof errors]}</div>}
                        </div>
                        <FormulusColumn key={validating.toString()} validating={validating}>
                            <div className="content-between grid grid-cols-6 grid-rows-2 h-full">
                                <div className="col-start-1 col-span-4">
                                    {!values.input ? <FourDefault /> : Object.keys(errors).length > 0 && !isValid ? <FourError /> : isValid ? <FourSuccess /> : <FourDefault />}
                                </div>
                                <div className="col-start-1 col-end-4 self-end">
                                    {!values.input ? <OneDefault /> : Object.keys(errors).length > 0 && !isValid ? <OneError /> : isValid ? <OneSuccess /> : <OneDefault />}
                                </div>
                                <div className="col-end-7 col-span-2">
                                    {!values.input ? <FiveDefault /> : Object.keys(errors).length > 0 && !isValid ? <FiveError /> : isValid ? <FiveSuccess /> : <FiveDefault />}
                                </div>
                            </div>
                        </FormulusColumn>
                    </div>
                    <div className="self-end">
                        <div className="border border-slate-400 p-2 rounded">
                            <button
                                className="border border-slate-400"
                                onClick={() => handleValidation(validateForm)}
                                type="button"
                            >Validate</button>
                        </div>
                        <FormulusColumn key={validating.toString()} validating={validating}></FormulusColumn>
                    </div>
                </div>
            </Form>
        )}
        </Formik>
    )
};
