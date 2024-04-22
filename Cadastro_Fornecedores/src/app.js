import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SupplierList from './views/SupplierList'
import SupplierForm from './views/SupplierForm'
import { Button, Icon} from 'react-native-elements'
import { SuppliersProvider } from './context/SupliersContext'


const Stack = createStackNavigator()

export default props =>{
    return(
        <SuppliersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="SupplierList"
                    screenOprions={screenOptions}>
                    <Stack.Screen
                        name="SupplierList"
                        component={SupplierList}
                        options={({ navigation}) => {
                            return {
                                title: "Fornecedores",
                                headerRight: () => (
                                    <Button
                                        onPress={() => NavigationRouteContext.navigate('SupplierForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="SupplierForm"
                        component={SupplierForm}    
                        options={{
                            title: "Cadastro de fornecedores"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SuppliersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}