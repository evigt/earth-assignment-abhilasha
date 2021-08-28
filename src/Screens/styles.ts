import { StyleSheet } from "react-native";
import { scaledValue } from "../utils/design.utils";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardView: {
        width: scaledValue(327),
        backgroundColor: "#3C5367",
        borderRadius: scaledValue(14),
        marginTop: scaledValue(205),
    },
    currency: {
        fontSize: scaledValue(32),
        color: "#fff",
        marginTop: scaledValue(15.86),
    },
    currencyStats: {
        marginTop: scaledValue(13),
        color: "#55D171",
    },
    cardContentView: {
        alignItems: "center",
    },
    networkCardView: {
        backgroundColor: "#282D3F",
        borderRadius: scaledValue(12),
        marginTop: scaledValue(20.14),
        paddingVertical: scaledValue(17)
    },
    threeDotIcon: {
        position: "absolute",
        left: scaledValue(284),
        top: scaledValue(27.36),
        width: scaledValue(19),
        height: scaledValue(3),
    },
    avatarPlusIcon: {
        backgroundColor: '#80858F'
    },
    networkText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: scaledValue(16),
    },
    networkTextView: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: scaledValue(10),
        alignItems: 'center',
        marginBottom: scaledValue(14.98)
    },
    backgroundImage: {
        flex: 1, 
        alignItems: 'center',
    }
});
