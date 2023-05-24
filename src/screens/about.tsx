import {View,Text,TouchableOpacity,Button} from 'react-native';
import { useOwnerContext } from '../context/ownerContext';



const About = () => {
    const {owner,stars,updateStars} = useOwnerContext();
    const handleIncrease = () => {
        if(stars < 5){updateStars(stars+1);}
    }
    const handleDecrease = () => {
        if(stars > -1){updateStars(stars - 1);}
    }
    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: "center"}}>{"Creater Details"}</Text>
            <View style={{marginTop: 10,rowGap: 20,}}>
                <View style={{flexDirection: 'row',columnGap: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Name:</Text>
                    <Text>{owner.name}</Text>
                </View>
                <View style={{flexDirection: 'row',columnGap: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Student Id:</Text>
                    <Text>{owner.studentId}</Text>
                </View>
                <View style={{flexDirection: 'row',columnGap: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Section:</Text>
                    <Text>{owner.section}</Text>
                </View>
                <View style={{flexDirection: 'row',columnGap: 10}}>
                    <Text style={{fontWeight: 'bold',color: 'red'}}>App Rating:</Text>
                    <Text style={{color: 'blue'}}>{stars}</Text>
                    <Button title='+' color={"black"} onPress={handleIncrease}/>
                    <Button title='-' color={"black"} onPress={handleDecrease}/>
                </View>
            </View>
        </View>
    )
}

export default About;