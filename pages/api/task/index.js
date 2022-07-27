import mongodb from '../../../middleware/mongodb';
import Task from '../../../models/task';

const project = async (req, res) => {
    const { method } = req;

    //Create task 
    if (method === "POST") {
        try {
            const task = new Task(req.body);
            const newTask = await task.save();
            res.status(200).json({ data: newTask, message: 'Task added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    };

    // Get all tasks 
    if (method === "GET") {
        try {
            const tasks = await Task.find();
            res.status(200).json({ data: tasks })
        } catch (error) {
            res.status(500).json({ message: 'Inkernal Server Error' });
            console.log(error);
        }
    }
};

export default mongodb(project); 