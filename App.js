import { StatusBar, View} from 'react-native';
import { useState} from "react";
import styles from "./css";
import GoalList from "./Goallist";
import InputGoal from "./InputGoal";

export default function App() {
const [Goals, setGoals] = useState([])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputGoal
          Goals = {Goals}
          setGoals={setGoals}/>
      <GoalList
          Goals = {Goals}
          setGoals={setGoals}/>
    </View>
  );
}


