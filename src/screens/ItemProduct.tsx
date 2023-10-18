interface DataProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: any;
  };
}

import {View, Text, Image} from 'react-native';
import React from 'react';

const ItemProduct = ({item}: DataProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
      }}>
      <Image source={{uri: item.image}} style={{width: 70, height: 70}} />
      <View style={{paddingStart: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {item.title.substring(0, 30)}
        </Text>
        <Text numberOfLines={3} style={{paddingEnd: 70, textAlign: 'justify'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ItemProduct;
