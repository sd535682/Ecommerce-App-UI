import { Pressable, Text } from 'react-native'

export default function CounterButton({props}) {
  return (
    <Pressable onPress={props}>
      <Text style={{fontSize: 30, padding: 5}}>+</Text>
    </Pressable>
  )
}