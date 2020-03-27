import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TextInput
         placeholder="Course Goal"
         onChangeText={goalInputHandler}
         style={styles.input}
         value={enteredGoal}/>
        <Button 
         title="Add"
         onPress={addGoalHandler}/>
      </View>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.goal}>
            <Text>{itemData.item}</Text>
          </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#30336b',
    // backgroundColor: 'black',
    color: 'white',
    height: '100%',
    padding: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    padding: 10
  },
  goal: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#95a5a6',
    borderColor: 'black',
    borderWidth: 1
  }
});

