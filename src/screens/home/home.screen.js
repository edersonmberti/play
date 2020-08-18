import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PlaylistCard } from '../../components'

import Playlists from '../../mock/data';

import Styles from './home.style';

export const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Playlists</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Playlists.map((props) => (
          <PlaylistCard {...props} key={props.id} />
        ))}
      </ScrollView>
    </View>
  );
};
