import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	useColorScheme,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export default function Home() {
	const colorScheme = useColorScheme()
	const [searchText, setSearchText] = useState("")

	const isDarkMode = colorScheme === "dark"

	return (
		<View
			className={`flex-1 ${
				isDarkMode ? "bg-gray-900" : "bg-gray-100"
			} justify-center items-center`}
		>
			{/* Header */}
			<View
				className={`w-full py-10 ${
					isDarkMode ? "bg-blue-900" : "bg-blue-600"
				} justify-center items-center`}
			>
				<Text className="text-white text-4xl font-bold">Welcome</Text>
			</View>

			{/* Main Content */}
			<View className="flex-1 justify-center items-center">
				<Text
					className={`text-lg ${
						isDarkMode ? "text-gray-300" : "text-gray-800"
					}`}
				>
					Explore the app using the search below!
				</Text>
			</View>

			{/* Search Bar */}
			<View className="absolute bottom-28 w-11/12 bg-white rounded-full flex-row items-center px-4 shadow-lg">
				<Ionicons
					name="search"
					size={24}
					color="#aaa"
				/>
				<TextInput
					className="flex-1 h-12 text-lg ml-2"
					placeholder="Search..."
					placeholderTextColor="#aaa"
					value={searchText}
					onChangeText={setSearchText}
				/>
			</View>

			{/* Button Below Search Bar */}
			<TouchableOpacity
				className={`absolute bottom-8 w-11/12 py-4 rounded-full ${
					isDarkMode ? "bg-blue-700" : "bg-blue-500"
				} justify-center items-center shadow-md`}
				onPress={() => alert(`Searching for: ${searchText}`)}
			>
				<Text className="text-white text-lg font-semibold">Search</Text>
			</TouchableOpacity>
		</View>
	)
}
// import { Image, StyleSheet, Platform } from "react-native"

// import { HelloWave } from "@/components/HelloWave"
// import ParallaxScrollView from "@/components/ParallaxScrollView"
// import { ThemedText } from "@/components/ThemedText"
// import { ThemedView } from "@/components/ThemedView"

// export default function HomeScreen() {
// 	return (
// 		<ParallaxScrollView
// 			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
// 			headerImage={
// 				<Image
// 					// source={require('@/assets/images/partial-react-logo.png')}
// 					source={require("@/assets/images/blublocks.png")}
// 					style={styles.reactLogo}
// 				/>
// 			}
// 		>
// 			<ThemedView style={styles.titleContainer}>
// 				<ThemedText type="title">Welcome!</ThemedText>
// 				<HelloWave />
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
// 				<ThemedText>
// 					Edit{" "}
// 					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
// 					to see changes. Press{" "}
// 					<ThemedText type="defaultSemiBold">
// 						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
// 					</ThemedText>{" "}
// 					to open developer tools.
// 				</ThemedText>
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
// 				<ThemedText>
// 					Tap the Explore tab to learn more about what's included in this
// 					starter app.
// 				</ThemedText>
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// 				<ThemedText>
// 					When you're ready, run{" "}
// 					<ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
// 					to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
// 					directory. This will move the current{" "}
// 					<ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
// 					<ThemedText type="defaultSemiBold">app-example</ThemedText>.
// 				</ThemedText>
// 			</ThemedView>
// 		</ParallaxScrollView>
// 	)
// }

// const styles = StyleSheet.create({
// 	titleContainer: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		gap: 8,
// 	},
// 	stepContainer: {
// 		gap: 8,
// 		marginBottom: 8,
// 	},
// 	reactLogo: {
// 		height: 178,
// 		width: 290,
// 		bottom: 0,
// 		left: 0,
// 		position: "absolute",
// 	},
// })
