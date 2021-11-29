class InvalidCredentials extends Error {
    constructor() {
        super();
        this.message = 'Invalid e-mail or password.';
        this.status = 400;
    }
}

export default InvalidCredentials;