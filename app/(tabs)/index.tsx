import React from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

export default function App() {
	return (
		<View style={styles.container}>
			{/* Status Bar */}
			<StatusBar barStyle="light-content" />

			{/* Header */}
			<LinearGradient
				colors={["#4c669f", "#3b5998", "#192f6a"]}
				style={styles.header}
			>
				<Text style={styles.headerText}>Header</Text>
			</LinearGradient>

			{/* Main Content */}
			<View style={styles.content}></View>

			{/* Hamburger Menu Button */}
			<TouchableOpacity style={styles.hamburgerButton}>
				<Ionicons
					name="menu"
					size={32}
					color="#fff"
				/>
			</TouchableOpacity>

			{/* Search Bar */}
			<View style={styles.searchBarContainer}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search..."
					placeholderTextColor="#aaa"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	header: {
		height: 80,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
	},
	headerText: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "bold",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBarContainer: {
		position: "absolute",
		bottom: 30,
		left: 20,
		right: 20,
		backgroundColor: "#fff",
		borderRadius: 25,
		paddingHorizontal: 20,
		elevation: 5,
	},
	searchInput: {
		height: 50,
		fontSize: 18,
		color: "#333",
	},
	hamburgerButton: {
		position: "absolute",
		bottom: 100,
		alignSelf: "center",
		backgroundColor: "#3b5998",
		borderRadius: 35,
		height: 70,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
		elevation: 10,
	},
})

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
