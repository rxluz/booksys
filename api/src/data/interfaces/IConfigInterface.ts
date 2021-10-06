export interface IConfigInterface {
    api: {
        port: number;
    };
    db: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
    event: {
        startHour: string;
        endHour: string;
    };
}
