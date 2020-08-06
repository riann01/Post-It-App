export function sessionInfo(sessionDetails) {
    return {
        type: 'ADD_SESSION_DETAILS',
        authState: sessionDetails.authState,
        user: sessionDetails.user
    }
}