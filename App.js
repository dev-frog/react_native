 
import React, { useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [enterGoal, setEnterGoal ] = useState('');
  const [courseGoals, setCourseGoal] =  useState([]);

  

  const addGoalHandler = goalTitle =>{
    // console.log(enterGoal);
    setCourseGoal(currentGoal =>[
      ...currentGoal, 
      { id: Math.random().toString(), value: goalTitle}]);
  }

 

  return (
    <View style={styles.container} >
      {/* form  */}
      <GoalInput onGoalAdd={addGoalHandler} />



      {/* List */}

      <FlatList 
        keyExtractor={(item, index) => index.id }
        style={styles.scrollView} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />


      {/* <ScrollView style={styles.scrollView}>
        {courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal} >{goal}</Text></View>) }
      </ScrollView> */}
{/* 
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 25,
    backgroundColor: '#001219',
    
  },
  scrollView:{
    marginBottom: 30
  },
 
  
});
