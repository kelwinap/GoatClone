
import React, { useState } from 'react';
import FilterButton from './filterButton';
import { ScrollView, View } from 'react-native';


export const Filters = (props: any) => {

    return (
        <View style={{ height: 50}}>            
            <ScrollView horizontal style={{ marginLeft: 12 }} showsHorizontalScrollIndicator={false} >
                <FilterButton name="UNDER RETAIL" />
                <FilterButton name="INSTANT SHIP" />
                <FilterButton name="MEN" />
                <FilterButton name="WOMEN" />
            </ScrollView>            
        </View>
    )
}


