import 'chalk';
import FileLogger from './FileLogger';

export default class TeraLog {
    static newLog(name) {
        return new FileLogger(name);
    }
}
