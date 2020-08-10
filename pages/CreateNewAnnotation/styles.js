import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1
    },
    safeArea: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        textAlign:  "center",
        fontFamily: 'Montserrat-Bold',
        color: '#FFF'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginRight: 25
    },
    icon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    colorPicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        marginVertical: 25,
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
    },
    colorContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30
    },
    colorBlock: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 2
    },
    colorName: {
        marginTop: 7,
        fontFamily: "Montserrat-SemiBold",
        color: "#FFF"
    }
});

export default styles;