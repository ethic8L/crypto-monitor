import express from 'express';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});