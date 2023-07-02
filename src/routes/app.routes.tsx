import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyTasks } from "../screens/myTasks";
import { NewTask } from "../screens/newTask";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="myTasks" component={MyTasks} />
      <Screen name="newTask" component={NewTask} />
    </Navigator>
  );
}
