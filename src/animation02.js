/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    Easing,
    Animated,
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

class AnimTwo extends Component {
    constructor() {
        super();
        this.state = {
            redSquare: new Animated.Value(1),
            greenSquare: new Animated.ValueXY(0, 0),
            blueSquare: new Animated.ValueXY(0, 0)
        }

    }

    runAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.redSquare, {
                toValue: 0
            }),

            Animated.parallel([
                Animated.timing(this.state.greenSquare, {
                    toValue: {x: 200, y: 0}
                }),
                Animated.spring(this.state.blueSquare, {
                    toValue: {x: 200, y: 400}
                }),
            ])

        ]).start();
    }

    render() {
        return (
            <View>
                <Animated.View
                style={{
                    opacity: this.state.redSquare
                }}
                >
                    <View style={styles.redsquare}>
                    </View>
                </Animated.View>
                <Animated.View
                    style={
                        this.state.greenSquare.getLayout()
                    }
                >
                    <View style={styles.greensquare}>
                    </View>
                </Animated.View>
                <Animated.View
                    style={
                        this.state.blueSquare.getLayout()
                    }>
                    <View style={styles.bluesquare}>
                    </View>
                </Animated.View>
                <Button
                    title="Animated Start"
                    onPress={this.runAnimation}
                ></Button>
                <Button
                    title="Check the console"
                    onPress={()=>{
                        console.log('button pressed!')
                    }}
                ></Button>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
    },
    redsquare: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    bluesquare: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    greensquare: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },

});

export default AnimTwo;

