import Head from 'next/head'
import Image from 'next/image'
import styles from '../users/Style.module.css'
import mongoose from 'mongoose';
import Link from 'next/link'

// import { useSyncExternalStore } from 'react';
// import { userAgentFromString } from 'next/server';

// export default function users() {
//     return (

//         <section className='userNamePassword'>

//             <div className='userName'>
//                 <input id="email" type="text" placeholder="אימייל"></input>
//                 <input id="userNameInput" type="text" placeholder="שם משתמש"></input>
//                 <input id="password" type="text" placeholder="ססמא"></input>
//             </div>

//             <div className='okButton'>
//                 <button className='="okBtn' onClick={(e) => { e.target.value === userName; }}> התחבר </button>
//             </div>

//         </section>
//     )
// }; 

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Users() {
    return (
        <Box className={styles.connectUser}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off">
            <TextField label="Email" color="secondary" focused placeholder="אימייל" />
            <TextField label="User Name" color="secondary" focused placeholder="שם משתמש" />
            <TextField label="Password" color="secondary" focused placeholder="סיסמא" multiline />
            <div>
                <Button classname={styles.connectButton} variant="contained">התחבר</Button>
                {/* <Button variant="outlined">התחבר</Button> */}
            </div>
        </Box>
    );
}

export default Users;


