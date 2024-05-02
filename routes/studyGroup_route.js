const {Router} = require('express');
const studyGroupRouter = Router();

const studyGroupController = require('../controllers/studyGroup_controller');

studyGroupRouter.get('/', studyGroupController.getAllstudyGroups);
studyGroupRouter.get('/:id', studyGroupController.getstudyGroupsByID);
studyGroupRouter.post('/', studyGroupController.addstudyGroup);
studyGroupRouter.put('/:id', studyGroupController.editstudyGroupByID);
studyGroupRouter.delete('/:id', studyGroupController.deletestudyGroupByID);

module.exports = {
    studyGroupRouter,
};
