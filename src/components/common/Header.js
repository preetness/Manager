import React from "react";
import { Text, View } from "react-native";

const styles = {
  viewStyle: {
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    height: 60,
    justifyContent: "center",
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>;
    </View>
  );
};
export { Header };
