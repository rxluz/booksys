export interface ICompanyHttpResponse {
    name: string;
    event: {
        name: string;
        address: string;
        date: string;
        lat: number;
        lng: number;
    };
    domains: string[];
    /**
     * [hour]: maxSeats[]
     * example: { '08:00': [ 10, 20 ], '09:00': [ 10 ] }
     */
    availability: { [key: string]: number[] };
}