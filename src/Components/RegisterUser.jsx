import React from 'react'
import {useForm}  from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import styles from '../CssClasses/FormStyles.module.css';


export default function RegisterUser() {
    const {register, handleSubmit , formState:{errors}} = useForm(); 
    const navigate = useNavigate();

    const onSubmit = (data)=>{
        console.log("submitted data , ", data);
        navigate('user');
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginStyle}>
      
    <h3>User Registration</h3>
    <br/><br/>
    <label style={{width:80, float:'left'}}>Full Name  </label>
    <input {...register("fullname", {required:"This is mandatory field"})}></input>
    {errors.fullname && <h6 style={{color:'red'}}>{errors.fullname.message}</h6>}
    <br/><br/>

    <label style={{width:80, float:'left'}}>Email  </label>
        <input {...register("email", {required:"This is mandatory field"})}></input>
        {errors.email && <h6 style={{color:'red'}}>{errors.email.message}</h6>}
        <br/><br/>

    <label style={{width:80, float:'left'}}>Username  </label>
        <input {...register("username", {required:"This is mandatory field"})}></input>
        {errors.username && <h6 style={{color:'red'}}>{errors.username.message}</h6>}
        <br/><br/>

    <label style={{width:80, float:'left'}}>Password  </label>
    <input type='password' {...register("password", {required:"This is mandatory field"})}></input>
    {errors.password && <h6 style={{color:'red'}}>{errors.password.message}</h6>}
    <br/><br/>
    <button className={styles.loginBtn} type='submit'>Register</button>
    <br/><br/>
</form>
  )
}
