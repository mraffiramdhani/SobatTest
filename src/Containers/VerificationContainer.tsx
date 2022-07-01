import React from 'react'
import { Text, TouchableOpacity, ScrollView, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { VerificationProps } from '@/Navigators/Application'

import Feather from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const VerificationContainer: React.FC<VerificationProps> = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const navigateSubmit = () => navigation.navigate('VerificationSent')

  const navigationSigning = () => navigation.navigate('Signing')

  return (
    <ScrollView
      style={[Common.backgroundPrimary, Layout.fill]}
      contentContainerStyle={[Gutters.mediumHPadding, Gutters.mediumVPadding]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[Fonts.textSmallBold, Gutters.smallBMargin]}>
        Upload foto kartu identitas dan foto selfie bersama kartu identitas Anda
        dengan ketentuan:
      </Text>
      <Text
        style={[
          Gutters.smallBMargin,
          {
            fontFamily: 'Nunito-Regular',
            fontSize: 14,
            color: 'black',
          },
        ]}
      >
        <Text
          style={{
            fontSize: 10,
            color: 'black',
          }}
        >
          {'\u2B24'}
        </Text>
        {'   '}
        Jelas dan dapat dibaca, foto identitas tidak terpotong
      </Text>
      <Text
        style={{
          fontFamily: 'Nunito-Regular',
          fontSize: 14,
          color: 'black',
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: 'black',
          }}
        >
          {'\u2B24'}
        </Text>
        {'   '}
        format file .jpg, .png dengan ukuran maksimal 2 MB
      </Text>
      <View style={Gutters.largeTMargin}>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
              color: 'black',
              marginRight: 9,
            }}
          >
            Kartu identitas
          </Text>
          <MaterialIcon name="info" size={14} color="#A0A4AB" />
        </View>
        <View
          style={[
            Layout.center,
            Gutters.smallTMargin,
            {
              backgroundColor: '#FBFAFB',
              borderWidth: 1,
              borderColor: '#A0A4AB',
              borderStyle: 'dashed',
              borderRadius: 8,
              paddingVertical: 36,
            },
          ]}
        >
          <Feather name="folder-plus" size={37} color="black" />
          <Text
            style={[
              Fonts.textCenter,
              Gutters.smallTMargin,
              { fontFamily: 'Nunito-Regular', fontSize: 14, color: 'black' },
            ]}
          >
            Ambil foto bagian depan dari KTP Anda
          </Text>
          <Text
            style={[
              Fonts.textCenter,
              {
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 35,
              },
            ]}
          >
            Ambil gambar atau upload
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
              color: 'black',
              marginRight: 9,
            }}
          >
            Kartu identitas
          </Text>
          <MaterialIcon name="info" size={14} color="#A0A4AB" />
        </View>
        <View
          style={[
            Layout.center,
            Gutters.smallTMargin,
            {
              backgroundColor: '#FBFAFB',
              borderWidth: 1,
              borderColor: '#A0A4AB',
              borderStyle: 'dashed',
              borderRadius: 8,
              paddingVertical: 36,
            },
          ]}
        >
          <Feather name="folder-plus" size={37} color="black" />
          <Text
            style={[
              Fonts.textCenter,
              Gutters.smallTMargin,
              { fontFamily: 'Nunito-Regular', fontSize: 14, color: 'black' },
            ]}
          >
            Ambil gambar dengan wajah anda
          </Text>
          <Text
            style={[
              Fonts.textCenter,
              {
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 35,
              },
            ]}
          >
            Ambil gambar atau upload
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
              color: 'black',
              marginRight: 9,
            }}
          >
            Tanda tangan
          </Text>
          <MaterialIcon name="info" size={14} color="#A0A4AB" />
        </View>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 12,
            color: '#626262',
          }}
        >
          Pastikan tanda tangan anda sama dengan yang ada di KTP
        </Text>
        <TouchableOpacity
          onPress={navigationSigning}
          style={[
            Layout.center,
            Gutters.smallTMargin,
            {
              backgroundColor: '#FBFAFB',
              borderWidth: 1,
              borderColor: '#A0A4AB',
              borderStyle: 'dashed',
              borderRadius: 8,
              paddingVertical: 36,
            },
          ]}
        >
          <Feather name="folder-plus" size={37} color="black" />
          <Text
            style={[
              Fonts.textCenter,
              Gutters.smallTMargin,
              { fontFamily: 'Nunito-Regular', fontSize: 14, color: 'black' },
            ]}
          >
            Ambil gambar dengan wajah anda
          </Text>
          <Text
            style={[
              Fonts.textCenter,
              {
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 35,
              },
            ]}
          >
            Ambil gambar atau upload
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={navigateSubmit}
        style={[
          Layout.center,
          {
            backgroundColor: '#DB4540',
            paddingVertical: 14,
            marginTop: 28,
            borderRadius: 37,
          },
        ]}
      >
        <Text
          style={{ fontFamily: 'Nunito-Bold', fontSize: 16, color: 'white' }}
        >
          Verifikasi
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default VerificationContainer
