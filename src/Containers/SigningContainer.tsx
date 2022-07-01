import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Hooks'

const SigningContainer = () => {
  const { Common, Layout } = useTheme()

  return (
    <View style={[Common.backgroundPrimary, Layout.fill, Layout.center]}>
      <Text style={Common.textRegular}>Gambar tanda tangan anda disini</Text>
    </View>
  )
}

export default SigningContainer
