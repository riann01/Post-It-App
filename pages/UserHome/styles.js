import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        backgroundColor: '#640AA8',
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
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    title: {
        fontSize: 30,
        textAlign:  "center",
        fontFamily: 'Montserrat-Bold',
        color: '#FFF'
    },
    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32
      },
    item: {
        backgroundColor: '#3CD67F',
        height: 110,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        elevation: 10,
        textAlign: 'center',
    },
    itemTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 17,
        color: '#FFF'
    }
});

export default styles;