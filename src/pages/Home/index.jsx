import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';

export default function Home() { 
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Página Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
