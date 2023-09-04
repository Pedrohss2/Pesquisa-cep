export default class Error {
    constructor(msg) {
        this.msg = msg;
    }
    showError() {
        console.log(this.msg)
    }
}
// ....