// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../users/Style.module.css'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button'; 
// import { useState } from 'react';


function Users() { 

//     const [input, setInput] = useState({
//         email: "",
//         userName: "",
//         password: "" 
//     });

//     const handleChange = (e, property) => {
//         setInput({
//             ...input,
//             [property]: e.target.value
//         })
//     }
//     console.log("input", input); 

//     const [user, setUser] = useState([]);

//     const handleSubmit = (e) => {
//         setUser({user}); 
//         // setOpen(false);
//         fetch('api/user', {
//             method: 'POST',
//             body: JSON.stringify(input),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(e => console.log(e))
//     }
//     return (
//         <Box className={styles.connectUser}
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' }
//             }}
//             noValidate
//             autoComplete="off">
//             <TextField 
//             label="Email" 
//             color="secondary" 
//             focused placeholder="אימייל"
//             value={input.email}
//             onChange={e => handleChange(e, "email")}  />
//             <TextField 
//             label="User Name" 
//             color="secondary" 
//             focused placeholder="שם משתמש"
//             value={input.userName}
//             onChange={e => handleChange(e, "userName")} />
//             <TextField 
//             label="Password" 
//             color="secondary" 
//             focused placeholder="סיסמא" 
//             value={input.password}
//             onChange={e => handleChange(e, "password")}
//             multiline />
//             <div>
//                 <Button classname={styles.connectButton} onClick={handleSubmit} variant="contained">התחבר</Button>
//                 {/* <Button variant="outlined">התחבר</Button> */}
//             </div>
//         </Box>
//     );
}

export default Users;


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
