import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';

async function bootstrap() {
    const connection = await createConnection(ormconfig);
    return connection;
}

export default bootstrap;
