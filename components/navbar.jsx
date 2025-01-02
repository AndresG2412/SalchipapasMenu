import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const RadioButtonGroup = () => {
    const [selected, setSelected] = useState(1); // Cambié el valor inicial al índice del elemento seleccionado
  
    const options = [
      require('../images/perfil2.png'), 
      require('../images/menu2.png'), 
      require('../images/car2.png')
    ];
  
    return (
      <View style={styles.radioGroup}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index} // Uso el índice como clave única
            style={[
              styles.radio,
              selected === index && styles.radioSelected,
            ]}
            onPress={() => setSelected(index)} // Selecciona el índice del elemento
          >
            <Image style={styles.imageNavbar} source={option} />
          </TouchableOpacity>
        ))}
      </View>
    );
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 8,
    backgroundColor: "#7238C9",
    padding: 4,
    width: 300,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  radio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  radioSelected: {
    backgroundColor: "black",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  radioText: {
    color: "rgba(51, 65, 85, 1)",
    transition: "all 0.15s ease-in-out",
  },
  radioTextSelected: {
    fontWeight: "600",
  },
  imageNavbar: {
    height: 50,
    width: 50,
    resizeMode: 'stretch'
  }
});

export default RadioButtonGroup;
