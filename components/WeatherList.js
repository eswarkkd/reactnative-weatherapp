import React from 'react';
import { FlatList } from 'react-native';
import WeatherCard from './WeatherCard';

const WeatherList = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <WeatherCard data={item} />}
            keyExtractor={(item) => item.dt.toString()}
        />
    );
};

export default WeatherList;
