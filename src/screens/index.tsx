import BottomBar from "./BottomBarScreens/BottomBar";
import ForgotPassword from "./ForgotPassword";
import Declareacourse from "./Declareacourse";
import Login from "./Login";
import Mymissions from "./Mymissions";
import Splash from "./Splash";
import Welcome from "./Welcome";
import MissionsAvailable from "./MissionsAvailable";

export const SCREENS = {
    Splash: {
        identifier: 'Splash',
        component: Splash
    },
    Welcome: {
        identifier: 'Welcome',
        component: Welcome
    },
    Login: {
        identifier: 'Login',
        component: Login
    },
    ForgotPassword: {
        identifier: 'ForgotPassword',
        component: ForgotPassword
    },
    BottomBar: {
        identifier: 'BottomBar',
        component: BottomBar
    },
    Declareacourse: {
        identifier: 'Declareacourse',
        component: Declareacourse
    },
    Mymissions: {
        identifier: 'Mymissions',
        component: Mymissions
    },
    MissionsAvailable: {
        identifier: 'MissionsAvailable',
        component: MissionsAvailable
    }
}