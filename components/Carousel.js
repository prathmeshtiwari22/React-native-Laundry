import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';

const Carousel = () => {
    const images=[
      "https://tse3.mm.bing.net/th?id=OIP.ZR8j-TuYu0K5QCPaPdSw7AHaE7&pid=Api&P=0&h=180",
      "https://aeilaundry.com/wp-content/uploads/2019/03/IMG_0218.jpg",
    ];
  return (
    <View>
      <SliderBox images={images} autoPlay circleLoop dotColor={'#13274F'} inactiveDotColor='#90A4AE' ImageComponentStyle={{
        borderRadius:6,
        width:'94%'
      }} />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})