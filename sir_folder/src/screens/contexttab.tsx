import {View} from 'react-native';
import {Button, Text} from 'react-native';
import {useAppContext} from '../context/appcontext';

const ContextTab = () => {
  const {user, counter, updateCounter} = useAppContext();

  const addCounter = () => {
    updateCounter(counter + 1);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Value of Counter: {counter}
      </Text>
      <Button title="Add Counter" onPress={addCounter} />
    </View>
  );
};

export default ContextTab;
