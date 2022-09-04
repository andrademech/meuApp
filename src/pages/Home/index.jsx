import { StyleSheet, View, FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '215,67',
    date: '17/01/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '4.511,67',
    date: '17/03/2022',
    type: 1 // receitas
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.101,67',
    date: '24/03/2022',
    type: 1 // receitas
  }
]

export default function Home() { 
  return (
    <View style={styles.container}>

      <Header name="Herberth Andrade"/>

      <Balance saldo="12.451,23" gastos="-1.247,58"/>

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator = {false}
      renderItem={({item}) => <Movements data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
