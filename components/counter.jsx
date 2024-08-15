import { Normal } from '@/constants/constant'
import { Pressable, Text } from 'react-native'

export default function CounterButton({props, symbol}) {
  return (
    <Pressable onPress={props}>
      <Normal > {symbol} </Normal>
    </Pressable>
  )
}