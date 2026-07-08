import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from '../../atoms/Text/Text';
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
    widthPercent?: string | number;
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
                const isSelected = String(selected) === String(item.id);
                return (
                    <TouchableOpacity
                        key={String(item.id)}
                        onPress={() => onSelect(item.id)}
                        style={[
                            styles.tabItem,
                            {
                                backgroundColor: isSelected ? colors.BEIGE : colors.WHITE,
                                borderLeftWidth: index !== 0 ? 1 : 0,
                                width: widthPercent,
                            },
                        ]}>
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