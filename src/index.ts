import { addProperty, findProperties } from './service/property.service';
import { register as registerUser, login as userLogin } from './service/user.service';
import { connectToMongoDb } from './util/db-connection';
import readline from 'node:readline/promises';

async function channel() {
    console.log('Welcome to dryb. One choice for every stay');

    let icontinue = true;

    while (icontinue) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const choice = await rl.question(`Please select your choice, type in the letter and hit enter
    R: Register
    L: Login
    A: Add Property
    V: View Properties
    E: exit
`);
        rl.close();
        
        switch (choice) {
            case 'R': 
            case 'r':
                await registerUser();
                break;
            case 'L':
            case 'l': 
                await userLogin();
                break;
            case 'A':
            case 'a': 
                await addProperty();
                break;
            case 'V':
            case 'v': 
                await findProperties();
                break;
            case 'E':
            case 'e': 
                icontinue = false;
                break;
            default: 
                console.log('Input not recognized. exiting!');
                icontinue = false;
                break;
        }
    }
}

async function main() {
    console.log('App is working!');

    await connectToMongoDb();

    await channel();
}

main().catch((err) => console.log(err));
