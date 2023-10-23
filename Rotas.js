import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { ListarProdutos } from "./src/Componentes/ListarAtividades"
import { BotaoProduto } from "./src/Componentes/BotaoProduto"
import { CardProduto } from "./src/Componentes/CardAtividades"
import { ManterProdutos } from "./src/Componentes/ManterAtividades"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='BotaoProduto' component={BotaoProduto} options={{ headerShown: false }} />
                <Stack.Screen name='CardProduto' component={CardProduto} options={{ headerShown: false }} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ headerShown: false }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}