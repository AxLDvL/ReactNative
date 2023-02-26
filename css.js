import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input:{
        minWidth:250,

        paddingHorizontal: 8,
        borderWidth: 3,
        borderColor: 'dimgray',
        borderRadius: 6,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    inputGoal:{
        marginVertical: 20,
        flexDirection:'row',
        justifyContent: 'center',
    },
    button: {
        marginLeft:5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'steelblue',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    goalList:{

    },
    flatlist:{
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 2,
        flex:1,
        marginHorizontal:40,
        marginVertical: 5,
        paddingHorizontal:15,
        paddingVertical: 5,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    image:{
        flex:1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    modalView:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    modalText:{
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
);

export default styles;