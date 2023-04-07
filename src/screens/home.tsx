import {Button, Text,View} from 'react-native';


const Home = ({navigation}:any) => {
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>Home</Text>
            {<Button title='About' onPress={() => navigation.navigate("About")}/>}
        </View>
    )
}

export default Home;

