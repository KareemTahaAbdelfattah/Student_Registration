const {Router} = require('express');
const studyGroupRouter = Router();

const studyGroupController = require('../controllers/study_group_controller');

studyGroupRouter.get('/', studyGroupController.getAllstudyGroups);
studyGroupRouter.get('/:id', studyGroupController.getstudyGroupsById);
studyGroupRouter.post('/', studyGroupController.addstudyGroup);
studyGroupRouter.put('/:id', studyGroupController.editstudyGroup);
studyGroupRouter.delete('/:id', studyGroupController.deletestudyGroupbyID);

module.exports = {
    studyGroupRouter,
};
