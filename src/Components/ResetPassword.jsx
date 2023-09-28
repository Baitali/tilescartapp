import React from 'react'
import {useForm}  from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import styles from '../CssClasses/FormStyles.module.css';

export default function ResetPassword() {

    const {register, handleSubmit , formState:{errors}} = useForm(); 
    const navigate = useNavigate();

    const onSubmit = (data)=>{
        console.log("submitted data , ", data);
        navigate('/');
    };

    const validatePassword = (password) => {

      const minLength = 8;
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);
      return (
        password.length >= minLength && hasNumber && hasSpecialChar 
      );
  
    };

  return (
    <>
   <form onSubmit={handleSubmit(onSubmit)} className={styles.loginStyle}>
      
      <h3>Reset Password</h3>
      
      <label style={{width:80, float:'left'}}>New Password  </label>
      <input type='password' {...register("newPassword", {
        required:"Please enter password",
        pattern:{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message:"Incorrect format for password"
        }
        })}></input>
      {errors.newPassword && <h6 style={{color:'red'}}>{errors.newPassword.message}</h6>}
      <br/><br/>

      <label style={{width:80, float:'left'}}>Confirm Password  </label>
      <input type='confirmPassword' {...register("confirmPassword", {required:true})}></input>
      {errors.confirmPassword && <h6 style={{color:'red'}}>{errors.confirmPassword}</h6>}
      <br/><br/>
      <br/><br/>
      <button className={styles.loginBtn} type='submit'>Update Password</button>
      <button className={styles.loginBtn} onClick={onSubmit}>Back</button>

      <br/><br/>
  </form>
    </>
  )
}
