class User{
    constructor(email, password){
        this._email = email;
        this._password = password;
    }

    get email(){ return this._email }

    get password() { return this._password }

    set email(new_email) { this._email = new_email }

    set password(new_password) { this._password = new_password }

}

module.exports = User;
