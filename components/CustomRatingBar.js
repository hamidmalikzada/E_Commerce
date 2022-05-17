import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";



function CustomRatingBar({rating, width, height}) {
    const [defaultRating, setDefaultRating] = useState(rating);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    const starImgFilled =
      "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
    const starImgUnfilled =
      "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
  return (
    <View style={styles.cusotmRatingBar}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            <Image
              style={styles.starImg}
              source={
                item <= defaultRating
                  ? { uri: starImgFilled }
                  : { uri: starImgUnfilled }
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cusotmRatingBar: {
    flexDirection: "row",
    marginBottom: 10,
  },
  starImg: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
});
export default CustomRatingBar;
