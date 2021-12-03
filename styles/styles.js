import { StyleSheet,Dimensions} from 'react-native';
const screen = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c7d4d2",
        alignItems: "center",
        justifyContent: "center"
      },
      button: {
        borderWidth: 10,
        borderColor: "#1f385e",
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
      },
      buttonStop: {
        borderColor: "#FF851B"
      },
      buttonText: {
        fontSize: 45,
        color: "#26305c",
        fontFamily: (Platform.OS === 'ios') ? 'MuterKido' : 'MuterKido-jE3Lj',
      },
      buttonTextStop: {
        color: "#FF851B",
        fontFamily: (Platform.OS === 'ios') ? 'MuterKido' : 'MuterKido-jE3Lj',
      },
      timerText: {
        color: "#8c1506",
        fontSize: 90,
        fontFamily: (Platform.OS === 'ios') ? 'Nunito' : 'Nunito-Bold',
      },
      picker: {
        width: (Platform.OS === 'ios') ? 55:100,
        color:'#26305c',
        marginLeft:20,
       
        
      },
      pickerItem: {
        color: '#26305c',
        fontSize: (Platform.OS === 'ios') ? 30:20,
       
       fontFamily: (Platform.OS === 'ios') ? 'Nunito' : 'Nunito-Bold',

      },
      pickerContainer: {
        flexDirection: "row",
        alignItems: "center",
       
      }
})