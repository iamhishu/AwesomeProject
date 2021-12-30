import { StyleSheet } from 'react-native';
import {  Switch as RNSwitch } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { connect } from "react-redux";
import { withFormikControl } from "react-native-formik";

const TabOne = function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Sign Up/Login</Text>
      <View style={styles.separator} lightColor="#e5e5e5" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state, 'state_____');
  return {
    store_name: state.store.storeName,

  };
};

export default connect(mapStateToProps)(TabOne);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
