import * as React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import { colors } from '@theme';
import { styles } from './styles';

type LoaderProps = {
    visible: boolean;
    testID?: string;
};

export const Loader = (props: LoaderProps) => {

    return (
        <Modal
            visible={props.visible}
            statusBarTranslucent={true}
            transparent={true}
            hardwareAccelerated={true}
        >
            <View style={styles.mainContainer}>
                <View
                    style={[
                        styles.insideContainer,
                        {
                            backgroundColor: colors.WHITE,
                        },
                    ]}>
                    <ActivityIndicator
                        color={colors.BLUE}
                        size={'small'}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default Loader;
