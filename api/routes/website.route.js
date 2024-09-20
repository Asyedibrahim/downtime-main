import express from 'express';
import { addUrl, getUrls, deleteUrl, editUrl, getUrl } from '../controllers/website.controller.js';

const router = express.Router();

router.post('/add', addUrl);
router.get('/checkStatus', getUrls);
router.delete('/delete/:id', deleteUrl);
router.put('/edit/:id', editUrl);
router.get('/get/:id', getUrl);

export default router;