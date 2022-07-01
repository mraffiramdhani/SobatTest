import React from 'react'
import { useTheme } from '@/Hooks'
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FBFAFB',
    borderWidth: 1,
    borderColor: '#A0A4AB',
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingTop: 40,
    paddingBottom: 26,
    paddingHorizontal: 40,
  },
  inputPromptContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginTop: 24,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#626262',
  },
})

interface ProofInputProps {
  containerStyle?: StyleProp<ViewStyle>
  title: string
  subtitle?: string
  requirementText: string
  onPress?: () => void
}

const ProofInput = (props: ProofInputProps) => {
  const { containerStyle, requirementText, title, subtitle, onPress } = props
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View style={containerStyle}>
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <Text style={[Common.textSmallBold, Gutters.smallRMargin]}>
          {title}
        </Text>
        <MaterialIcon name="info" size={14} color="#A0A4AB" />
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <TouchableOpacity
        onPress={onPress}
        style={[Layout.center, Gutters.smallTMargin, styles.inputContainer]}
      >
        <Feather name="folder-plus" size={37} color="black" />
        <Text
          style={[Fonts.textCenter, Gutters.smallTMargin, Common.textRegular]}
        >
          {requirementText}
        </Text>
        <View
          style={[Layout.center, Layout.fullWidth, styles.inputPromptContainer]}
        >
          <Text style={[Fonts.textCenter, Common.textRegular]}>
            Ambil gambar atau upload
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProofInput
