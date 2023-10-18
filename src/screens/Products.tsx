import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import ItemProduct from './ItemProduct';

interface ProductState {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductState[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()) // Return the result of res.json()
      .then(json => {
        setProducts(json);
      });
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item, index}: {item: ProductState; index: any}) => {
          return (
            <View>
              <ItemProduct item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Product;
