import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/4j1v3lZDvE4/maxresdefault.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.cardTitle}>Chill</Text>
          <Text style={styles.cardDescription}>8 videos . 18:30 min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
    marginBottom: 20,
    color: '#414141',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  textWrapper: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: '#414141',
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 14,
    color: '#A0A0A0',
  },
});
