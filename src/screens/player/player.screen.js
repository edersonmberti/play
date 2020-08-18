import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native';

import {
  PreviousIcon,
  PlayFilledIcon,
  NextIcon,
  SpeakerIcon,
  SoundIcon,
} from '../../assets/icons';

import Styles from './player.style';

const imageUri =
  'https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg';

export const PlayerScreen = () => {
  const StatusProgress = () => {
    return <View style={Styles.statusProgress} />;
  };

  const Content = () => {
    return (
      <>
        <View style={Styles.textWrapper}>
          <Text style={Styles.title}>Zumba class</Text>
          <Text style={Styles.progress}>1:00 | 3:50</Text>
        </View>
        <Text style={Styles.description}>Dancing school</Text>
      </>
    );
  };

  const Media = () => {
    return (
      <View style={Styles.mediaContainer}>
        <TouchableOpacity style={Styles.touchable}>
          <PreviousIcon />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.playContainer}>
          <View style={Styles.playWrapper}>
            <PlayFilledIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.touchable}>
          <NextIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const Sound = () => {
    return (
      <View style={Styles.soundContainer}>
        <SpeakerIcon />
        <Slider
          style={Styles.slider}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#3F25E5"
          minimumTrackTintColor="rgba(63, 37, 229, 0.75)"
          maximumTrackTintColor="rgba(63, 37, 229, 0.35)"
        />
        <SoundIcon />
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.image}
        source={{
          uri: imageUri,
        }}
      />
      <StatusProgress />
      <View style={Styles.wrapper}>
        <Content />
        <Media />
        <Sound />
      </View>
    </View>
  );
};
