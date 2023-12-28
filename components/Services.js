import { ScrollView, StyleSheet, Text, Pressable, Image, View } from 'react-native';
import React from 'react';

const Services = () => {
  const services = [
    {
      id: "0",
      image: "https://www.lucyslaundryoc.com/wp-content/uploads/2020/06/full-load-washing-june-blog.jpg",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://tse2.mm.bing.net/th?id=OIP.20BYmufBumKRKbsZeQWVJAHaEi&pid=Api&P=0&h=180",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://www.bredonhillcleaningservices.co.uk/wp-content/uploads/2020/07/shutterstock-238643320-cropped-1521537943-scaled.jpg",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://tse4.mm.bing.net/th?id=OIP.PaHV34egIj02Pp7AZeCFOgHaEb&pid=Api&P=0&h=180",
      name: "Cleaning",
    },
  ];

  return (
    <View style={{padding:10}}>
    <Text style={{fontSize:16,fontWeight:'500',marginBottom:7}}>Services Available</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {services.map((service, index) => (
        <Pressable key={index} style={{padding:20,backgroundColor:'white',margin:10,borderRadius:7}}>
          <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />
          <Text style={{textAlign:'center',marginTop:10}}>{service.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
