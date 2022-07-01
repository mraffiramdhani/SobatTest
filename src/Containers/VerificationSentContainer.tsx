import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { VerificationSentProps } from '@/Navigators/Application'

import Feather from 'react-native-vector-icons/Feather'

const VerificationSentContainer: React.FC<VerificationSentProps> = ({
  navigation,
}) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View style={[Common.backgroundPrimary, Layout.fill, { padding: 32 }]}>
      <View style={[Layout.center, Layout.fill]}>
        <View
          style={[
            Layout.center,
            {
              alignSelf: 'center',
              padding: 16,
              borderRadius: 100,
              backgroundColor: '#27AE60',
            },
          ]}
        >
          <Feather name="check" size={48} color="white" />
        </View>
        <View style={[Layout.center, { marginTop: 40 }]}>
          <Text
            style={[
              Fonts.textCenter,
              Gutters.smallBMargin,
              { fontFamily: 'Nunito-Bold', fontSize: 20, color: 'black' },
            ]}
          >
            Permintaan verifikasi Anda telah dikirim
          </Text>
          <Text
            style={[
              Fonts.textCenter,
              {
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: 'rgba(51, 51, 51, 0.6)',
              },
            ]}
          >
            Persyaratan Anda telah kami terima dan akan dicek oleh agen kami.
            Proses akan berlangsung setidaknya 1x24 jam.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={[
          Layout.center,
          {
            borderRadius: 32,
            borderWidth: 1,
            borderColor: '#DB4540',
            backgroundColor: 'white',
            paddingVertical: 16,
          },
        ]}
      >
        <Text
          style={{ fontFamily: 'Nunito-Bold', fontSize: 16, color: 'black' }}
        >
          Kembali ke Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerificationSentContainer
