import React from 'react'
import {useForm}  from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import styles from '../CssClasses/FormStyles.module.css';


export default function Login() {

    const {register, handleSubmit , formState:{errors}} = useForm(); 
    const navigate = useNavigate();

    const onSubmit = (data)=>{
        console.log("submitted data , ", data);
        navigate('productCatalog');
    };

    const resetPassword = ()=>{
        console.log("Resetting Password ");
        navigate('resetPassword');
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginStyle}>
      
        <h3>Log In</h3>
        
        <label style={{width:80, float:'left'}}>Username  </label>
        <input {...register("username", {required:"This is mandatory field"})}></input>
        {errors.username && <h6 style={{color:'red'}}>{errors.username.message}</h6>}
        <br/><br/>

        <label style={{width:80, float:'left'}}>Password  </label>
        <input type='password' {...register("password", {required:"This is mandatory field"})}></input>
        {errors.password && <h6 style={{color:'red'}}>{errors.password.message}</h6>}
        <br/><br/>
        <button className={styles.loginBtn} type='submit'>Login</button>

        <button className={styles.loginBtn} onClick={resetPassword}>Reset Password</button>
        <br/><br/>

        <a href='/register'>Register Here</a>
    </form>
  )
}
