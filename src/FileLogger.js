class FileLogger {
    constructor(name) {
        this.name = name;
    }

    log(string) {
        const out = `[${this.name}] ${string}`;
        console.log(out);
        return out;
    }
}

module.exports = FileLogger;
