import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        backgroundColor: '#640AA8',
        padding: 30
    },
    appName: {
        textAlign: 'left',
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 45,
        textShadowColor: 'rgba(0, 0, 0, 0.85)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    title: {
        textAlign: 'left',
        marginTop: '55%',
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 45,
        marginBottom: '50%',
        textShadowColor: 'rgba(0, 0, 0, 0.85)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    button: {
        width: '100%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    buttonIcon: {
        width: '20%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContent: {
        width: '80%',
        height: 60,
        /*backgroundColor: '#38065E',*/
        backgroundColor: '#3CD67F',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-SemiBold'
    }
});

export default styles;