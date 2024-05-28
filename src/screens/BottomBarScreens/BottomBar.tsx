import React from "react";

//PACKAGES
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//COMPONENTS
import { Tabbar } from "../../components";

//SCREENS
import Aide from "./Aide";
import Compte from "./Compte";
import Candidatures from "./Candidatures";
import Missions from "./Missions";
import Mymissions from "../Mymissions";

//SCREENS

const Tab = createBottomTabNavigator();

function BottomBar(props: any) {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={props => (
                <Tabbar {...props} />
            )}>
            <Tab.Screen name={'Compte'} component={Compte} />
            <Tab.Screen name={'Candidatures'} component={Candidatures} />
            <Tab.Screen name={'Missions'} component={Mymissions} />
            <Tab.Screen name={'Aide'} component={Aide} />
        </Tab.Navigator>
    )
}

export default BottomBar