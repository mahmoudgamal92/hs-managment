import { Dimensions, StyleSheet } from "react-native";


const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
   
toastContainer: {
    flexDirection: "row",
    height: 80,
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16
  },

  toastIcon: {
    flexDirection: "row-reverse",
    width: "15%",
    justifyContent: "space-between"
  },

  modalToastBody: {
    height: 200,
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 5,
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16
  },


  modalContainer: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  });
