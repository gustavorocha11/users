import app from "./app";

import router from './routes/router';

const PORT = 3000;

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`API REST running in port ${PORT}`);
})