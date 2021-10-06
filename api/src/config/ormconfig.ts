import { ConnectionOptions } from 'typeorm';
import path from 'path';

import config from './index';

const ormconfig: ConnectionOptions = {
    type: 'mysql',
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: [ path.resolve(__dirname, '../booking/data/models/**{.ts,.js}') ],
}

export default ormconfig;