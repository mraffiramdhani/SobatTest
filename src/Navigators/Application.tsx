import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  SigningContainer,
  VerificationContainer,
  VerificationSentContainer,
} from '@/Containers'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator<ApplicationNavigatorParamList>()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator initialRouteName="Verification">
          <Stack.Screen
            name="Verification"
            component={VerificationContainer}
            options={{
              title: 'Verifikasi',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Nunito-Bold' },
            }}
          />
          <Stack.Screen
            name="VerificationSent"
            component={VerificationSentContainer}
            options={{
              title: 'Verifikasi',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Nunito-Bold' },
            }}
          />
          <Stack.Screen
            name="Signing"
            component={SigningContainer}
            options={{
              title: 'Masukkan Tanda Tangan',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Nunito-Bold' },
              orientation: 'landscape_right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator

export type ApplicationNavigatorParamList = {
  Signing: undefined
  Verification: undefined
  VerificationSent: undefined
}

export type VerificationProps = NativeStackScreenProps<
  ApplicationNavigatorParamList,
  'Verification'
>
export type VerificationSentProps = NativeStackScreenProps<
  ApplicationNavigatorParamList,
  'VerificationSent'
>
