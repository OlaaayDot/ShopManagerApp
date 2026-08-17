import { View, Text, Button, SafeAreaView } from 'react-native';

export default function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>

        <Button title="Test: Add Product" onPress={() => navigation.navigate('AddProduct')} />
        <Button title="Test: Settings" onPress={() => navigation.navigate('Settings')} />
        


        




      </View>
    </SafeAreaView>
  );
}