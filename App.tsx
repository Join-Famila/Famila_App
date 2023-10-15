import {StyleSheet} from 'react-native';
import MainNavigator from './src/screens/MainNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <MainNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
