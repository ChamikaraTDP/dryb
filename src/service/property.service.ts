import readline from 'node:readline/promises';
import { IProperty, Property } from '../lib/model/property.model';
import { createProperty } from '../api/property.api';
import { getActiveUser, reloadActiveUser } from './user.service';

async function create() {
    const activeUser = getActiveUser();

    if (!activeUser) {
        console.log('You must log in before creating properties!');
        return;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const item: IProperty = {
        name: '',
        type: 'S',
        price: 0,
        is_available: true,
        bookings: [],
    };

    item.name = await rl.question(`Property name?`);
    item.price = Number(await rl.question(`Price?`));

    rl.close();

    const property = await createProperty(item);

    activeUser.property_ids.push(property.id);
    await activeUser.save();
    await reloadActiveUser();

    console.log(`Property ${item.name} added!`);
}

export async function find() {
    const activeUser = getActiveUser();

    if (!activeUser) {
        console.log('You must log in before searching properties!');
        return;
    }

    const items = await Property.find()
        .where('_id')
        .in(activeUser.property_ids);

    console.log(items);

    return items;
}


function viewUpcomingBookings(params:type) {
  
}

function viewAllAvailable(params:type) {
    
}


export { create as addProperty, find as findProperties };
