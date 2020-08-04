import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 448,
    width: "100%",
    backgroundColor: "#59ADFF",
    margin: "auto",
  },
  bgWhiteContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginTop: 50,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 48,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 32,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOffset: { width: 4, height: 2 },
    //     shadowOpacity: 0.6,
    //     shadowRadius: 6,
    //     elevation: 32,
    //   },
    //   android: {
    //     shadowColor: "pink",
    //     shadowOffset: { width: 8, height: -16 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 48,
    //     elevation: 16,
    //   },
    // }),
  },
  adsf: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginTop: 16,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 48,
  },
});