
const port = process.env.PORT;
import app from './app.js';

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
