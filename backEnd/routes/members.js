const express = require('express');
const router = express.Router();

const ctrlMember = require('../controllers/member.controller');

// Getting Members
router.get('', ctrlMember.getMemberAll);

// Getting the most recent 3 members
router.get('/getThree', ctrlMember.getThreeMembers);

// Getting Member
router.get('/:email', ctrlMember.getMember);
//router.get('/:id', ctrlMember.getMember);

// Adding Member
router.post('/register', ctrlMember.addMember);

// Editing Member
router.put('/:id', ctrlMember.editMember);

// Deleteing Member
router.delete('/:id', ctrlMember.deleteMember);


module.exports = router;
