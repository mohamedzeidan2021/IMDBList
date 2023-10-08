import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.
  // Extract movie data from the movieItem prop
  const { title, year, poster, actors, imdbRating, posterurl } = movieItem;

  return (
    <View style={styles.movieCell}>
      <View style={styles.movieCellLeft}>
        <Image style={styles.movieCellImage} source={{ uri:posterurl }} />
      </View>
      <View style={styles.movieCellRight}>
        <Text style={styles.movieCellTitle}>{title}</Text>
        <Text style={styles.movieCellSubtitle}>Year: {year}</Text>
        <Text style={styles.movieCellSubtitle}>{actors.join(", ")}</Text>
      </View>

    </View>
  );
};