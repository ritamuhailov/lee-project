import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose';

<section className='addTask'>
    {/* <div className='newTask'>
        <button className='newTask' onClick={(e) => { e.target.value === a; }}> משימה חדשה </button>
    </div> */}

    <div className='addTask'>
        <input id="title" type="text" placeholder="שם המשימה"></input>
        <input id="description" type="text" placeholder="תיאור/פירוט"></input>
        <input id="dueDate" type="date" placeholder="תאריך יעד"></input>
        <input id="dependencies" type="text" placeholder="תלויות במשימות אחרות"></input>
        <input id="responsible" type="text" placeholder="אחריות של"></input>
        <input id="done" type="text" placeholder="בוצע/לא בוצע"></input>
        <input id="remarks" type="text" placeholder="הערות"></input>
    </div>

    <div className='addButton'>
        <button className='addButton' onClick={(e) => { e.target.value === a; }}> הוסף </button>
    </div>

</section> 
