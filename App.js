import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, Text, View, StyleSheet, ImageBackground } from 'react-native';

const bgImg1 = 'https://cdn1.vectorstock.com/i/1000x1000/39/25/cartoon-space-background-vector-4383925.jpg'

let bgImg2 = 'https://s3.envato.com/files/247457540/06202%20USA%202015%20_MG_6843.jpg'
export default class App extends Component {
    constructor(props) {
        super(props)

        this.moveAnimation = new Animated.ValueXY({ x: 10, y: 0 })
    }
    state = {
        image: bgImg1

    }

    _moveBall = () => {

        const toValueCheck = this._open ? 0 : 1;
        if (toValueCheck == 0) {
            this._open = !this._open;
            Animated.spring(this.moveAnimation, {
                toValue: { x: 0, y: 0 },
            }).start()
            this.setState({

                image: bgImg2
            })

        } else {

            this._open = !this._open;
            Animated.spring(this.moveAnimation, {
                toValue: { x: 200, y: 0 },
            }).start()
            this.setState({

                image: bgImg1
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>

                    <ImageBackground
                        source={{
                            uri: this.state.image
                        }}
                        resizeMode='cover'
                        style={{
                            width: '100%', height: '100%', justifyContent: 'center',
                            borderRadius: 80,
                        }}
                        imageStyle={{ borderRadius: 80 }}
                    >
                        <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
                            <TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
                                <Text style={styles.buttonText}>Press</Text>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    </ImageBackground   >
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        width: 100,
        height: 100,
        shadowOffset: { width: 2, height: 3 },
        shadowColor: '#0E7BD0',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        // backgroundColor : "#0000" // invisible color
    },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    },
    btnContainer: {
        height: 120,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});
