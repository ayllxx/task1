import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AreaChart, Area, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Color, FontFamily, Padding, Border, FontSize } from "../../GlobalStyles";

const data = {
    '12months': [
        { shortName: 'Feb', fullName: 'February', uv: 20, pv: 40 },
        { shortName: 'Mar', fullName: 'March', uv: 60, pv: 50 },
        { shortName: 'Apr', fullName: 'April', uv: 55, pv: 45 },
        { shortName: 'May', fullName: 'May', uv: 70, pv: 60 },
        { shortName: 'Jun', fullName: 'June', uv: 75, pv: 65 },
        { shortName: 'Jul', fullName: 'July', uv: 80, pv: 70 },
        { shortName: 'Aug', fullName: 'August', uv: 85, pv: 75 },
        { shortName: 'Sep', fullName: 'September', uv: 90, pv: 80 },
        { shortName: 'Oct', fullName: 'October', uv: 100, pv: 90 },
        { shortName: 'Nov', fullName: 'November', uv: 110, pv: 100 },
        { shortName: 'Dec', fullName: 'December', uv: 120, pv: 110 },
        { shortName: 'Jan', fullName: 'January', uv: 10, pv: 10 }
    ],
    '6months': [
        { shortName: 'Aug', fullName: 'August', uv: 85, pv: 75 },
        { shortName: 'Sep', fullName: 'September', uv: 90, pv: 80 },
        { shortName: 'Oct', fullName: 'October', uv: 100, pv: 90 },
        { shortName: 'Nov', fullName: 'November', uv: 110, pv: 100 },
        { shortName: 'Dec', fullName: 'December', uv: 120, pv: 110 },
        { shortName: 'Jan', fullName: 'January', uv: 130, pv: 120 }
    ],
    '30days': [
        { shortName: 'Dec 01', fullName: 'December 1', uv: 120, pv: 110 },
        { shortName: 'Dec 02', fullName: 'December 2', uv: 122, pv: 112 },
        { shortName: 'Dec 03', fullName: 'December 3', uv: 125, pv: 115 },
        { shortName: 'Dec 04', fullName: 'December 4', uv: 130, pv: 120 },
        { shortName: 'Dec 05', fullName: 'December 5', uv: 127, pv: 117 },
        { shortName: 'Dec 06', fullName: 'December 6', uv: 129, pv: 119 },
        { shortName: 'Dec 07', fullName: 'December 7', uv: 131, pv: 121 },
        { shortName: 'Dec 08', fullName: 'December 8', uv: 134, pv: 124 },
        { shortName: 'Dec 09', fullName: 'December 9', uv: 136, pv: 126 },
        { shortName: 'Dec 10', fullName: 'December 10', uv: 140, pv: 130 },
        { shortName: 'Dec 11', fullName: 'December 11', uv: 142, pv: 132 },
        { shortName: 'Dec 12', fullName: 'December 12', uv: 145, pv: 135 },
        { shortName: 'Dec 13', fullName: 'December 13', uv: 148, pv: 138 },
        { shortName: 'Dec 14', fullName: 'December 14', uv: 150, pv: 140 },
        { shortName: 'Dec 15', fullName: 'December 15', uv: 152, pv: 142 },
        { shortName: 'Dec 16', fullName: 'December 16', uv: 155, pv: 145 },
        { shortName: 'Dec 17', fullName: 'December 17', uv: 157, pv: 147 },
        { shortName: 'Dec 18', fullName: 'December 18', uv: 160, pv: 150 },
        { shortName: 'Dec 19', fullName: 'December 19', uv: 162, pv: 152 },
        { shortName: 'Dec 20', fullName: 'December 20', uv: 165, pv: 155 },
        { shortName: 'Dec 21', fullName: 'December 21', uv: 167, pv: 157 },
        { shortName: 'Dec 22', fullName: 'December 22', uv: 170, pv: 160 },
        { shortName: 'Dec 23', fullName: 'December 23', uv: 172, pv: 162 },
        { shortName: 'Dec 24', fullName: 'December 24', uv: 175, pv: 165 },
        { shortName: 'Dec 25', fullName: 'December 25', uv: 177, pv: 167 },
        { shortName: 'Dec 26', fullName: 'December 26', uv: 180, pv: 170 },
        { shortName: 'Dec 27', fullName: 'December 27', uv: 182, pv: 172 },
        { shortName: 'Dec 28', fullName: 'December 28', uv: 185, pv: 175 },
        { shortName: 'Dec 29', fullName: 'December 29', uv: 187, pv: 177 },
        { shortName: 'Dec 30', fullName: 'December 30', uv: 190, pv: 180 }
    ],
    '7days': [
        { shortName: 'Dec 24', fullName: 'December 24', uv: 175, pv: 165 },
        { shortName: 'Dec 25', fullName: 'December 25', uv: 177, pv: 167 },
        { shortName: 'Dec 26', fullName: 'December 26', uv: 180, pv: 170 },
        { shortName: 'Dec 27', fullName: 'December 27', uv: 182, pv: 172 },
        { shortName: 'Dec 28', fullName: 'December 28', uv: 185, pv: 175 },
        { shortName: 'Dec 29', fullName: 'December 29', uv: 187, pv: 177 },
        { shortName: 'Dec 30', fullName: 'December 30', uv: 190, pv: 180 }
    ]
};

const DataTransferredChart = ({ timeframe }) => {
    return (
        <View style={styles.container}>
            <View style={styles.chartWrapper}>
                <ResponsiveContainer width={402} height={130}>
                    <AreaChart data={data[timeframe]}>
                        <CartesianGrid strokeDasharray="" vertical={false} stroke="rgba(0, 0, 0, 0.0)" />
                        <Area type="monotone" dataKey="uv" stroke="#4F46E5" strokeWidth={3} fill="rgba(129, 140, 248, 0.5)" />
                        <Area type="monotone" dataKey="pv" stroke="#818CF8" strokeWidth={3} fill="rgba(129, 140, 248, 0.1)" />
                        <YAxis axisLine={false} tickLine={false} tick={false} tickCount={5} />
                    </AreaChart>
                </ResponsiveContainer>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartWrapper: {
        left: -35,
    },
    text: {
        fontFamily: 'PlusJakartaSans-Medium',
        fontSize: 13,
    },
});

export default DataTransferredChart;
