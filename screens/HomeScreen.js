import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Pressable, Image,ScrollView,TextInput } from 'react-native';
import * as Location from 'expo-location';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import {SliderBox } from 'react-native-image-slider-box';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../ProductReducer';
import { current } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const cart = useSelector((state)=> state.cart.cart);
  const total = cart.map((item)=> item.quantity*item.price).reduce((curr,prev)=> curr+prev,0);
  const navigation=useNavigation();

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'We are loading your location'
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        'Location services are not enabled',
        'Please enable the location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Allow the app to use location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    } else {
      const { coords } = await Location.getCurrentPositionAsync();
      if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of response) {
          let address = `${item.name} ${item.city} ${item.postalCode}`;
          setDisplayCurrentAddress(address);
        }
      }
    }
  };

const product = useSelector((state)=> state.product.product);
const dispatch = useDispatch();
useEffect(()=> {
  if(product.length > 0) return;

  const fetchProducts =() => {
    services.map((service) => dispatch(getProducts(service)));
  };
  fetchProducts();
},[]);
console.log(product);





const services = [
  {
    id: "0",
    image: "https://tse4.mm.bing.net/th?id=OIP.181o3biieVDeRih0iClHewHaJc&pid=Api&P=0&h=180",
    name: "Shorts",
    quantity: 0,
    price: 10,
  },
  {
    id: "1",
    image: "https://tse2.mm.bing.net/th?id=OIP.hAqiND5hdPGGmneK2F6_SQHaKu&pid=Api&P=0&h=180",
    name: "T-Shirts",
    quantity: 0,
    price: 15,
  },
  {
    id: "2",
    image: "https://tse2.mm.bing.net/th?id=OIP.Yu9riTiHtINc0rpQf028fAHaHa&pid=Api&P=0&h=180",
    name: "Socks",
    quantity: 0,
    price: 5,
  },
  {
    id: "3",
    image: "https://tse3.mm.bing.net/th?id=OIP.lMijwqdj72YArf-pIiPGlgHaHa&pid=Api&P=0&h=180",
    name: "Jackets",
    quantity: 0,
    price: 30,
  },
  {
    id: "4",
    image: "https://tse4.mm.bing.net/th?id=OIP.5VVe9s7E-y-oh3KfR2KRnQHaKG&pid=Api&P=0&h=180",
    name: "Jeans",
    quantity: 0,
    price: 25,
  },
  {
    id: "5",
    image: "https://tse1.mm.bing.net/th?id=OIP.vhXIQxz0CdQDXMgqi_3LcAHaHI&pid=Api&P=0&h=180",
    name: "Hats",
    quantity: 0,
    price: 12,
  },
  {
    id: "6",
    image: "https://tse1.mm.bing.net/th?id=OIP.2OHdsVF39qsALf6jRyDdFQHaKG&pid=Api&P=0&h=180",
    name: "Dresses",
    quantity: 0,
    price: 20,
  },
  {
    id: "7",
    image: "https://tse4.mm.bing.net/th?id=OIP.w2brtZM27TzW9wYJdJY4iQHaFj&pid=Api&P=0&h=180",
    name: "Shoes",
    quantity: 0,
    price: 40,
  }
];

  return (
    <>
    <ScrollView style={{backgroundColor:"#F0F0F0",flex:1,marginTop:50}}>
    <View style={{flex:10,marginTop:20}}>
       {/*//Location */}
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Entypo name="location" size={30} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
        </View>
        <Pressable style={styles.imageContainer}>
          <Image style={styles.image} source={require('./../assets/vlcsnap-2018-11-10-00h12m12s815.png')} />
        </Pressable>
      </View>
      {/*//search bar*/}
      <View style={styles.search}>
        <TextInput placeholder='Search for items or More'/>
        <AntDesign name="search1" size={24} color="#fd5c63" />
      </View>
    {/*Image*/}
    <Carousel/>

    {/*Services*/}
    <Services/>

  {/*Render all images */}
    {product.map((item,index) =>(
        <DressItem item={item} key={index}/>
    ))}
    </View>
    </ScrollView>
    {total === 0? (
      null
    ): (
       <Pressable style={{backgroundColor:"#088F8F",padding:10,marginBottom:40,
       margin:15,borderRadius:7,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <View>
      <Text style={{fontSize:17,fontWeight:'600',color:'white'}}> {cart.length} items | ${total} </Text>
      <Text style={{fontSize:15,fontWeight:'400',color:'white'}}>extra charges may applied</Text>

      </View>

      <Pressable>
        <Text style={{fontSize:17,fontWeight:'600',color:'white'}} onPress={()=> { navigation.navigate('Pickup')}}>Proceed to pickup</Text>
      </Pressable>
    </Pressable>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Change from 'center' to 'flex-start'
    padding: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Change from 'center' to 'flex-start'
  },
  imageContainer: {
    marginLeft: 'auto',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  search: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: 'flex-start', // Change from 'center' to 'flex-start'
    justifyContent: 'space-between',
    borderWidth: 0.8,
    borderColor: '#C0C0C0',
    borderRadius: 7,
  },
});


export default HomeScreen;
