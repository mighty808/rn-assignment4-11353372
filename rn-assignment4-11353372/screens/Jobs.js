import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import PopularJobs from '../components/PopularJobs';


function JobsScreen({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Header name={name} email={email} />
      <Card />
      <PopularJobs />
    </View>
  );
}

export default JobsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
