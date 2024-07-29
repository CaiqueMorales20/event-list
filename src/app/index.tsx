import { useState } from 'react'
import {
  Alert,
  FlatList,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import { twMerge } from 'tailwind-merge'

import { Participant as ParticipantType } from '../@types/particpant'
import { Participant } from '../components/participant'

export default function Index() {
  const [user, setUser] = useState('')

  const [participants, setParticipants] = useState<ParticipantType[]>([])

  function handleAddParticipant({ name }: { name: string }) {
    if (participants.some((participant) => participant.name === name)) {
      Alert.alert('Already exists', `Participant ${name} already exists`)
    } else {
      setParticipants((prev) => [...prev, { name }])
      Alert.alert('Added', `Participant ${name} added`)
    }
  }

  function handleDeleteParticipant({ name }: { name: string }) {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete participant ${name}`,
      [
        {
          text: 'Yes',
          onPress: () => {
            setParticipants((prev) =>
              prev.filter((particpant) => particpant.name !== name),
            )
            setUser('')
            Alert.alert('Deleted')
          },
        },
        {
          text: 'No',
          onPress: () => Alert.alert('Canceled'),
        },
      ],
    )
  }

  return (
    <View className="flex-1 bg-neutral-900 p-8">
      <Text className="text-xl font-bold text-white">Caique Class</Text>
      <Text className="mb-4 text-base text-white/60">Monday, July 29</Text>
      <View className="mb-10 flex-row gap-2">
        <TextInput
          value={user}
          onChangeText={(text) => setUser(text)}
          placeholder="Participant name"
          className={twMerge(
            'h-12 flex-1 rounded-md border border-neutral-600 px-2 text-sm',
            Platform.OS === 'ios'
              ? 'text-white'
              : 'text-white placeholder:text-white/60',
          )}
        />
        <Pressable
          onPress={() => handleAddParticipant({ name: user })}
          className="h-12 w-12 items-center justify-center rounded-md bg-green-500"
        >
          <Text className="text-white">+</Text>
        </Pressable>
      </View>

      <FlatList
        contentContainerStyle={{ rowGap: 14 }}
        data={participants}
        keyExtractor={(participant) => participant.name}
        renderItem={({ item }) => (
          <Participant
            onRemove={() => handleDeleteParticipant({ name: item.name })}
            name={item.name}
          />
        )}
        ListEmptyComponent={() => (
          <Text className="text-white/60">Insert a participant.</Text>
        )}
      />
    </View>
  )
}
