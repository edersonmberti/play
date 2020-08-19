import { StyleSheet } from 'react-native';

const imageDimensions = {
  width: 150,
  height: 100,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    ...imageDimensions,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    ...imageDimensions,
    zIndex: 1,
  },
  overlapImage: {
    ...imageDimensions,
    position: 'absolute',
    zIndex: 2,
    opacity: 0.5,
  },
  wrapper: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: '#414141',
  },
  description: {
    fontSize: 12,
    lineHeight: 14,
    color: '#A0A0A0',
  },
  icon: {
    height: 100,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;
