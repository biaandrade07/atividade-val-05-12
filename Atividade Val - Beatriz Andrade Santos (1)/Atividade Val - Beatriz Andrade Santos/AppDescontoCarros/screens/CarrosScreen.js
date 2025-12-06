import { View, Text, Image, FlatList } from 'react-native';

const carros = [
  {
    id: '1',
    marca: 'Porsche',
    modelo: 'GT3 RS',
    ano: 2020,
    cor: 'Prata',
    imagem: 'https://cdn.pixabay.com/photo/2018/09/11/13/41/porsche-3669551_1280.jpg'
  },
  {
    id: '2',
    marca: 'McLaren',
    modelo: 'Artura',
    ano: 2025,
    cor: 'Branco',
    imagem: 'https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024_1280.jpg'
  },
  {
    id: '3',
    marca: 'Lamborghini',
    modelo: 'Huracan',
    ano: 2021,
    cor: 'Amarelo',
    imagem: 'https://cdn.pixabay.com/photo/2020/02/03/10/07/lamborghini-4815249_1280.jpg'
  },
  {
    id: '4',
    marca: 'Koenigsegg',
    modelo: 'Agera R',
    ano: 2018,
    cor: 'Branca',
    imagem: 'https://cdn.pixabay.com/photo/2014/09/07/22/32/koenigsegg-438460_1280.jpg'
  },
  {
    id: '5',
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2020,
    cor: 'Branca',
    imagem: 'https://cdn.pixabay.com/photo/2019/10/21/06/36/supra-4565272_1280.jpg'
  }
];

export default function CarrosScreen() {
  return (
    <FlatList
      data={carros}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10
        }}>
          <Image
            source={{ uri: item.imagem }}
            style={{ width: '100%', height: 150, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 18, marginTop: 5 }}>
            {item.marca} {item.modelo}
          </Text>
          <Text>Ano: {item.ano}</Text>
          <Text>Cor: {item.cor}</Text>
        </View>
      )}
    />
  );
}
