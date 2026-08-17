import { View, Text, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
}