import { colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  loginBox: {
    width: "85%",
    margin: 10,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },

  inputLabelContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,

  },

  inputContainer: {
    paddingHorizontal: 10,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },

  imgUploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1877d3",
    marginTop: 20,
  },


  profileImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.BEIGE,
  },
  imgUploadIcon: {
    width: 75,
    height: 75,
  },

  input: {
    textAlign: "right",
    paddingHorizontal: 10,
    width: "90%",
    height: 60,
    fontFamily: "Regular",

  },

  pwdInput: {
    textAlign: "right",
    paddingHorizontal: 10,
    width: "80%",
    height: 60,
    backgroundColor: "#fff",
    fontFamily: "Regular",
  },


  newAddTextArea: {
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: 160,
    fontFamily: "Regular",
  },


  newAddinput: {
    textAlign: "right",
    paddingHorizontal: 10,
    width: "100%",
    height: 60,
    fontFamily: "Regular",
  },
  primaryBtn: {
    backgroundColor: colors.BEIGE,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 40
  },
  btnText: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Bold",
    paddingVertical: 10
  },
  sperator: {
    width: "100%",
    marginTop: 50,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  socialBtn: {
    width: 100,
    height: 100
  },
  socialIcon: {
    marginHorizontal: 20,
    borderRadius: 25,
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  socilMedia: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "80%",
    height: 200,
    borderRadius: 20,
    resizeMode: "contain"
  },

  header: {
    marginTop: 50,
    fontSize: 25,
    fontFamily: "Bold",
    color: colors.BLUE,
    marginBottom: 20,
    width: "100%",
    textAlign: "center"
  }
});