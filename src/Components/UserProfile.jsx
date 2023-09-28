import React from 'react'
import styles from '../CssClasses/FormStyles.module.css';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {

  const navigate = useNavigate();

const formData = {
  fullname : 'Baitali Nath',
  email: 'nath.baitali@metricstream.com',
  username: 'baitali.nath',
  password: '********'
}

const backToProduct = ()=>{
  navigate('productCatalog');
}

  return (
    <>
    <div className={styles.userProfile}>
      <label style={{width:80, float:'left'}}>Full Name  </label>
    <input value={formData.fullname}></input>
    <br/><br/>

      <label style={{width:80, float:'left'}}>Email  </label>
        <input value={formData.email}></input>
        <br/><br/>

      <label style={{width:80, float:'left'}}>Username  </label>
        <input value={formData.username}></input>
        <br/><br/>

    <label style={{width:80, float:'left'}}>Password  </label>
    <input value={formData.password}></input>
    <br/><br/>

    <button onClick={backToProduct}>Back</button>
    </div>

    </>
  )
}
