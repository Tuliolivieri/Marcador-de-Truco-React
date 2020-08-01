import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Marcador from './pages/Marcador';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Marcador de Truco'
            }
        },
        Marcador: {
            screen: Marcador,
            navigationOptions: {
                title: 'Marcador'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: '#5207F2',
            },
            headerTintColor: '#D7F205',
            headerBackTitleVisible: false,
        },
    })
);

export default Routes;