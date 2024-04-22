import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SuppliersContext from '../context/SupliersContext';

export default ({route, navigation}) => {
    const [suppliers, setSuppliers] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(SuppliersContext)

    return(
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
            style={style.input}
                onChangeText={name => setSuppliers({...suppliers, name})}
                placeholder="Informe o Fornecedor"
                value={suppliers.name}
            />
            <Text>Email</Text>
            <TextInput
            style={style.input}
                onChangeText={email => setSuppliers({...suppliers, email})}
                placeholder="Informe o e-mail do fornecedor"
                value={suppliers.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatarUrl => setSuppliers({...suppliers, avatarUrl})}
                placeholder="Link da Imagem"
                value={suppliers.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: suppliers.id ? 'updateSupplier' : 'createSupplier',
                        payload: suppliers,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})