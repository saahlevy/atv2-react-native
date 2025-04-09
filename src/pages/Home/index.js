import react from 'react';
import { Text, StyleSheet, View, Button, Image, Alert, Card } from 'react-native';

export default function App() {
  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        <Image
          style={styles.ProfilePic} 
          source={{ 
            uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/kojima-production-project/a/a1/Screen_Shot_2019-05-30_at_12.03.54_PM.png',
          }} 
        />
        <View style={styles.Button}>
          <Button
            title='Bem vindo!'
            color='#2d2d4f'
          />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.QuoteText}>"Confira nossos produtos na aba de produtos".</Text>
          <Text style={styles.QuoteAuthor}>– Bridges Team</Text>
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
    },
  Card:{
    backgroundColor: '#3071ba',
    width: 300,
    height: 400,
    borderRadius: 6,
    alignItems: 'center',
  },
  ProfilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
  },
  Button:{
    marginTop: 20,
  },
  TextBox:{
    flex: 0.8,
    color: 'white',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 3,
    padding: 12,

    /*Estilização da borda*/
    borderStyle: 'dotted',
    borderColor: 'white',
    borderWidth: 1,
  },
  QuoteText:{
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },
  QuoteAuthor:{
    position: 'absolute',
    fontSize: 14,
    right: 0,
    bottom: 0,
    padding: 12,
    color: 'white',
  },
}

)