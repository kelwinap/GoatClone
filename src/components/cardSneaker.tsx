
import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

function CardSneaker(props: any) {

    return (
        <TouchableOpacity style={{
            flex: 1,
            height: 280,
            width: 200,
            borderRightWidth: 1,
            borderTopWidth: 1
        }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                    fontWeight: 'bold',
                    textAlign: 'right',
                    textDecorationLine: props.discount ? 'line-through' : 'none',
                    marginRight: props.discount ? 10 : 30,
                    marginTop: 25
                }}>$140</Text>
                {props.discount &&
                    <Text style={{
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                        fontWeight: 'bold',
                        textAlign: 'right',
                        marginRight: 30,
                        marginTop: 25,
                        color: '#D23836'
                    }}>$140</Text>}
            </View>
            <Image
                style={{ width: 110, height: 65, marginTop: 50, marginLeft: 35 }}
                source={{ uri: 'https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/010/222/921/original/144690_01.jpg.jpeg?1519709336' }}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    textAlign: 'center',
                    width: 150,
                    fontFamily: 'sans-serif',
                    fontSize: 11,
                    fontWeight: '600',
                    letterSpacing: 1
                }}>Air Jordan 1 Retro High OG 'Bred Toe'</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardSneaker
