import React from 'react';
import './SendMail.css';
import { Close } from '@mui/icons-material';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage} from './features/counter/mailSlice';
import { db } from './firebase';
import { FieldValue, serverTimestamp,Timestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';


function SendMail() {
    const { register, handleSubmit, watch, formState: { errors} } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            await addDoc(collection(db, 'email'), {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: FieldValue.serverTimestamp(),
        })
        // onclose()
        }    catch (err) {
          alert(err)
        }
        dispatch(closeSendMessage());
    };

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <Close 
            className="sendMail__close" 
            onClick={ () => dispatch(closeSendMessage())}
        />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input 
            name="to" 
            placeholder="To" 
            type="email" 
            {...register('to', { required: true, })} 
            />
            {errors.to && <p className='sendMail__error'>To is Required</p>}

            <input 
            name="subject" 
            placeholder="Subject" 
            type="text" 
            {...register('subject', { required: true, })}
            />
            {errors.subject && <p className='sendMail__error'>Subject is Required</p>}

            <input 
            name="message" 
            placeholder="Message..." 
            type="text" 
            className="sendMail__message"
            {...register('message', { required: true, })}
            />
            {errors.message && <p className='sendMail__error'>Message is Required</p>}

            <div className="sendMail__options">
                <Button 
                className="sendMail__send"
                variant="contained"
                color="primary"
                type="submit"
                >
                    Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail