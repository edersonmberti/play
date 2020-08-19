import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowIcon } from '../../assets/icons';
import { getRandomColor } from '../../utils';

import Styles from './playlist-card.style';

export const PlaylistCard = ({ title, imageUrl, quantity, duration }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={Styles.image}
        />
        <View
          style={[Styles.overlapImage, { backgroundColor: getRandomColor() }]}
        />
      </View>
      <View style={Styles.wrapper}>
        <Text style={Styles.title}>{title}</Text>
        <Text
          style={Styles.description}>{`${quantity} vídeos . ${duration}`}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          alert('Clique');
        }}
        style={Styles.icon}>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
