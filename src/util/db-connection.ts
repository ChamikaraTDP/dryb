import { connection, connect } from 'mongoose';

export async function connectToMongoDb() {
    // on function not identified
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (connection as any).on('connected', () => console.log('connected to mongodb!'));

    await connect('mongodb://dryb-mongo:27017', {
        dbName: 'dryb',
        auth: { username: 'root', password: 'Black@521' },
        // unnecessary require
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
}
