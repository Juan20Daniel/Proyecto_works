import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Scroll Vertical</Text>

      {/* Contenido normal */}
      <View style={styles.box} />
      <View style={styles.box} />

      {/* Scroll Horizontal anidado */}
      <Text style={styles.subtitle}>Scroll Horizontal</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </ScrollView>

      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", margin: 10 },
  subtitle: { fontSize: 18, margin: 10 },
  box: { height: 200, backgroundColor: "#ccc", margin: 10, borderRadius: 10 },
  card: { width: 150, height: 150, backgroundColor: "#4084C3", margin: 10, borderRadius: 10 },
});