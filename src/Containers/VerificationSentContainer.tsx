import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { VerificationSentProps } from '@/Navigators/Application'

import Feather from 'react-native-vector-icons/Feather'

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#DB4540',
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  container: { padding: 32 },
  checkMark: {
    alignSelf: 'center',
    padding: 16,
    borderRadius: 100,
    backgroundColor: '#27AE60',
  },
  spacing: {
    marginTop: 40,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: 'black',
  },
})

const VerificationSentContainer: React.FC<VerificationSentProps> = ({
  navigation,
}) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View style={[Common.backgroundPrimary, Layout.fill, styles.container]}>
      <View style={[Layout.center, Layout.fill]}>
        <View style={[Layout.center, styles.checkMark]}>
          <Feather name="check" size={48} color="white" />
        </View>
        <View style={[Layout.center, styles.spacing]}>
          <Text style={[Fonts.textCenter, Gutters.smallBMargin, styles.title]}>
            Permintaan verifikasi Anda telah dikirim
          </Text>
          <Text style={[Fonts.textCenter, styles.subtitle]}>
            Persyaratan Anda telah kami terima dan akan dicek oleh agen kami.
            Proses akan berlangsung setidaknya 1x24 jam.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={[Layout.center, styles.button]}
      >
        <Text style={Common.textSmallBold}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerificationSentContainer
