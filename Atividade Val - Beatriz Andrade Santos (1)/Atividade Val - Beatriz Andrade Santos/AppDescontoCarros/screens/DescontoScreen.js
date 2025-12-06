import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function DescontoScreen() {
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [valorDesconto, setValorDesconto] = useState(null);
  const [precoFinal, setPrecoFinal] = useState(null);

  function calcular() {
    const p = parseFloat(preco);
    const d = parseFloat(desconto);

    const desc = (p * d) / 100;
    const final = p - desc;

    setValorDesconto(desc.toFixed(2));
    setPrecoFinal(final.toFixed(2));
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Preço original:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <Text>Percentual de desconto (%):</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        value={desconto}
        onChangeText={setDesconto}
      />

      <Button title="Calcular" onPress={calcular} />

      {valorDesconto && (
        <View style={{ marginTop: 20 }}>
          <Text>Desconto: R$ {valorDesconto}</Text>
          <Text>Preço final: R$ {precoFinal}</Text>
        </View>
      )}
    </View>
  );
}
