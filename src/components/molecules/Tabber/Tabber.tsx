import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { colors } from "@theme";
type TabItem = {
    id: string | number;
    title: string;
};

type TabberProps = {
    data: TabItem[];
    selected: string | number;
    onSelect: (id: string | number) => void;
    widthPercent?: string; // e.g., "25%"
};

export const Tabber: React.FC<TabberProps> = ({
    data,
    selected,
    onSelect,
    widthPercent = "25%",
}) => {
    return (
        <View style={styles.tabber}>
            {data.map((item, index) => {
                const isSelected = selected === parseFloat(String(item.id));
                return (
                    <TouchableOpacity
                        key={String(item.id)}
                        onPress={() => onSelect(item.id)}
                        style={[
                            styles.tabItem,
                            {
                                backgroundColor: isSelected ? colors.BEIGE : colors.WHITE,
                                width: widthPercent,
                                borderLeftWidth: index !== 0 ? 1 : 0,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                { color: isSelected ? colors.WHITE : colors.BEIGE },
                            ]}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};