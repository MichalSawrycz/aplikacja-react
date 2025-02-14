import GoalsImage from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
const [goals, setGoals] = useState<CourseGoal[]>([]);

function handleAddGoal(goal: string, summary: string) {
setGoals(prevGoals => {
 const newGoal: CourseGoal = {
  title: goal,
  description: summary,
  id: Math.random()
 }
  return [...prevGoals, newGoal]
});
}

function handleDeleteGoal(id: number) {
  setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header src={GoalsImage} alt="Example image">
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}/>
    </main>
  )
}
