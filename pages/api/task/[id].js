import Task from '../../../models/task'
import mongodb from '../../../middleware/mongodb'

const projectById = async (req, res) => {
    const { method } = req;
    const { id } = req.query;

    //Update task by id
    if (method === "PUT") {
        try {
            const result = await Task.findByIDAndUpdate(id, { $set: req.body }, { new: true });
            res.status(200).json({ data: result, message: "Task Updated Successfully" })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    };

    // Delete task by id 
    if (method === "DELETE") {
        try {
            await Task.findByIdDelete(id);
            res.status(200).json({ message: "Task Deleted Successfully" });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(error);
        }
    }
};

export default mongodb(projectById);