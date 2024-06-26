import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Header({ name, email }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.mail}>{email}</Text>
          </View>
          <Image style={styles.logo} source={require('../assets/profilepic.jpeg')} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={styles.input} placeholder='Search' />
          <Image source={require('../assets/settings-sliders (1).png')} style={styles.filter} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  mail: {
    fontSize: 18,
    color: 'gray',
  },
  filter: {
    width: 45,
    height: 45,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: '#FAFAFA'
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 20,
    borderRadius: 50,
  },
  input: {
    marginTop: 20,
    height: 45,
    borderWidth: 0.3,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    width: 260,
    backgroundColor: '#FAFAFA'
  },
});
