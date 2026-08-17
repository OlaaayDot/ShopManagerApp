import AppNavigator from './src/navigation/AppNavigator';
import { ProductProvider } from './src/context/ProductContext';

export default function App() {
  return (
    <ProductProvider>
      <AppNavigator />
    </ProductProvider>
  );
}