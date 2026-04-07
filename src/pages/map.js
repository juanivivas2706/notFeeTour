import react from "react";
import { View, Text} from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Map({}){
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>MAPA</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}