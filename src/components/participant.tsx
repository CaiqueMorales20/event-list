import { Pressable, Text, View } from 'react-native'

export function Participant({
  name,
  onRemove,
}: {
  name: string
  onRemove: () => void
}) {
  return (
    <View className="bg-neutral-1000 h-12 w-full flex-1 flex-row items-center justify-between gap-4 rounded-md bg-neutral-800">
      <View className="flex-1 pl-6">
        <Text className="text-sm text-white">{name}</Text>
      </View>
      <Pressable
        onPress={onRemove}
        className="h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white"
      >
        <Text className="leading-none text-white">-</Text>
      </Pressable>
    </View>
  )
}
