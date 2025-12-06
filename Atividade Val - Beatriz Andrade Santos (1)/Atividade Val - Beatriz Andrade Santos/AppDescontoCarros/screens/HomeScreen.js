import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Cálculo de Desconto" onPress={() => navigation.navigate('Desconto')} />
      <View style={{ height: 20 }} />
      <Button title="Listagem de Carros" onPress={() => navigation.navigate('Carros')} />
    </View>
  );
}
