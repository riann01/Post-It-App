import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        backgroundColor: '#640AA8'
    },
    safeArea: {
        flex: 1,
        paddingTop: 40,
        padding: 20,
    },
    title: {
        fontSize: 30,
        textAlign:  "center",
        fontFamily: 'Montserrat-Bold',
        color: '#FFF'
    },
    label: {
        marginTop: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#FFF'
    },
    input: {
        marginTop: 15,
        borderWidth: 2,
        borderRadius: 7,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        paddingLeft: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderColor: '#FFF',
        color: '#FFF'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    buttonContent: {
        width: '100%',
        height: 60,
        /*backgroundColor: '#3EE084',*/
        backgroundColor: '#3CD67F',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        flexDirection: 'row'
    },
    buttonIcon: {
        width: '15%',
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
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-SemiBold'
    },
    textNew: {
        marginTop: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,
        textAlign: 'center',
        color: '#FFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginRight: 30
    }
});

export default styles;