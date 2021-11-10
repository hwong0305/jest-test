import * as express from 'express';
import * as multer from 'multer';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', upload.single('letter'), (req, res) => {
  if (!req?.file) {
    return res.status(400).send('No file uploaded');
  }

  return res.send('done');
});

export default app;
