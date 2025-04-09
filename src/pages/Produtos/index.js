import react from 'react';
import { Text, StyleSheet, View, Button, Image, Alert } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import Home from '../Home/index';

export default function App() {
  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        <Image
          style={styles.ProfilePic} 
          source={{ 
            uri: 'https://pbs.twimg.com/media/Gck4FmIbMAAku8c.jpg',
          }} 
        />
        <View style={styles.Button}>
          <Button
            title='Energético'
            color='#2d2d4f'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <View style={styles.Card}>
        <Image
          style={styles.ProfilePic} 
          source={{ 
            uri: 'https://nerdskitchen.pl/wp-content/uploads/2019/12/Death-stranding-3.jpg',
          }} 
        />
        <View style={styles.Button}>
          <Button
            title='Pizza'
            color='#2d2d4f'
            onPress={() => Alert.alert('Heartman é um membro da Bridges que pesquisa o Death Stranding.')}
          />
        </View>
      </View>
    </View>
    
  );
}

const styles=StyleSheet.create({
  Container:{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    },
  Card:{
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 200,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
    
    /*Sombra do Card - React Native Shadow Generator - GitHub*/
    shadowColor: "gray",
    shadowOffset: {
	  width: 5,
	  height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  ProfilePic: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  Button:{
    marginTop: 20,
    marginLeft: 30,
  },
}

)