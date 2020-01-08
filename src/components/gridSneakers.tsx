
import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import CardSneaker from './cardSneaker'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        discount: true
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function GridSneakers(props: any) {

    

    return (
        <FlatList            
            data={DATA}
            renderItem={({ item }) => <CardSneaker discount={item.discount} />}
            keyExtractor={item => item.id}
            numColumns={2}            
        />
    )
}

export default GridSneakers
