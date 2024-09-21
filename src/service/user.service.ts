import readline from 'node:readline/promises';
import { createUser, findUser } from '../api/user.api';
import { IUser, User } from '../lib/model/user.model';
import { HydratedDocument } from 'mongoose';

export let activeUser: HydratedDocument<IUser> | null;

export function setActiveUser(user: HydratedDocument<IUser>) {
    activeUser = user;
}

export function getActiveUser() {
    return activeUser;
}

export async function reloadActiveUser() {
    if (activeUser) activeUser = await User.findById(activeUser.id);
}

export async function register() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const user: IUser = { name: '', address: '', tel: '', property_ids: [] };

    user.name = await rl.question(`What's your name?`);
    user.address = await rl.question(`What's your address?`);
    user.tel = await rl.question(`What's your telephone number?`);

    rl.close();

    const oldUser = await findUser(user.name);

    if (oldUser) {
        console.log('User already exists!');
        return;
    }

    await createUser(user);

    console.log(`Hi ${user.name}, you're registered!`);
}

export async function login() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const name = await rl.question('Please enter your name');

    rl.close();

    const oldUser = await findUser(name);

    if (oldUser) {
        setActiveUser(oldUser);
        console.log(`Loged in successfully!`);
    } else {
        console.log('Login failed! Please re-check');
    }
}
