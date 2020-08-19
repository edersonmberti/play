import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: windowWidth * 0.6,
  },
  statusProgress: {
    width: windowWidth,
    height: 5,
    backgroundColor: '#3F25E5',
  },
  wrapper: {
    width: '100%',
    marginTop: 19,
    paddingHorizontal: 27,
  },
  textWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#414141',
  },
  progress: {
    fontSize: 12,
    lineHeight: 14,
    color: '#000',
  },
  description: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 14,
  },
  mediaContainer: {
    marginTop: 23,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: 'rgba(63, 37, 229, 0.15)',
    height: 48,
    width: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
    borderRadius: 130,
    backgroundColor: 'rgba(78, 74, 238, 0.15)',
  },
  playWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: '#3F25E5',
  },
  soundContainer: {
    marginTop: 26,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: windowWidth - (2 * 18 + 2 * 8 + 2 * 27),
    height: 18,
    marginHorizontal: 8,
  },
});

export default styles;
