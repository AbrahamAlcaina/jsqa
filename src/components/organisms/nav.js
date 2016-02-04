import React, { View, Text } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';

const nav = () => (
    <View>
        <MKButton
          backgroundColor={MKColor.Teal}
          onPress={() => {
            console.log('hi, raised button!');
          }}
          rippleLocation="center"
          shadowColor="black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.7}
          shadowRadius={2}
        >
            <Text
              pointerEvents="none"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Yeep
            </Text>
        </MKButton>
    </View>
);

nav.displayName = 'Nav';

export const Nav = nav;
