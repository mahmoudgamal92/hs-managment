import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Entypo
} from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { toastConfig } from "@utils";
import { styles } from './styles';
import { useAuthentication } from "@features/Auth/hooks";

export const SignInScreen = ({ route, navigation }) => {
  const { signUser, loading } = useAuthentication({

    onSuccess: () => {
      navigation.navigate('Home')
    },

    onError: () => {
      Toast.show({
        type: "erorrToast",
        text1: " يرجى التحقق من صحة اسم المستخدم وكلمة المرور",
        bottomOffset: 80,
        visibilityTime: 2000
      });
    }
  })

  //maitham_albaladawy@yahoo.com
  //P@ssw0rd
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);


  const signIn = async () => {
    signUser(email, password);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <StatusBar backgroundColor="#F3F5F7" barStyle="default" />
      <View style={[styles.loginBox, { marginTop: 0 }]}>
        <Image source={require("@assets/logo.png")} style={styles.logo} />
        <Text style={styles.header}>تسجيل الدخول</Text>
        <View style={styles.inputContainer}>
          <View style={{ width: "10%" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="grey"
            />
          </View>
          <TextInput
            defaultValue={email}
            style={styles.input}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            placeholder="البريد الإلكتروني"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={{ width: "10%" }}>
            <Feather name="lock" size={24} color="grey" />
          </View>
          <TextInput
            defaultValue={password}
            style={styles.pwdInput}
            onChangeText={text => setPassword(text)}
            secureTextEntry={passwordVisible}
            placeholder="كلمة المرور"
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={{ width: "10%" }}
          >
            {passwordVisible == true
              ? <AntDesign name="eye" size={24} color="grey" />
              : <Entypo name="eye-with-line" size={24} color="black" />}
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.primaryBtn} onPress={() => signIn()}>
          {loading == true
            ? <ActivityIndicator size={40} color="#FFF" />
            : <Text style={styles.btnText}>دخول</Text>}
        </TouchableOpacity>

      </View>

      <Toast config={toastConfig} />
    </ScrollView>
  );
}