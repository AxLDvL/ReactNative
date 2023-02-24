import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
input:{
    marginRight:3,
    paddingHorizontal: 8,
    borderWidth: 3,
    borderColor: '#20232a',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
},
inputGoal:{
    marginVertical: 20,
    flexDirection:'row',
    justifyContent: 'center',
},
button: {
    marginHorizontal:6,
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
    justifyContent: 'center',

},
flatlist:{
    flexDirection:'row',
    justifyContent: 'center'
}

});

export default styles;