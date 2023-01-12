import { StyleSheet, View } from "react-native";

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Thu Jan 12 2023 10:52:15
 * Copyright (c) 2023
 */

const Row = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default Row;