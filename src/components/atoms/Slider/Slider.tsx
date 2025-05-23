import React from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const Slider = ({ banners }) => {
    const mediaURL = "https://alhajz-alsarea.com/ImagesRepository/";

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {banners
                .filter(b => b.isActive)
                .sort((a, b) => a.displayOrder - b.displayOrder)
                .map((banner) => (
                    <Image
                        key={banner.id}
                        source={{ uri: mediaURL + banner.bannerName }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180,
    },
    image: {
        width,
        height: 180,
    },
});