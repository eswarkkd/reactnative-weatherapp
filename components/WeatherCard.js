import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ data }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.date}>{new Date(data.dt * 1000).toLocaleDateString()}</Text>
            <Text style={styles.temp}>{data.main.temp}°C</Text>
            <Text style={styles.description}>{data.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 24,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
});

export default WeatherCard;
