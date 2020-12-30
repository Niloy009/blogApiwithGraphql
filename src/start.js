import { app, server } from './server';
import { say } from 'cowsay';
import mongoose from 'mongoose';

/**
 * Make sure we are running node 7.6+
 */
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou're on an older version of node that doesn't support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n "
  );
  process.exit();
}

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise; //Tell Mongoose to use ES6 Promises

mongoose.connection.on('connected', (err) => {
  console.log('Database Connected');
});

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

/**
 *  READY?! Let's go! 👌
 */
// Start our app!
let port = process.env.PORT || 4000;
//let appUrl = process.env.APP_URL;
app.listen({ port }, () => {
  console.log(
    say({
      text: `server working on http://localhost:${port}${server.graphqlPath}`
    })
  );
});
