import React from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/common/container';
import { NOTIFICATIONS, SETTINGS, TRACK_INFO, TRACKING_LIST, ADD_NEW_TRACK } from '../../constants/RouteNmes';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={17} name="player-settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(ADD_NEW_TRACK);
      },
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
    {
      icon: <Icon type="octicon" size={17} name="bell" />,
      name: 'Notifications',
      onPress: () => {
        navigation.navigate(ADD_NEW_TRACK);
      }
    },
    {
      icon: <Icon type="ant" size={17} name="plus" />,
      name: 'Add New Package',
      onPress: () => {
        navigation.navigate(ADD_NEW_TRACK);
      }
    },
    {
      icon: <Icon type="ant" size={17} name="sharealt" />,
      name: 'Share App',
    },
    {
      icon: <Icon type="ant" size={17} name="staro" />,
      name: 'Rate Us',
    },
    {
      icon: <Icon type="ant" size={17} name="home" />,
      name: 'Tracking List',
      onPress: () => {
        navigation.navigate(TRACKING_LIST);
      }
    },
    {
      icon: <Icon type="ant" size={17} name="staro" />,
      name: 'Track Info',
      onPress: () => {
        navigation.navigate(ADD_NEW_TRACK);
      }
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/LoginTopImg.png')}
          style={styles.logoImage}
        />

        <View style={{paddingHorizontal: 30}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
