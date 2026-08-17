import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import DeleteModal from '../components/DeleteModal';
import { useProducts } from '../context/ProductContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function ProductDetailsScreen({ route, navigation }: Props) {
  const { product } = route.params;
  const { deleteProduct } = useProducts();
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    deleteProduct(product.id);
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₱{product.price}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Button title="Edit Product" onPress={() => navigation.navigate('EditProduct', { product })} />
        <View style={{ height: 10 }} />
        <Button title="Delete Product" color="red" onPress={() => setModalVisible(true)} />
      </View>

      <DeleteModal
        visible={modalVisible}
        productName={product.name}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleDelete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: '700', marginTop: 12 },
  price: { fontSize: 18, color: '#333', marginVertical: 4 },
  category: { color: '#888', marginBottom: 8 },
  description: { color: '#666', marginBottom: 16 },
});