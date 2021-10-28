import "dotenv/config";
import createServer from "./server";

const startServer = () => {
    const app = createServer();
    const port = process.env.PORT || 5500;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer();