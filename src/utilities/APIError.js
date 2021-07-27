import { generateError } from './errorConstants';

export class APIError extends Error {
    status;
    message;

    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

export const logError = ({path, dataValue, error,dataKey }) =>
    `Error in endpoint ${path} with ${dataKey} = ${dataValue} error=> ${generateError(error)}`;
