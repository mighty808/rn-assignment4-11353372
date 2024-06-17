import Card from '../components/Card';
import Header from '../components/Header';
import { StyleSheet, Text, View } from 'react-native';
import PopularJobs from '../components/PopularJobs';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <PopularJobs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
