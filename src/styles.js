import {Dimensions, StyleSheet} from 'react-native';

const color = "#4e342e";

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1565c0',
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center"
  },
  todoText: {
    fontSize: 50,
    fontWeight: "bold",
    color
  },
  todoCount: {
    fontSize: 30,
    color 
  },
});

const todo_input =StyleSheet.create({
    inputContainer: {
        backgroundColor: "#bbdefb",
        padding: 5,
        margin:15,
        borderRadius: 10,
    },
    container: {
        backgroundColor: "#64b5f6",
    },
    buttonContainer: {
        backgroundColor: "#002171",
        padding: 10,
        margin: 10,
        width: Dimensions.get("window").width / 2,
        alignSelf: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    }
});


export {main, todo_input};
