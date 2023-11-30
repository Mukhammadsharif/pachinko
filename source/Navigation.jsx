import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Main from './screens/Main';
import {COLORS} from './helpers/customColor';
import Cabas from './screens/Cabas';
import Celebrations from './screens/Celebrations';
import Challange from './screens/Challange';
import Master from './screens/Master';
import Order from './screens/Order';
import Pachinko from './screens/Pachinko';
import PhoneNumbers from './screens/PhoneNumbers';
import Reserve from './screens/Reserve';
import ReserveTable from './screens/ReserveTable';
import Sprint from './screens/Sprint';
import Sushi from './screens/Sushi';
import Tv from './screens/Tv';
import Logo from './images/logo-frame.png';
import Parcel from './images/basket-frame.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cabas" component={Cabas} />
      <Drawer.Screen name="Celebrations" component={Celebrations} />
      <Drawer.Screen name="Challange" component={Challange} />
      <Drawer.Screen name="Master" component={Master} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Pachinko" component={Pachinko} />
      <Drawer.Screen name="PhoneNumbers" component={PhoneNumbers} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="ReserveTable" component={ReserveTable} />
      <Drawer.Screen name="Sprint" component={Sprint} />
      <Drawer.Screen name="Sushi" component={Sushi} />
      <Drawer.Screen name="Tv" component={Tv} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            {/*<Image source={Close} style={styles.close} />*/}
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cabas')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Корзина</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Tv')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Транслации</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Celebrations')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>События</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PhoneNumbers')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Контакты</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ReserveTable')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Резерв столика</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cabas')}>
          <View>
            <Image source={Parcel} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
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
    alignItems: 'center',
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
    aspectRatio: 0.3,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
});
