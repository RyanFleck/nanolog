import chalk from 'chalk';

export default class Logger {
    constructor(name) {
        const name_color = chalk.greenBright;
        const arrow_color = chalk.blueBright;
        const bracket_color = chalk.blueBright;

        this.name = name;
        let name_list = name
            .split('->')
            .map((x) => name_color(x))
            .join(arrow_color('->'));
        this.name_str = `${bracket_color('[ ')}${name_list}${bracket_color(' ]')}`;
    }

    log(str) {
        const msg = `${this.name_str}  ${str}`;
        if (Logger._to_console) console.log(msg);
        if (Logger._to_file) writeToFile(msg);
    }

    _writeToFile(msg) {
        throw 'UNIMPLEMENTED!';
    }

    subLog(name) {
        return new Logger(`${this.name}->${name}`);
    }
}

// Default static properties.
Logger._file = '';
Logger._to_file = false;
Logger._to_console = true;
