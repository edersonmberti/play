import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { PlaylistCard } from '../../components';

import Playlists from '../../mock/data';

import Styles from './home.style';

export const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Playlists</Text>
      <FlatList
        data={Playlists}
        renderItem={({ item }) => <PlaylistCard {...item} />}
        keyExtractor={({ id }) => String(id)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={Styles.footerHeight} />}
      />
    </View>
  );
};
