import App from 'next/app';
import mongodb from '../../../middleware/mongodb';
import Project from '../../../models/project';
import task from '../task';

const project = async (req, res) => {
    const { method } = req;

    //Create project 
    if (method === "POST") {
        try {
            const project = new Project(req.body);
            const newProject = await project.save();
            console.log("newProject", newProject);
            res.status(200).json({ data: newProject, message: 'Project added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    };

    // if (method === "GET") {
    //     try {
    //         const project = await Project.find().populate(task);
    //         res.status(200).json({ data: project })
    //     } catch (error) {
    //         res.status(500).json({ message: 'Internal Server Error' });
    //         console.log(error);
    //     }
    // } 

    // App.get("/project/:projectId", async (req, res) => {
    //     const { projectId } = req.params;
    //     try {
    //         const retrievedTask = await project.findById(productId).populate("_id");
    //         res.send(retrievedTask);
    //     } catch (e) {
    //         res.send(e);
    //     }
    // });
}

export default mongodb(project);