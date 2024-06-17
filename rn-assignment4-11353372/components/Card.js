import { StyleSheet, Text, View, Image, FlatList, ImageBackground } from 'react-native';

export default function Card() {

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>  

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Featured Jobs</Text>
          <Text style={{ marginRight: 20, fontSize: 15, paddingTop: 3 }}>See all</Text>
        </View>

        <FlatList
          horizontal
          data={jobs}
          renderItem={({ item }) => (
            <ImageBackground 
              source={require('../assets/logo (2).png')} 
              style={[styles.card, { backgroundColor: item.backgroundColor }]}
              imageStyle={{ borderRadius: 20 }}
            >

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 50, marginBottom: 30 }}>
                <Image style={styles.image} source={item.image} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={styles.salary}>{item.salary}</Text>
                </View>
                <View>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>

            </ImageBackground>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  );
}

const jobs = [
  { id: 1, image: require('../assets/facebook.png'), title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', backgroundColor: '#5386E4' },

  { id: 2, image: require('../assets/google.png'), title: 'Data Analyst', company: 'Google', salary: '$200,000', location: 'Accra, Ghana', backgroundColor: '#FF6347' },

  { id: 3, image: require('../assets/amazon.png'), title: 'DevOps Engineer', company: 'Amazon', salary: '$220,000', location: 'Accra, Ghana', backgroundColor: '#32CD32' },

  { id: 4, image: require('../assets/microsoft.png'), title: 'Software Engineer', company: 'Microsoft', salary: '$210,000', location: 'Accra, Ghana', backgroundColor: '#8A2BE2' },

  { id: 5, image: require('../assets/airbnb.png'), title: 'Product Manager', company: 'Airbnb', salary: '$190,000', location: 'Accra, Ghana', backgroundColor: '#FF4500' },

  { id: 6, image: require('../assets/uber.png'), title: 'Data Scientist', company: 'Uber', salary: '$200,000', location: 'Accra, Ghana', backgroundColor: '#FFD700' },

  { id: 7, image: require('../assets/netflix.png'), title: 'DevOps Engineer', company: 'Netflix', salary: '$210,000', location: 'Accra, Ghana', backgroundColor: '#6A5ACD' },

  { id: 8, image: require('../assets/spotify.png'), title: 'UI/UX Designer', company: 'Spotify', salary: '$180,000', location: 'Accra, Ghana', backgroundColor: '#20B2AA' },

  { id: 9, image: require('../assets/tesla.png'), title: 'Electrical Engineer', company: 'Tesla', salary: '$220,000', location: 'Accra, Ghana', backgroundColor: '#FF69B4' },
  
  { id: 10, image: require('../assets/twitter.png'), title: 'Marketing Specialist', company: 'Twitter', salary: '$160,000', location: 'Accra, Ghana', backgroundColor: '#1E90FF' },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 40,
    borderRadius: 20,
    marginRight: 15,
    width: 290,
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  company: {
    fontSize: 14,
    color: '#7a7a7a',
    flexDirection: 'column',
    color: '#fff',
  },
  salary: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 20,
  },
  location: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 110,
  },
});
