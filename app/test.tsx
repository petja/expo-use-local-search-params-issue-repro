import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

export default function TestPage() {
  const localParams = useLocalSearchParams();
  return <ThemedText>{JSON.stringify(localParams, null, 2)}</ThemedText>;
}
