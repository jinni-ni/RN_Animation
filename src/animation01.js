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

class AnimOne extends Component {
    constructor() {
        super();
        this.state = {
            // mySquare: new Animated.ValueXY(0, 0)
            mySquare: new Animated.Value(1)
        }

    }

    runAnimation = () => {
        Animated.timing(this.state.mySquare,{
            // toValue: {x: 50, y: 300},
            duration: 2000, //ms
            delay: 1500,
            // easing: Easing.bounce,

            toValue: 0,
        }).start();
    }

    render() {
        return (
            <View>
                <Animated.View
                    style={{
                        opacity: this.state.mySquare,
                        transform: [
                            {
                            rotateX: this.state.mySquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '180deg', '360deg'],
                            })
                        },
                            {
                                translateX: this.state.mySquare.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [300, 150, 0],
                                })
                            }

                        ]

                        // top: this.state.mySquare.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [700, 0],
                        // })
                    }}
                    // style={this.state.mySquare.getLayout()}
                // style={{
                //     left:this.mySquare.x,
                //     top:this.mySquare.y,
                // }}
                >
                    <View style={styles.square}>
                    </View>
                </Animated.View>
                <Animated.Text
                    style={{

                                fontSize: this.state.mySquare.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [40, 30, 20],

                                }),

                                color: this.state.mySquare.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: ['red', 'green', 'blue'],
                                })




                        // top: this.state.mySquare.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [700, 0],
                        // })
                    }}
                >
                    <Text>Animation Effects</Text>
                </Animated.Text>
                <Button
                    title="animation Start"
                    onPress={this.runAnimation}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
    }
});

export default AnimOne;
