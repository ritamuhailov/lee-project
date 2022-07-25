import Head from 'next/head'
import Image from 'next/image'
import styles from '../project/Style.module.css'
import mongoose from 'mongoose';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Task from '../../models/task';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Project() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e, reason) => {
        console.log("reason", reason);

        if (reason !== "backdropClick") {

            setOpen(false);
        }

    }
    const [value, setValue] = useState('');

    const [task, setTask] = useState({
        title: "",
        description: "",
        // dueDate: new Date(),
        dueDate: "",
        dependencies: "",
        responsibility: "",
        done: "",
    });

    const handleChange = (e, property) => {
        setTask({
            ...task,
            [property]: e.target.value
        })
    }

    console.log("task", task);

    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (e) => {
        // e.preventDefault();

        setTaskList([
            ...taskList, task
        ]);
        setOpen(false);
    }

    console.log("taskList", taskList);

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }; 
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleOpen}>הוסף משימה חדשה</Button>
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ direction: 'rtl' }}>
                        הוסף את פרטי המשימה החדשה
                    </Typography>
                    <Box
                        // component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        // style={{ direction: 'rtl', flexDirection: 'column' }}
                        noValidate
                        autoComplete="off">
                        <TextField
                            id="filled-multiline-flexible"
                            label="שם המשימה"
                            fullWidth
                            value={task.title}
                            onChange={e => handleChange(e, "title")}
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="פירוט/תיאור"
                            fullWidth
                            value={task.description}
                            multiline
                            onChange={e => handleChange(e, "description")}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            label="תאריך יעד"
                            placeholder=""
                            fullWidth
                            value={task.dueDate}
                            onChange={e => handleChange(e, "dueDate")}
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            label="תלויות במשימות אחרות"
                            placeholder=""
                            fullWidth
                            value={task.dependencies}
                            onChange={e => handleChange(e, "dependencies")}
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            label="באחריות מי"
                            placeholder=""
                            fullWidth
                            value={task.responsibility}
                            onChange={e => handleChange(e, "responsibility")}
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            label="בוצע/לא בוצע"
                            placeholder=""
                            fullWidth
                            value={task.done}
                            onChange={e => handleChange(e, "done")}
                            multiline
                            variant="filled"
                        />
                        <Box sx={{ direction: 'rtl', spacing: 10 }}>
                            <Button variant="contained" onClick={handleSubmit}>צא ושמור</Button>
                            <Button variant="contained" onClick={handleClose}>צא ללא שמירה</Button>
                        </Box>
                    </Box>
                </Box>

            </Modal>
        </div>
    );
}


// function App() {
//     const [taskList, setTaskList] = useState([
//         Task
//     ]); 
//     let newTitle = ""; 
//     return ( 
//         <div>
//             <input 
//             type={text} 
//             onChange={(e) => {
//                 newTitle =e.target.value; 
//             }}
//             <button 
//             onClick={() => {
//                 setTaskList(Task, 
//                     {
//                         title:newTitle
//                     })
//             }}> 
//             </button>
//         </div>
//     )
// }


// return (

//     <section className='addTask'>
//         <div className='newTask'>
//             <Button variant="contained">הוסף משימה חדשה</Button>
//         </div>

//     </section>
// )

{/* <Button variant="outlined">התחבר</Button> */ }
{/* <button className='newTask' onClick={(e) => { e.target.value === userName; }}> משימה חדשה </button> */ }
{/* </div> */ }

{/* <div className='addTask'>
<input id="title" type="text" placeholder="שם המשימה"></input>
<input id="description" type="text" placeholder="תיאור/פירוט"></input>
<input id="dueDate" type="date" placeholder="תאריך יעד"></input>
<input id="dependencies" type="text" placeholder="תלויות במשימות אחרות"></input>
<input id="responsible" type="text" placeholder="אחריות של"></input>
<input id="done" type="text" placeholder="בוצע/לא בוצע"></input>
<input id="remarks" type="text" placeholder="הערות"></input>
</div> */}

{/* <div className='addButton'>
<button className='addButton' onClick={(e) => { e.target.value === userName; }}> הוסף </button>
</div> */}
export default Project;