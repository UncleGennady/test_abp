import React from 'react';
import VinList from "../../components/vin-list";
import ResultList from "../../components/result-list";
import {useDispatch, useSelector} from "react-redux";
import {addVin} from "../../store/slice/vinSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Home = () => {
    const initialState=''
    const currentVin = useSelector(state => state.currentVin.value)
    const dispatch = useDispatch()

    return (
        <div>
            <Formik
                initialValues={{ vin:'' }}
                validate={values => {
                    const errors = {};
                    if (!values.vin) {
                        errors.vin = 'Required';
                    } else if (
                        !/^[A-HJ-NPR-Z0-9]{17}$/i.test(values.vin)
                    ) {
                        errors.vin = 'Invalid VIN ';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                        dispatch(addVin(values.vin))
                        setSubmitting(false);
                        values.vin = initialState
                }}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <Field type="text" placeholder="Vehicle identification number" name="vin" />
                        <ErrorMessage name="vin" component="div" />
                        <button type="submit" disabled={isSubmitting || values.vin.length!==17}>
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
            <VinList />
            {!!currentVin ? <ResultList /> : <div>Result list is empty</div>}
        </div>
    );
};

export default Home;