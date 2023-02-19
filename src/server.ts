import * as config from './config'
import app from './app';

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});

process.on("uncaughtException", function(err) {
    console.error(err);
    process.exit(); // exit the process to avoid unknown state
});
