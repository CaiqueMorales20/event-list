import './global.css'

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

export default function HomeLayout() {
  return (
    <View className="flex-1 bg-neutral-900 pt-10">
      <StatusBar style="light" />
      <Slot />
    </View>
  )
}
