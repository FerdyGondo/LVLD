import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'


export function useTimer(data) {
    const formatData = () => {
        let year = new Date().getFullYear();
        let date = data.startDate[0].split("/")
        let time = data.endTime[0].split(":")
        let hour = time[0]
        let minute = time[1].slice(0,2)
        let timeZone = time[1].slice(-2)

        if (timeZone === "pm") {
            hour = parseInt(hour)
            hour+=12
        }

        const mappedData = date.map((data) => parseInt(data))

        return {
            date: mappedData,
            hour: hour,
            minute: parseInt(minute),
            year: year
        }
    }
    const calculateTime = () => {
        const result = formatData()
        const difference = +new Date(`${result.year}-${result.date[0]}-${result.date[1]}T${result.hour}:${result.minute}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTime())

    useEffect(React.useCallback(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTime())
        }, 1000)
        return () => { clearTimeout(timer)}
    },[]))

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        timerComponents.push({
            timeLeft: timeLeft[interval],
            interval: interval
        })
    })

    return timerComponents;


}


export default function index() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
