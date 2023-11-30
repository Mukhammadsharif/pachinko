import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../images/logo-frame.png';
import Parcel from '../images/basket-frame.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Chevron from '../images/chevron-frame.png';

const {height} = Dimensions.get('window');
export default function Celebrations() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            {/*<Image source={Close} style={styles.close} />*/}
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sprint')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Марафон</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Pachinko')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Ночь Пачинко</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Sushi')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Вечер суши</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Challange')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Суши-Челлендж</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Master')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Мастер-Класс</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cabas')}>
          <View style={{alignItems: 'center'}}>
            <Image source={Parcel} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerItem: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: COLORS.drawerItem,
    backgroundColor: COLORS.drawerItem,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 3,
  },
  drawerLogo: {
    aspectRatio: 0.4,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
  chevron: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
});
