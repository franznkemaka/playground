/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
    const [isPressed, setPressed] = React.useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Hello World</Text>

                <Text>{isPressed ? 'Pressed!' : 'Not Pressed!'}</Text>

                <View style={{marginTop: 10}}>
                    <Button
                        testID={'press_me'}
                        title={'Press Me'}
                        onPress={() => setPressed(!isPressed)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
