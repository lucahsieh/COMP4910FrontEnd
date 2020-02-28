export class Alert {
    constructor(type: string, time: number, msg: string) {
        this.type = type;
        this.timeout = time;
        this.msg = msg;
    }
    type: string;
    msg: string;
    timeout: number;
}