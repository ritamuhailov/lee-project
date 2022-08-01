import mongodb from '../../../middleware/mongodb';
import Project from '../../../models/project';
import Task from '../../../models/task';

const task = async (req, res) => {
    const { method } = req;

    //Create task 
    if (method === "POST") {
        try {
            const task = new Task(req.body);
            const newTask = await task.save();
            const { projectId } = req.body;
            const project = await Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask } });
            res.status(200).json({ data: project, message: 'Task added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    };

    // _id of project -> project_id
    // { project_id: 08675fvbnkjio7iryedrgfc, task}
    // const { project_id } = req.body
    // await Project.findOneByIdAndUpdate(projcet_id, {taskarray: $set (task.id)})
    // ADD THIS TASK TO PROJECT
    // Update the project tasks with newTask._id (push to tasks array)


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

export default mongodb(task); 