import express from 'express';
import db from '../utils/db';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db('test').select('id').then(function(res2) {
    res.send({admin: 'admin', id: res2});
  });
});

export default router;
