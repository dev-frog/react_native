import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput, Button} from 'react-native' 


const GoalInput = props => {
    const [enterGoal, setEnterGoal ] = useState('');
    
    
    const goalInputHandler = (enterText) =>{
        setEnterGoal(enterText);
    }
    

    return (
    <View style={styles.fistSection}>
        <TextInput style={styles.input} 
            autoFocus 
            placeholder="Enter Movie Name" 
            placeholderTextColor="#fff" 
            onChangeText={goalInputHandler} 
            value={enterGoal} 
        />
        <Button  title="Add" style={styles.button} onPress={props.onGoalAdd.bind(this, enterGoal) } />
      </View>
    )
}

const styles = StyleSheet.create({
    fistSection:{
        paddingTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input:{
        padding: 10,
        borderWidth: 1,
        fontSize: 20,
        borderColor: '#005f73',
        color: '#fff',
        width: "80%",
      },
      button: {
        fontSize: 20,
        color: '#fff',
        backgroundColor:'#0a9396'
      },
})



export default GoalInput
