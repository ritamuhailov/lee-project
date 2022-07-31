import mongodb from '../../../middleware/mongodb';
import Project from '../../../models/project';

const project = async (req, res) => {
    const { method } = req;

    //Create project 
    if (method === "POST") {
        try {
            const project = new Project(req.body);
            const newProject = await project.save();
            res.status(200).json({ data: newProject, message: 'Project added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    };
}

export default mongodb(project);