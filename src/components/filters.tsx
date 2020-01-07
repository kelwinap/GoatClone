
import React from 'react';
import FilterButton from './filterButton';
import { ScrollView, View } from 'react-native';

function Filters() {

    return (
        <View style={{ height: 40 }}>
            <ScrollView horizontal style={{ marginLeft: 12 }}>
                <FilterButton name="UNDER RETAIL" />
                <FilterButton name="INSTANT SHIP" />
                <FilterButton name="MEN" />
                <FilterButton name="WOMEN" />
            </ScrollView>
        </View>
    )
}

export default Filters
