import { View, Text, SafeAreaView } from 'react-native';

export default function ProductDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Product Details Screen</Text>
      </View>
    </SafeAreaView>
  );
}