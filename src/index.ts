import { register as registerUser } from './service/user.service';
// import { connectToMongoDb } from './util/db-connection';

async function main() {
    console.log('App is working!');

    // await connectToMongoDb();

    await registerUser();
}

main().catch((err) => console.log(err));
