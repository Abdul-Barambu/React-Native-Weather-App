import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [location, setLocation] = useState([1, 2, 3])



    const handleShowSearch = () => {
        setShowSearch(!showSearch)
    }

    const handleLocation = (loc) => {
        console.log('Location: ' + loc)
    }

    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={60} source={require("../assets/images/bg.png")} className="h-full w-full absolute" />

            <SafeAreaView className='flex flex-1'>
                {/* search */}
                <View style={{ height: '7%' }} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full" style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }}>

                        {
                            showSearch ? (
                                <TextInput
                                    placeholder='Search city'
                                    placeholderTextColor={'lightgray'}
                                    className="pl-6 h-10 flex-1 text-base text-white"
                                />
                            ) : null
                        }

                        <TouchableOpacity onPress={handleShowSearch}
                            className='rounded-full p-3 m-1'
                            style={{ backgroundColor: theme.bgWhite(0.3) }}>
                            <Feather name="search" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    {
                        location.length > 0 && showSearch ? (
                            <View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
                                {
                                    location.map((loc, index) => {
                                        let showBorder = index + 1 != location.length;
                                        let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : ''
                                        return (
                                            <TouchableOpacity key={index}
                                                onPress={() => handleLocation(loc)}
                                                className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
                                            >
                                                <Entypo name="location-pin" size={20} color="gray" />
                                                <Text className='text-black text-lg ml-2'>London, United Kingdom</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>

                {/* forcast section */}
                <View className='mx-4 flex justify-around flex-1 mb-2'>
                    {/* location */}
                    <Text className='text-white text-center text-2xl font-bold'>London,
                        <Text className='text-lg font-semibold text-gray-300'>United Kingdom</Text>
                    </Text>
                    {/* image */}
                    <View className='flex-row justify-center'>
                        <Image
                            source={require('../assets/images/partlycloudy.png')}
                            className='h-52 w-52'
                        />
                    </View>
                    {/* degree */}
                    <View className='space-y-2'>
                        <Text className='text-center font-bold text-white text-6xl ml-5'>23&#176;</Text>
                        <Text className='text-center font-bold text-white text-xl ml-5 tracking-widest'>Partly cloudy</Text>
                    </View>
                    {/* other stats */}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/wind.png')} className='h-6 w-6' />
                            <Text className='text-white font-semibold text-base'>22km</Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/drop.png')} className='h-6 w-6' />
                            <Text className='text-white font-semibold text-base'>23%</Text>
                        </View>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/sun.png')} className='h-6 w-6' />
                            <Text className='text-white font-semibold text-base'>6:05 AM</Text>
                        </View>
                    </View>
                </View>

                {/* forecast for next days */}
                <View className='mb-2 space-y-3'>
                    <View className='flex-row items-center mx-5 space-x-2'>
                        <FontAwesome name="calendar" size={22} color="white" />
                        <Text className='text-white text-base'>Daily forecast</Text>
                    </View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {/* start */}
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
                            style={{ backgroundColor: theme.bgWhite(0.15) }}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11' />
                            <Text className='text-white'>Monday</Text>
                            <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                        </View>
                        {/* end */}
                        {/* start */}
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
                            style={{ backgroundColor: theme.bgWhite(0.15) }}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11' />
                            <Text className='text-white'>Tuesday</Text>
                            <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                        </View>
                        {/* end */}
                        {/* start */}
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
                            style={{ backgroundColor: theme.bgWhite(0.15) }}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11' />
                            <Text className='text-white'>Monday</Text>
                            <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                        </View>
                        {/* end */}
                        {/* start */}
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
                            style={{ backgroundColor: theme.bgWhite(0.15) }}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11' />
                            <Text className='text-white'>Monday</Text>
                            <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                        </View>
                        {/* end */}
                        {/* start */}
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
                            style={{ backgroundColor: theme.bgWhite(0.15) }}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11' />
                            <Text className='text-white'>Monday</Text>
                            <Text className='text-white text-xl font-semibold'>13&#176;</Text>
                        </View>
                        {/* end */}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen