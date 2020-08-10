import auth from '@react-native-firebase/auth';

const register = (name, email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            return `Parabéns, ${name.split()[0]}! Agora você faz parte do time.`;
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                return "Hmmm... Parece que esse e-mail já se encontra em uso :/";
            }

            if (error.code === 'auth/invalid-email') {
                return "Hmmm... Parece que esse e-mail é inválido :/";
            }

            console.error(error);
        }
    );
    auth().currentUser.updateProfile({
        displayName: name
    });
}

export default register;