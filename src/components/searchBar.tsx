
import React from 'react';
import { Input, Item, Icon } from 'native-base';

function SearchBar() {

    return (

        <Item regular style={{ backgroundColor: '#EDEDED', width: 250, height: 40, borderRadius: 8, marginLeft: 15 }}>
            <Icon style={{ fontSize: 20 }} active name='search' />
            <Input placeholderTextColor="#949494" placeholder='Search' />
        </Item>

    )
}

export default SearchBar
