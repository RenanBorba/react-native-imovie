import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight }
  = Dimensions.get('window');

export default styles = StyleSheet.create({
  container:{
    flex: 1
  },

  bgImg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },

  wrapper: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000'
  },

  search: {
    marginTop: 40,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    height: '8%',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  input: {
    width: '95%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  },

  icon: {
    position: 'absolute',
    right: 20,
    top: 15
  },

  subtitle: {
    color: '#FFF',
    fontSize: 25,
    marginLeft: 10,
    marginVertical: 10
  },

  slide: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

  carousel: {
    flex: 1,
    overflow: 'visible'
  },

  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 295,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  carouselTitle: {
    padding: 15,
    color: '#FAFAFA',
    position: 'absolute',
    bottom: -35,
    left: 2,
    fontSize: 13,
    fontWeight: 'bold'
  },

  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },

  moreInfo: {
    backgroundColor: '#FAFAFA',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 19,
    borderTopLeftRadius: 19,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },

  movieTitle: {
    paddingLeft: 23,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },

  movieText: {
    paddingLeft: 23,
    color: '#131313',
    fontSize: 15
  },

  movieRelease: {
    paddingLeft: 23,
    marginTop: 5,
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  }
});