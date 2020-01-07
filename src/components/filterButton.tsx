
import React, { useState } from 'react';
import { Button, Text } from 'native-base'

function FilterButton(props: any) {

    const [clicked, setClick] = useState(false);

    return (
        <Button
            bordered={clicked ? false : true}
            dark
            style={{ marginLeft: 5, borderRadius: 8, height: 35, width: 110, justifyContent: 'center' }}
            onPress={() => setClick(!clicked)}
        >
            <Text style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: '600' }}>{props.name}</Text>
        </Button>
    )
}

export default FilterButton
