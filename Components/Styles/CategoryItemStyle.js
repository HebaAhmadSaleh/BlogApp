import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');

export const style = StyleSheet.create({
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        margin: 5,
        alignSelf: 'center',
    },
    card: {
        marginTop: 10,
    },
    content: {
        color: 'black'
    },
    category: {
        // backgroundColor:'#ea2',
        margin: 10,
        height: height / 5,
        width: width / 3,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    image: {
        alignSelf: 'center',
        height: 70,
        width: 120
    }
});