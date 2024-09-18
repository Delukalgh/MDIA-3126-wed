import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>This is a page about cheese. 🧀</Text>;
      <Link href="/" asChild>
        <Pressable>
          <Text>Index 🍉</Text>
        </Pressable>
      </Link>
    </View>
  )
}
