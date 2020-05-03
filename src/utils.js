import Logger from './logger';

export function newLog(name) {
    return new Logger(name);
}
