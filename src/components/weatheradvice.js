import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const adviceMap = {
    eventPlanners: {
        clear: 'Great day for an outdoor event! Consider having shaded areas and plenty of water for attendees.',
        rain: 'You might want to consider moving your event indoors or having tents ready.',
        thunderstorm: 'Severe weather expected. It’s best to reschedule your event for safety.',
        snow: 'Plan for indoor events and ensure pathways are clear of snow.',
        clouds: 'Consider having indoor backup plans.',
        drizzle: 'Light rain expected. Keep some umbrellas and tents ready.',
        mist: 'Visibility might be low. Ensure proper lighting and signage.',
        fog: 'Visibility is low. Plan for indoor activities if possible.',
        haze: 'Air quality might be poor. Provide masks and keep activities light.',
        smoke: 'Air quality is poor. Plan indoor activities and ensure ventilation.',
        dust: 'Air quality is poor. Provide masks and eye protection.',
        sand: 'Expect dusty conditions. Provide masks and eye protection.',
        ash: 'Volcanic ashfall. Stay indoors and avoid outdoor activities.',
        squall: 'Brief intense weather. Have emergency plans ready.',
        tornado: 'Severe weather warning. Seek shelter immediately.',
        few_clouds: 'Good weather for outdoor activities. Keep an eye out for any sudden changes.',
        scattered_clouds: 'Good weather but have a backup plan in case of changes.',
        broken_clouds: 'Overcast but manageable for outdoor events.',
        moderate_rain: 'Plan for indoor activities or provide rain protection.',
    },
    farmers: {
        clear: 'Perfect weather for harvesting. Ensure your crops are adequately watered.',
        rain: 'Good for soil moisture. Check for any flooding in low-lying areas.',
        thunderstorm: 'Take measures to protect your crops and livestock from severe weather.',
        snow: 'Ensure livestock are sheltered and equipment is ready for snow.',
        clouds: 'Monitor crop conditions and adjust as necessary.',
        drizzle: 'Light rain beneficial for crops. Monitor for overwatering.',
        mist: 'Check irrigation systems and ensure they are not over-watering.',
        fog: 'Monitor visibility for machinery operation.',
        haze: 'Check air quality for outdoor work.',
        smoke: 'Air quality is poor. Limit outdoor work and ensure proper ventilation.',
        dust: 'Air quality is poor. Limit outdoor work and ensure proper protection.',
        sand: 'Dusty conditions. Protect crops and equipment.',
        ash: 'Volcanic ashfall. Protect crops and livestock.',
        squall: 'Brief intense weather. Secure loose items and equipment.',
        tornado: 'Severe weather warning. Seek shelter and protect livestock.',
        few_clouds: 'Good weather for most farming activities.',
        scattered_clouds: 'Ideal for most activities but keep an eye on the weather.',
        broken_clouds: 'Monitor weather for any changes that might affect farming.',
        moderate_rain: 'Ensure proper drainage in fields to prevent waterlogging.',
    },
    travelers: {
        clear: 'Ideal weather for sightseeing. Pack light and don’t forget your sunglasses.',
        rain: 'Make sure to pack an umbrella and raincoat. Plan for indoor activities.',
        thunderstorm: 'Consider delaying travel plans. Ensure you have emergency supplies if traveling.',
        snow: 'Check road conditions and be prepared for delays.',
        clouds: 'Check for potential travel delays due to weather.',
        drizzle: 'Light rain expected. Keep an umbrella handy.',
        mist: 'Visibility might be low. Drive carefully and use fog lights.',
        fog: 'Low visibility. Avoid traveling if possible or drive very carefully.',
        haze: 'Check air quality and wear a mask if necessary.',
        smoke: 'Poor air quality. Limit outdoor activities and ensure proper ventilation.',
        dust: 'Poor air quality. Wear a mask and protect your eyes.',
        sand: 'Dusty conditions. Wear a mask and protect your eyes.',
        ash: 'Volcanic ashfall. Avoid traveling and stay indoors.',
        squall: 'Brief intense weather. Stay indoors during squalls.',
        tornado: 'Severe weather warning. Seek shelter immediately.',
        few_clouds: 'Good weather for travel. Enjoy your trip.',
        scattered_clouds: 'Great weather for traveling. Keep an eye on the forecast.',
        broken_clouds: 'Overcast but fine for traveling. Be prepared for any changes.',
        moderate_rain: 'Expect wet conditions. Drive safely and pack waterproof gear.',
    },
};

const getAdviceKey = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            return 'clear';
        case 'rain':
            return 'rain';
        case 'thunderstorm':
            return 'thunderstorm';
        case 'snow':
            return 'snow';
        case 'clouds':
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
        case 'overcast clouds':
            return 'clouds';
        case 'drizzle':
            return 'drizzle';
        case 'mist':
            return 'mist';
        case 'fog':
            return 'fog';
        case 'haze':
            return 'haze';
        case 'smoke':
            return 'smoke';
        case 'dust':
            return 'dust';
        case 'sand':
            return 'sand';
        case 'ash':
            return 'ash';
        case 'squall':
            return 'squall';
        case 'tornado':
            return 'tornado';
        default:
            return 'unknown';
    }
};

const PersonalizedWeatherAdvice = ({ userGroup, weather }) => {
    const weatherCondition = weather.weather[0].main;
    const adviceKey = getAdviceKey(weatherCondition);
    const advice = adviceMap[userGroup][adviceKey] || 'No specific advice available for the current weather conditions.';

    return (
        <div className='weather-advice'>
            <Card component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #74ebd5 30%, #ACB6E5 90%)', borderRadius: '10px' }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Personalized Weather Advice
                    </Typography>
                    <Typography variant="body1" component="p">
                        {advice}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default PersonalizedWeatherAdvice;
