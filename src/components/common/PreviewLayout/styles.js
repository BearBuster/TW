import {StyleSheet} from 'react-native';
import colors from '../../../assets/thems/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: colors.danger,
      },
      box: {
        width: 50,
        height: 50,
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: colors.secondary,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
      },
      selected: {
        backgroundColor: colors.primary,
        borderWidth: 0,
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        textAlign: 'center',
      },
      selectedLabel: {
        color: "white",
      },
      label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
      },
})