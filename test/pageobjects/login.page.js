class LoginPage {
    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnLogin() { return $('#login-button') }
    get errorContainer() { return $('.error-message-container.error') }
    get botImg() { return $('.bot_column') }
    get logoHead() { return $('.login_logo') }

    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

module.exports = new LoginPage();