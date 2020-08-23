import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    textStyle:{
        fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        padding:20,
        justifyContent:"center"
    },
    inputText:{
        height:50,
        color:"white"
      },
    containerStyle:{
        
            flex: 1,
            backgroundColor: '#003f5c',
            alignItems: 'center',
            justifyContent: 'center',
         
    },
    container:{
        
        flex: 1,
        backgroundColor: '#003f5c',
        // alignItems: 'center',
        justifyContent: 'center',
     
},
    listitem:{
        marginTop:20,
        fontSize:30,
        backgroundColor:'#465881',
        padding:20,
        color:"#fb5b5a"
      },
    lgnbutton:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
      },
      button:{
          color:"white",
          fontSize:20,
      },
      add:{
        color:"#003f5c",
        fontSize:20,
    },
      addbutton:{
        width:"50%",
        backgroundColor:"#fb5b5a",
       
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
       
      },
      productStyle:{
        fontWeight:"italic",
    fontSize:30,
    color:"#b1b669",
    fontFamily:'sans-serif-medium'
  
    },
    nameStyle:{
        fontWeight:"bold",
        fontFamily:'my-custom-font',
    fontSize:45,
    color:"#fb5b5a",
    marginBottom:20
  
    }
})