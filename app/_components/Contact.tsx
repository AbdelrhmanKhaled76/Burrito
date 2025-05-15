'use client'
import React, { useState } from 'react';
import { headers } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faInbox, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Page = () => {
    const [loading, setLoading] =  useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            name : '',
            email : '',
            feedback : ''
        },
        onSubmit : async values => {
            setLoading(true);
            try {
                const response = await fetch('/api/feedback', {
                    method : 'POST',
                    body : JSON.stringify(values),
                });
                if (!response.ok) {
                    toast.error('something went wrong try again : (', {
                        position: 'top-center',
                    });
                    const error = await response.text();
                    console.log(error);
                    throw new Error('Failed to submit feedback : ');
                }
                else{
                    toast.success('thanks for letting us know your opinion : )', {
                        position: 'top-center',
                    });
                }
            }
            catch(err) {
                console.log('Error:', err);
                
            }
            finally {
                setLoading(false);
            }
        },
        validationSchema : Yup.object({
            name : Yup.string().required('Required !'),
            email : Yup.string().email('not a valid email !').required('Required !'),
            feedback : Yup.string().min(10,'cannot be less than 10 letter').max(100, 'can\'t be more than 100 letter').required('Required !')
        })
    })
    return (
        <div className='container'>
            <h1 className={`pt-20 pb-10 ${headers.className} text-header text-center`} data-aos="fade-up" data-aos-duration="1000">this page is made for client's feedback</h1>
            <h3 className='text-primary-color text-center'>give us a good review fillas</h3>
            <section className='grid xl:grid-cols-3 grid-cols-1 my-10'>
                <div className='xl:col-span-2 col-span-1'>
                    <form onSubmit={formik.handleSubmit} className='flex justify-between flex-col'>
                        <input type="text" className='mb-10 mt-2 rounded-[40px] px-5 py-2 border border-black' placeholder='Name' {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-500 text-center'>{formik.errors.name}</div>
                        ) : null}
                        <input type="text" className='my-5 rounded-[40px] px-5 py-2 border border-black' {...formik.getFieldProps('email')} placeholder='Email'/>
                        {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-500 text-center'>{formik.errors.email}</div>
                        ) : null}
                        <textarea  id="" rows={7} className='my-10 rounded-[40px] px-5 py-3 border border-black' {...formik.getFieldProps('feedback')} placeholder='dont be shy and tell us what you feel '></textarea>
                        {formik.touched.feedback && formik.errors.feedback ? (
                        <div className='text-red-500 text-center'>{formik.errors.feedback}</div>
                        ): null}
                        <button type='submit' className={`w-fit px-6 py-2 bg-filler-color text-primary-color rounded-[40px] ${headers.className} ${loading? 'bg-gray-700' : '' } mx-auto xl:mx-0`} disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
                    </form>
                </div>
                <div className='text-center pt-10 xl:pt-0'>
                    <h4 className={`text-primary-color ${headers.className} text-navbar pb-10`}>contact information</h4>
                    <p className='pb-10 px-16'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h4 className={`text-primary-color ${headers.className} text-navbar pb-10`}>Contact Details</h4>
                    <ul className='flex justify-between flex-col text-center items-start mx-auto w-fit'>
                        <li className='py-3'><FontAwesomeIcon icon={faPhone} className='pe-10'/><span>123 456 7893</span></li>
                        <li className='py-3'><FontAwesomeIcon icon={faAddressBook} className='pe-10'/><span>35th Ave, Queens, NY 11106, USA</span></li>
                        <li className='py-3'><FontAwesomeIcon icon={faMobile} className='pe-10'/><span>123 456 7893</span></li>
                        <li className='py-3'><FontAwesomeIcon icon={faInbox} className='pe-10'/><span>bodi.khaled24@gmail.com</span></li>
                    </ul>
                </div>
            </section>
            <h5 className='text-center pt-10 pb-20 text-primary-color'>¡BURRITO, UNA PRUEBA QUE JAMÁS OLVIDARÁS!</h5>
        </div>
    );
}

export default Page;
