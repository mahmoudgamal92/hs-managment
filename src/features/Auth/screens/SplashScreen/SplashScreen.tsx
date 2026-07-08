import { View, ActivityIndicator, Image } from "react-native";
import { Text } from "@components";
import React, { useState } from "react";
import { colors } from "@theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const SplashScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      _proceedProcess();
    }, []),
  );
  const _proceedProcess = async () => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem("user_token");
      if (token !== null) {
        navigation.replace("Home");
      } else {
        navigation.replace("SignIn");
      }
    }, 2000);
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#efefec",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("@assets/spalsh-logo.png")}
        style={{
          height: 400,
        }}
      />

      <Text
        style={{
          color: colors.BEIGE,
          fontFamily: "Bold",
          fontSize: 20,
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        هلا فيك بتطبيق اداره الحجوزات 👋👋
      </Text>
      <Text
        style={{
          color: colors.BEIGE,
          fontFamily: "Regular",
          fontSize: 20,
        }}
      >
        الرجاء الإنتظار قليلا
      </Text>

      <ActivityIndicator
        size={70}
        color={colors.BLUE}
        style={{
          marginVertical: 50,
        }}
      />
    </View>
  );
};
