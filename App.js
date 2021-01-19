/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';
// import AnimOne from './src/animation01';
// import AnimTwo from './src/animation02';
import Supertext from './src/utils/supertext';
import DeviceInfo from 'react-native-device-info';

class App extends Component {
    functionA = () => {
        if (Dimensions.get('window').fontScale === 1){
            console.warn('Good');
        }else {
            console.warn('Error!! The font scale must be 1');
        }
    }


    checkSupport = () => {
        if (Platform.OS === 'ios') {
            if (Platform.Version < 13.4) {
                return false;
            }
        } else {
            if (Platform.Version < 27) {
                return false;
            }
        }
        return true;
    };


    render() {
        //console.warn(Platform.Version);
        // console.warn(Dimensions.get('screen'));
        // console.warn(Dimensions.get('window'));

        console.warn(DeviceInfo.getBrand());
        console.warn(DeviceInfo.isTablet());
        return (
            <View style={styles.container}>
                {
                    this.functionA()
                    // this.checkSupport() ?
                    //     <Supertext style={styles.div}>
                    //         {/*This is my templates*/}
                    //         {
                    //             Platform.OS === 'ios' ?
                    //                 'This is my iOS Phone' :
                    //                 'This is my Android Phone'
                    //         }
                    //     </Supertext>
                    //     :
                    //     <Text>
                    //         Sorry your phone is not supported
                    //     </Text>
                }
                {/*<AnimTwo />*/}

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    div: {
        ...Platform.select({
            ios: {
                backgroundColor: 'yellow',
            },
            android: {
                backgroundColor: 'red',
            },
        }),
    },
});

export default App;
