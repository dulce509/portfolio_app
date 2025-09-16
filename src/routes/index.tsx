
import { NavigationContainer } from '@react-navigation/native';
import{BottomTabsRoutes} from './Botom_tabs.routes'
export function Routes(){
    return(
    <NavigationContainer>
        <BottomTabsRoutes></BottomTabsRoutes>
    </NavigationContainer>
    )
}