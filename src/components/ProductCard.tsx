import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₱{product.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 8, backgroundColor: '#fff', borderRadius: 8, padding: 8, elevation: 2 },
  image: { width: '100%', height: 120, borderRadius: 8 },
  name: { fontWeight: '600', marginTop: 6 },
  price: { color: '#555', marginTop: 2 },
});