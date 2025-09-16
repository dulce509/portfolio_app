import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainScreen } from "../screen/mainScreen";
import { SkillScreen } from "../screen/skillscreen"; 


const Tab = createBottomTabNavigator()

export function BottomTabsRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name= 'MainScreen' 
            component= {MainScreen }
                           
             ></Tab.Screen>
            <Tab.Screen name= 'SkillScreen'
             component= {SkillScreen}
                         
            ></Tab.Screen>
        </Tab.Navigator>
    )
}