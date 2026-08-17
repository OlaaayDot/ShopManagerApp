import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  productName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({ visible, productName, onCancel, onConfirm }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Delete "{productName}"?</Text>
          <Text style={styles.message}>This action cannot be undone.</Text>
          <View style={styles.buttons}>
            <Pressable style={styles.cancelBtn} onPress={onCancel}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={onConfirm}>
              <Text style={{ color: '#fff' }}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  box: { backgroundColor: '#fff', borderRadius: 10, padding: 20, width: '80%' },
  title: { fontWeight: '700', fontSize: 16, marginBottom: 6 },
  message: { color: '#666', marginBottom: 16 },
  buttons: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12 },
  cancelBtn: { padding: 10 },
  deleteBtn: { backgroundColor: 'red', padding: 10, borderRadius: 6 },
});