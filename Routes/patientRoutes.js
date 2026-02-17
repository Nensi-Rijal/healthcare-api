const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let patient = [];

router.post('/', (req,res) => {
    const newPatient = {
        id: uuidv4(),
        ...req.body
    };
    patient.push(newPatient);
    res.status(201).json(newPatient);
});

router.get('/:id', (req, res)=>{
    const patient = patient.find(p => p.id === req.params.id);

    if(!patient){
        return res.status(404).json({mesage: "Patient not found"});
    }

    res.json(patient);
});

router.put('/:id', (req, res)=>{
    const index = patient.findIndex(p=> p.id === req.params.id);

    if(index === -1){
        return res.status(404).json({message: 'Patient not found'});
    }

    patient[index] = {
        ...patient[index],
        ...req.body
    };

    res.json(patients[index]);
});

router.delete('/:id', (req, res)=>{
    const index = patient.findIndex(p=> p.id === req.params.id);

    if(index === -1){
        return res.status(404).json({message: 'Patient not found'});
    }

    const deletedPatient = patients.splice(index,1);
    res.json({message: 'Patient deleted', deletedPatient});
});

module.exports = router;