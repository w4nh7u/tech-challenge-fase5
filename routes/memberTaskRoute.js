import express from 'express';
import {
  getGroupByMember
} from '../controllers/memberTaskController.js';

const router = express.Router();

router.get('/', getGroupByMember);

export default router;