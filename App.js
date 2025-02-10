import { StatusBar } from "expo-status-bar";
import MainScreen from "./screens/MainScreen";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <StatusBar style="light" />
      <MainScreen counter={count} onIncrement={()=> setCount(count +1)} onDecrement={()=> setCount(count -1)} 
      onReset={()=> setCount(0)} />
    </>
  );
}
