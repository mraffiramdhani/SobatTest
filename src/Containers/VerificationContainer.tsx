import React from 'react'
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import { VerificationProps } from '@/Navigators/Application'

import { ProofInput } from '@/Components'

const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: 10,
  },
  button: {
    backgroundColor: '#DB4540',
    paddingVertical: 14,
    marginTop: 28,
    borderRadius: 37,
  },
  inputSpacing: {
    marginTop: 40,
  },
  textWhite: {
    color: 'white',
  },
})

const VerificationContainer: React.FC<VerificationProps> = ({ navigation }) => {
  const { Common, Gutters, Layout } = useTheme()

  const navigateSubmit = () => navigation.navigate('VerificationSent')

  const navigationSigning = () => navigation.navigate('Signing')

  return (
    <ScrollView
      style={[Common.backgroundPrimary, Layout.fill]}
      contentContainerStyle={[Gutters.mediumHPadding, Gutters.mediumVPadding]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[Common.textSmallBold, Gutters.smallBMargin]}>
        Upload foto kartu identitas dan foto selfie bersama kartu identitas Anda
        dengan ketentuan:
      </Text>
      <Text style={[Gutters.smallBMargin, Common.textRegular]}>
        <Text style={styles.bulletPoint}>{'\u2B24'}</Text>
        {'   '}
        Jelas dan dapat dibaca, foto identitas tidak terpotong
      </Text>
      <Text style={Common.textRegular}>
        <Text style={styles.bulletPoint}>{'\u2B24'}</Text>
        {'   '}
        format file .jpg, .png dengan ukuran maksimal 2 MB
      </Text>
      <ProofInput
        containerStyle={Gutters.largeTMargin}
        requirementText="Ambil foto bagian depan dari KTP Anda"
        title="Kartu identitas"
      />
      <ProofInput
        containerStyle={styles.inputSpacing}
        requirementText="Ambil gambar dengan wajah anda"
        title="Kartu identitas"
      />
      <ProofInput
        containerStyle={styles.inputSpacing}
        onPress={navigationSigning}
        requirementText="Ambil tanda tangan anda"
        subtitle="Pastikan tanda tangan anda sama dengan yang ada di KTP"
        title="Tanda tangan"
      />
      <TouchableOpacity
        onPress={navigateSubmit}
        style={[Layout.center, styles.button]}
      >
        <Text style={[Common.textSmallBold, styles.textWhite]}>Verifikasi</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default VerificationContainer
