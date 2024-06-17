import { StyleSheet, Text, View, Image, FlatList, ImageBackground } from 'react-native';

export default function PopularJobs() {

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>  

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Popular Jobs</Text>
          <Text style={{ marginRight: 20, fontSize: 15, paddingTop: 3 }}>See all</Text>
        </View>

      </View>

      <FlatList 
            vertical
            data={Popularjobs}
            renderItem={({ item }) => (

                  <View style={styles.contain}>
                  <View>
                    <Image style={styles.image} source={item.image}/>
                    </View>

                    <View>
                        <Text style={styles.postion}>{item.postion}</Text>
                        <Text style={styles.company}>{item.company}</Text>
                    </View>

                    <View>
                    <Text style={styles.salary}>{item.salary}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                    </View>
                  </View>
                    
            )}
        />
    </View>
  );
}

const Popularjobs = [
    {id: 1, image: require('../assets/burger-king.png'), postion: 'Jr Executive', company: 'Burger King', 
      salary: '$96,000/y', location: 'Los Angels, US'},

    {id: 2, image: require('../assets/beats.png'), postion: 'Product Manager', company: 'Amazon', 
        salary: '$86,000/y', location: 'Florida, US'},

    {id: 3, image: require('../assets/facebook.png'), postion: 'Product Manager', company: 'Facebook', 
        salary: '$86,000/y', location: 'Florida, US'},

    {id: 4, image: require('../assets/amazon.png'), postion: 'Sr Executive', company: 'Amazon', 
        salary: '$99,000/y', location: 'Liverpool, UK'},

    {id: 5, image: require('../assets/microsoft.png'), postion: 'DevOps Engineer', company: 'Microsoft', 
        salary: '$96,000/y', location: 'Los Angels, US'},
  
    {id: 6, image: require('../assets/spotify.png'), postion: 'Data Scientist', company: 'Spotify ', 
        salary: '$78,000/y', location: 'Los Angels, US'},
  
    {id: 7, image: require('../assets/tesla.png'), postion: 'Electrical Engineer', company: 'Tesla', 
        salary: '$126,000/y', location: 'Los Angels, US'},
      
    {id: 8, image: require('../assets/uber.png'), postion: 'Marketing Specialist', company: 'Uber', 
        salary: '$102,500/y', location: 'Los Angels, US'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50
  },
  
  image: {
    height: 45,
    width: 45
  },

  contain: {
    padding: 20,
    backgroundColor: 'FAFAFA',
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 15,
    margin: 20
  },

  postion: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20
  },

  salary: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 100
  },

  company: {
    marginLeft: 27
  },

  location: {
    marginLeft: 73
  }
});
