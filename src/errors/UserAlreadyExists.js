class UserAlreadyExists extends Error {
    constructor() {
        super();
        this.message = 'E-mail already registered.';
        this.status = 400;
    }
}

export default UserAlreadyExists;