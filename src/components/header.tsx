
import React from 'react';
import SearchBar from './searchBar';
import { View, Text } from 'native-base'
import { TouchableOpacity } from 'react-native';

function Header(props: any) {

    return (
        <View style={{ flexDirection: 'row', height: 60, marginTop: 15, borderBottomWidth: props.border ? 0.5 : 0 }}>
            <SearchBar />
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: 100 }}>
                <Text style={{ color: 'black', fontFamily: 'sans-serif', fontSize: 10, fontWeight: '700', letterSpacing: 1, marginLeft: 10 }}>FILTER</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header
