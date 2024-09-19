import express from 'express';
import { addUrl, getUrls } from '../controllers/website.controller.js';

const router = express.Router();

router.post('/add', addUrl);
router.get('/checkStatus', getUrls);

export default router;