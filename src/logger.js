import chalk from 'chalk';

export default class Logger {
    constructor(name) {
        this.name = name;
        this.name_str = chalk.greenBright(`[${this.name}]`);
    }

    log(str) {
        console.log(`${this.name_str}\t ${str}`);
    }

    subLog(name) {
        return new Logger(`${this.name}->${name}`);
    }
}
