import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Common Styles
  appTitle: {fontSize: 22, color: 'snow'},
  headerBackgroundColor: {backgroundColor: '#075e54'},

  // Tabs
  tabBarUnderLineStyle: {height: 2},
  tabStyle: {
    backgroundColor: '#075e54',
  },
  activeTabStyle: {backgroundColor: '#075e54'},
  tabStyle: {backgroundColor: '#075e54'},
  activeTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  tabTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8ac7c2',
    textTransform: 'uppercase',
  },

  // badge styles
  activeBadge: {
    height: 21,
    backgroundColor: '#ECE5DD',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 5,
  },
  badge: {
    height: 21,
    backgroundColor: '#8ac7c2',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 5,
  },
  badgeText: {
    fontSize: 12,
    color: '#075e54',
  },

  // chat screen
  badgeChats: {
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    height: 24,
    marginTop: 4,
  },
  badgeTextChats: {
    fontSize: 12,
    color: 'snow',
    fontWeight: 'bold',
  },
  fabStyle: {
    backgroundColor: '#25D366',
  },
  // status screen
  addStatusIcon: {
    backgroundColor:"#25D366",
    alignSelf:'flex-end',
    position:'absolute',
    right:-7,
    bottom:-2,
    width:20,
    borderRadius:200,
    fontSize:24,
    marginRight:4,
    
  },
  addStatusIconText:{
    color:'#fff',
    fontWeight:"bold",
    fontSize:16,
  },
  listItemDiveder:{
    marginTop:10,
  }
});
