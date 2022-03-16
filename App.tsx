/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Brightness,
  Sepia,
  BoxBlur,
  Sharpen,
  Contrast,
  Temperature
} from 'react-native-image-filter-kit'
import Filter from './Filter';



const App = () => {

  const uri = 'https://i.imgur.com/5EOyTDQ.jpg';
  const image = <Image style={{ width: 320, height: 320 }} source={{ uri }} />

  const [settings, setSettings] = useState([
    {
      name: 'blur',
      minValue: 0,
      maxValue: 5,
    },
    {
      name: 'sepia',
      minValue: 0,
      maxValue: 1.0,
    },
    {
      name: 'sharpen',
      minValue: -1.0,
      maxValue: 2.0,
    },
    {
      name: 'contrast',
      minValue: 0,
      maxValue: 2.0,
    },
    {
      name: 'brightness',
      minValue: 0,
      maxValue: 2.0,
    },
    {
      name: 'temperature',
      minValue: -1.0,
      maxValue: 1.0,
    },
  ])

  const [values, setValues] = useState({
    blur: 1,
    sepia: 0,
    sharpen: 1,
    contrast: 1,
    brightness: 1,
    temperature: 0
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width:'100%', alignItems:'center'}}>
          <View style={{padding:15}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Image Filters</Text>
          </View>
        </View> 
        <View style={{padding:10}} />
        <BoxBlur
          radius={values.blur}
          image={
            <Sepia
              amount={values.sepia}
              image={
                <Sharpen
                  amount={values.sharpen}
                  image={
                    <Contrast
                      amount={values.contrast}
                      image={
                        <Brightness
                          amount={values.brightness}
                          image={
                            <Temperature
                              amount={values.temperature}
                              image={image}
                            />
                          }
                        />
                      }/>
                  }/>
              }/>
          }/>
          <View style={{padding: 20}} />
          {settings.map(filter => (
            <Filter
              key={filter.name}
              name={filter.name}
              minimum={filter.minValue}
              maximum={filter.maxValue}
              // @ts-ignore
              onChange={(value:any) => setValues({...values, [filter.name]: value })}
            />
          ))}
          <View style={{padding: 20}} />
          <Button title='reset' onPress={()=>{setValues({
                blur: 1,
                sepia: 0,
                sharpen: 1,
                contrast: 1,
                brightness: 1,
                temperature: 0
          })}}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
