import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text2}> nav bar </Text>
        
        </View>
        <View style={styles.container3}>
        <Text style={styles.text3}> Video </Text>
        
        </View>
        <View style={styles.container4}>
        <Text style={styles.text4}> Section 2 </Text>
        
        </View>
        <View style={styles.container5}>
        <Text style={styles.text5}> Bottom </Text>
        
        </View>
      <StatusBar style="auto" />
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 0.5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%",
    height: "50%",
  },
  text2: {
    fontSize: 20,
    color: "white"
    },
  container3: {
    flex: 2.5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%"
  },
  text3: {
    fontSize: 50,
    color: "white"
    },
  container4: {
    flex: 2.5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%"
  },
  text4: {
    fontSize: 40,
    color: "white"
    },
  container5: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%"
  },
  text5: {
    fontSize: 30,
    color: "black"
    },
});
