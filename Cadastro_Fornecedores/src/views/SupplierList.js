import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import SuppliersContext from '../context/SupliersContext';

export default props =>{

    const { state, dispatch } = useContext(SuppliersContext)

    function confirmSupplierDelet(suppliers) {
        Alert.alert('Excluir Fornecedor', 'Deseja excluir este fornecedor?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteSupplier',
                        payload: suppliers, 
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getAction(suppliers) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('SupplierForm', suppliers)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmSupplierDelet(suppliers)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getSuppliersItem({ item: suppliers}) {
        return (
            <ListItem
                leftAvatar={{source: {uri: suppliers.avatarUrl}}}
                key={suppliers.id}
                tittle={suppliers.name}
                subtitle={suppliers.email}
                bottomDivider
                rightElement={getActions(suppliers)}
                onPress={() => props.navigation.navigate('SupplierForm')}
            />
        )
    }
    
    return(
        <View>
            <FlatList
                keyExtractor={suppliers => suppliers.id.toString()}
                data={state.suppliers}
                renderItem={getSuppliersItem}
            />
        </View>
    )
}