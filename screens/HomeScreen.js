import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { getWeatherByCity } from '../services/WeatherService';
import WeatherList from '../components/WeatherList';

const HomeScreen = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeather = async () => {
        try {
            const data = await getWeatherByCity(city);
            setWeatherData(data);
        } catch (error) {
            alert('Error fetching weather data');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Get Weather" onPress={fetchWeather} />
            <WeatherList data={weatherData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default HomeScreen;
