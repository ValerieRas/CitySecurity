import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {

    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#CFEBF4" }]}
              onPress={onPress}
            >
              <FontAwesome
                name="envelope"
                size={18}
                color="#ffd33d"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "grey" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'grey',
    fontSize: 20,
  },
});
