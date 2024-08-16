import { Stack } from "expo-router";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
