type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, seu e-mail é ${user.email}. Sua cidade é ${user.address.city} e o seu estado é ${user.address.state}`;
}

const user = {
    name: 'João Pedro',
    email: 'joaopedro@datac.com.br',
    address: {
        city: 'Piraúba',
        state: 'MG',
    }
}

const message = showWelcomeMessage(user)