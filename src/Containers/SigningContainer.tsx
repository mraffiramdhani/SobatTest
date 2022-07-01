import { useTheme } from '@/Hooks'
import React from 'react'
import { Text, View } from 'react-native'

const SigningContainer = () => {
  const { Common, Layout } = useTheme()

  return (
    <View style={[Common.backgroundPrimary, Layout.fill, Layout.center]}>
      <Text
        style={{ fontFamily: 'Nunito-Regular', fontSize: 14, color: 'black' }}
      >
        Gambar tanda tangan anda disini
      </Text>
    </View>
  )
}

export default SigningContainer
