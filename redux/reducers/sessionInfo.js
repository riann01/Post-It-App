const INITIAL_STATE = {
    authState: ''
};

export default function sessionInfo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_SESSION_DETAILS':
            return {
                authState: action.sessionState,
                user: action.user
            }
        default:
            return state;
    }
}