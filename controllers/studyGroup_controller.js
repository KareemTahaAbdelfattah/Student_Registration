const joi = require('joi');
const { studyGroups } = require('../models/studyGroup');
const { validateStudyGroup } = require('../helpers/validation');

const getAllstudyGroups =  (req,res) => {
    res.send(studyGroups);
};

const getstudyGroupsByID =  (req,res) => {
    const studyGroup = studyGroups.find(c => c.id == parseInt(req.params.id));
    if(!studyGroup){
        res.status(404).send('The studyGroup with the given ID not found !');
    }else{
        res.send(studyGroup);
    }
};

const addstudyGroup = (req,res) => {

    const result = validateStudyGroup(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    const studyGroup = {
        id: studyGroups.length + 1,
        name: req.body.name
    };

    studyGroups.push(studyGroup);
    res.send(studyGroup);

};

const editstudyGroupByID = (req,res) => {

    const studyGroup = studyGroups.find(c => c.id == parseInt(req.params.id));
    if(!studyGroup) res.status(404).send('The studyGroup with the given ID not found !');

    const result = validateStudyGroup(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    studyGroup.name = req.body.name;
    res.send(studyGroup);

};

const deletestudyGroupByID = (req,res) => {
    const studyGroup = studyGroups.find(c => c.id == parseInt(req.params.id));
    if(!image) res.status(404).send('The studyGroup with the given ID not found !');

    const index = studyGroups.indexOf(studyGroup);
    studyGroups.splice(index, 1);

    res.send(studyGroup);
};


module.exports = {
    getAllstudyGroups,
    getstudyGroupsByID,
    addstudyGroup,
    editstudyGroupByID,
    deletestudyGroupByID,
};
