import React from 'react';
import VinList from "../../components/vin-list";
import ResultList from "../../components/result-list";
import {useDispatch, useSelector} from "react-redux";
import {addVin} from "../../store/slice/vinSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { css } from '@emotion/css'


const Home = () => {
    const initialState=''
    const currentVin = useSelector(state => state.currentVin.value)
    const dispatch = useDispatch()

    return (
        <div
            className={css`
                padding: 60px 0 40px;
                text-align: center;
           `}
        >
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
                    <Form className={css`
                              padding-bottom:20px;
                              display: flex;
                              align-items: start;
                              gap: 20px;
                              justify-content: center;
                                
                    `}>
                        <div className={css`
                                display: flex;
                                flex-direction: column;
                                gap:10px
                        `}>
                            <Field className={css`
                                    background-color: inherit;
                                    box-shadow: 0 0 8px 1px #61dafb;
                                    border-radius: 5px;
                                    padding: 10px;
                                    width: 200px;
                                    outline: none;
                                    border: none;
                                    transition: 0.3s;
                                    :focus{
                          box-shadow: 0 0 8px 4px #61dafb;
                          }
                              `}
                                type="text" placeholder="Vehicle identification number" name="vin" />
                            <ErrorMessage name="vin" component="div" />
                        </div>
                        <button className={css`
                          background-color: #61dafb;
                          box-shadow: 0 0 8px 1px #61dafb;
                          border-radius: 5px;
                          padding: 10px;
                          width: 70px;
                          outline: none;
                          border: none;
                          transition: 0.3s;
                          :hover{
                          box-shadow: 0 0 8px 4px #61dafb;
                          }
                        `}
                            type="submit" disabled={isSubmitting || values.vin.length!==17}>
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
           <div className={css`
                  display: flex;
                  gap: 30px;
                  @media(max-width: 600px){
                  display:block;
                  }
           `}>
               <VinList />
               {!!currentVin ? <ResultList /> : null}
           </div>
        </div>
    );
};

export default Home;