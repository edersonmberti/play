import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
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
