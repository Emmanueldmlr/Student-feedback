import { config } from '@gluestack-ui/config';
import {  GluestackUIProvider } from '@gluestack-ui/themed';
import AppNavigator from './src/navigations';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AppNavigator/>
    </GluestackUIProvider>
  );
}

