import mongodb from '../../../middleware/mongodb';
import task from '../../../models/task';

export default async (req, res) => {
    const { method } = req;

    //connect to database 
    await mongodb();

    //Create task 
    if (method === "POST") {
        try {
            const newTask = await new Task(req.body).save();
            res.status(201).json({ data: newTask, message: 'Task added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internet Server Error' });
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
}