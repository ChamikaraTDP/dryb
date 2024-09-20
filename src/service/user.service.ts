import readline from 'node:readline/promises';
// import {  findUser } from '../api/user.api';

export async function register() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // next steps will assign user details
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = {} as any;

    user.name = await rl.question(`What's your name?`);
    user.address = await rl.question(`What's your address?`);
    user.tel = await rl.question(`What's your telephone number?`);

    rl.close();

    // const oldUser = await findUser(user.name);

    // if (oldUser) {
    //     console.log("User already exists!");
    //     return;
    // }

    // await createUser(user);

    console.log(`Hi ${user.name}, you're registered!`);
}

export async function login({ name }: { name: string }) {


    console.log(`user: ${name} loged in!`);
}
