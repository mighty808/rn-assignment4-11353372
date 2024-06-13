import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';

export default function Header() {

  return (
    <View style={styles.container}>
      <View style={{marginLeft: 30,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,}}>

        <View>
        <Text style={styles.Effah}>Effah Andy</Text>
        <Text style={styles.mail}>effah@gmail.com</Text>
        </View>
          
          <Image style={styles.logo} source={require('../assets/profilepic.jpeg')} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput style={styles.input} placeholder='Search'/>
        <Image source={require('../assets/filter (1).png')} style={styles.filter}/>
      </View>
        

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Featured Jobs</Text>
      <Text style={{marginRight: 20}}>See all </Text>
      </View>
        

      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
      </View>
    )}
  />
      </View>
    </View>
  );
}


const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('../assets/facebook.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('../assets/google.png') }, 
  { id: '3', name: 'Exercise', tasks: 12, image: require('../assets/facebook.png') },
  { id: '4', name: 'Study', tasks: 12, image: require('../assets/google.png') }, 
  { id: '5', name: 'Exercise', tasks: 12, image: require('../assets/facebook.png') },
  { id: '6', name: 'Study', tasks: 12, image: require('../assets/google.png') }, 
  { id: '7', name: 'Exercise', tasks: 12, image: require('../assets/facebook.png') },
  { id: '8', name: 'Study', tasks: 12, image: require('../assets/google.png') }, 
];
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  Effah: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  filter : {
    width: 50,
    height: 50,
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

  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: 300,
    backgroundColor: 'cream',
    borderRadius: 10,
    padding: 25,
    marginBottom: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#777',
  },
});