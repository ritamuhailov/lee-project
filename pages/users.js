import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose';

<section className='userNamePassword'>

    <div className='userName'>
        <input id="userNameInput" type="text" placeholder="שם משתמש"></input>
        <input id="password" type="text" placeholder="ססמא"></input>
    </div>

    <div className='okButton'>
        <button className='="okBtn' onClick={(e) => { e.target.value === userName; }}> התחבר </button>
    </div>

</section>
