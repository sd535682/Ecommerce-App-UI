import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Shopping",
          headerStyle: { backgroundColor: "lightblue" },
          headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
