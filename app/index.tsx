import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={{
          backgroundColor: "lime",
          paddingVertical: 16,
          paddingHorizontal: 32,
        }}
        onPress={() => {
          router.push({
            pathname: "/test",
            params: {
              date: new Date().toISOString(),
            },
          });
        }}
      >
        <Text>Press here</Text>
      </Pressable>
    </View>
  );
}
