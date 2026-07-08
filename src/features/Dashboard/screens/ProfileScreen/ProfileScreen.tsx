import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Clipboard,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BaseLayout, Text } from "@components";
import { colors } from "@theme";
import { User } from "@features/Auth/types/user";
export const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [user, setUser] = useState<User | null>(null);
  const [copied, setCopied] = useState(false);
  const [deviceToken, setDeviceToken] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("user_info").then((raw) => {
      if (raw) {
        try {
          setUser(JSON.parse(raw));
        } catch {}
      }
    });
    AsyncStorage.getItem("device_push_token").then((token) => {
      if (token) setDeviceToken(token);
    });
  }, []);

  const logout = async () => {
    await AsyncStorage.multiRemove(["user_token", "user_info"]);
    navigation.reset({ index: 0, routes: [{ name: "SignIn" }] });
  };

  const copyToken = () => {
    if (!deviceToken) return;
    Clipboard.setString(deviceToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const InfoRow = ({ label, value }: { label: string; value?: string | null }) => (
    <View style={styles.row}>
      <Text style={styles.value}>{value || "—"}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  return (
    <BaseLayout>
      <StatusBar backgroundColor={colors.BEIGE} barStyle="light-content" />
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={64} color={colors.WHITE} />
        <Text style={styles.headerName}>{user?.UserName || "..."}</Text>
        <Text style={styles.headerRole}>{user?.RoleName || ""}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>معلومات الحساب</Text>

        <View style={styles.card}>
          <InfoRow label="اسم المستخدم" value={user?.UserName} />
          <View style={styles.divider} />
          <InfoRow label="البريد الإلكتروني" value={user?.Email} />
          <View style={styles.divider} />
          <InfoRow label="رقم الهاتف" value={user?.Phone} />
          <View style={styles.divider} />
          <InfoRow label="الصلاحية" value={user?.RoleName} />
        </View>

        <Text style={styles.sectionTitle}>رمز الإشعارات</Text>

        <View style={styles.card}>
          <Text style={styles.tokenText} numberOfLines={3} selectable>
            {deviceToken || "لا يوجد رمز مسجل"}
          </Text>
          {deviceToken ? (
            <TouchableOpacity style={styles.copyBtn} onPress={copyToken}>
              <Feather
                name={copied ? "check" : "copy"}
                size={16}
                color={colors.WHITE}
              />
              <Text style={styles.copyBtnText}>
                {copied ? "تم النسخ" : "نسخ الرمز"}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Feather name="log-out" size={16} color={colors.WHITE} />
          <Text style={styles.logoutBtnText}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.BEIGE,
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 24,
    gap: 4,
  },
  headerName: {
    color: colors.WHITE,
    fontFamily: "Bold",
    fontSize: 18,
    marginTop: 8,
  },
  headerRole: {
    color: colors.WHITE,
    fontFamily: "Regular",
    fontSize: 13,
    opacity: 0.85,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontFamily: "Bold",
    fontSize: 14,
    color: "#555",
    textAlign: "right",
    marginBottom: 8,
    marginTop: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: {
    fontFamily: "Bold",
    fontSize: 13,
    color: "#888",
  },
  value: {
    fontFamily: "Regular",
    fontSize: 13,
    color: "#222",
    flexShrink: 1,
    textAlign: "left",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
  tokenText: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#444",
    textAlign: "left",
    lineHeight: 20,
    marginBottom: 12,
  },
  copyBtn: {
    backgroundColor: colors.BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  copyBtnText: {
    color: colors.WHITE,
    fontFamily: "Bold",
    fontSize: 13,
  },
  logoutBtn: {
    backgroundColor: "#e53935",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    marginTop: 4,
  },
  logoutBtnText: {
    color: colors.WHITE,
    fontFamily: "Bold",
    fontSize: 14,
  },
});
