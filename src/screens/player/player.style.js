/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
	},
	image: {
		width,
		height: height * 0.4,
	},
	statusProgress: {
		width,
		height: 5,
		backgroundColor: '#3F25E5',
	},
	wrapper: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 27,
		paddingBottom: 60,
	},
	textWrapper: {
		width,
		paddingHorizontal: 27,
	},
	titleWrapper: {
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
	},
	mediaContainer: {
		width,
		paddingHorizontal: 27,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	touchable: {
		backgroundColor: 'rgba(63, 37, 229, 0.15)',
		height: width * 0.15,
		width: width * 0.15,
		borderRadius: width * 0.15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	playContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width * 0.33,
		height: width * 0.33,
		borderRadius: width * 0.33,
		backgroundColor: 'rgba(78, 74, 238, 0.15)',
	},
	playWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width * 0.30,
		height: width * 0.30,
		borderRadius: width * 0.30,
		backgroundColor: '#3F25E5',
	},
	soundContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	slider: {
		width: width - (2 * 18 + 2 * 8 + 2 * 27),
		height: 18,
		marginHorizontal: 8,
	},
});

export default styles;
