import React from "react";
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native";

const filme = {
  titulo: "Duna",
  descricao:
    "Em um futuro distante, Paul Atreides, um jovem brilhante e talentoso, deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo. E defender a honra de sua família, enfrentando os maiores inimigos possiveis.",
  orcamento: "165000000",
  voto: "8.0",
  duracao: "155 min",
  lancamento: "2021-10-22",
  imagem: require("../../assets/images/Duna.jpg"),
};

const elenco = [
  { id: "1", nome: "Timothée Chalamet", papel: "Paul Atreides", imagem: require("../../assets/images/Duna ator 1.jpg") },
  { id: "2", nome: "Zendaya", papel: "Chani", imagem: require("../../assets/images/Duna ator 2.jpg") },
  { id: "3", nome: "Rebecca Ferguson", papel: "Lady Jessica", imagem: require("../../assets/images/Duna ator 3.jpg") },
  { id: "4", nome: "Oscar Isaac", papel: "Duque Leto Atreides", imagem: require("../../assets/images/Duna ator 4.jpg") },
  { id: "5", nome: "Javier Bardem", papel: "Stilgar", imagem: require("../../assets/images/Duna ator 5.jpg") },
  { id: "6", nome: "Stellan Skarsgård", papel: "Barão Vladimir Harkonnen", imagem: require("../../assets/images/Duna ator 6.jpg") },
];

const AtorItem = ({ ator }) => (
  <View style={styles.atorCard}>
    <Image source={ator.imagem} style={styles.atorImagem} />
    <View>
      <Text style={styles.atorNome}>{ator.papel}</Text>
      <Text style={styles.atorPapel}>{ator.nome}</Text>
    </View>
  </View>
);

export default function DunaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={filme.imagem} style={styles.banner} />
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.descricao}>{filme.descricao}</Text>
        <View style={styles.detalhes}>
          <Text>Orçamento: {filme.orcamento}</Text>
          <Text>Voto: {filme.voto}</Text>
          <Text>Duração: {filme.duracao}</Text>
          <Text>Lançamento: {filme.lancamento}</Text>
        </View>
      </View>
      <Text style={styles.elencoTitulo}>Elenco</Text>
      <FlatList data={elenco} keyExtractor={(item) => item.id} renderItem={({ item }) => <AtorItem ator={item} />} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8C07D" }, // Cor de areia
  banner: { width: "100%", height: 220, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  infoContainer: { padding: 15, backgroundColor: "#D2B48C", borderRadius: 10, margin: 10 }, // Tom terroso
  titulo: { fontSize: 24, fontWeight: "bold", color: "#6D4C41" }, // Marrom escuro
  descricao: { fontSize: 16, marginVertical: 10, color: "#5C4033" },
  detalhes: { fontSize: 14, color: "#8B5E3B" },
  elencoTitulo: { fontSize: 22, fontWeight: "bold", marginLeft: 10, marginTop: 20, color: "#6D4C41" },
  atorCard: { 
    flexDirection: "row", 
    padding: 10, 
    alignItems: "center", 
    backgroundColor: "#C19A6B", // Tom de areia mais escuro
    marginVertical: 5, 
    borderRadius: 10, 
    shadowColor: "#000", 
    shadowOpacity: 0.2, 
    shadowOffset: { width: 0, height: 2 }, 
    elevation: 3 
  },
  atorImagem: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  atorNome: { fontSize: 16, fontWeight: "bold", color: "#4E342E" }, // Marrom escuro
  atorPapel: { fontSize: 14, color: "#5C4033" },
});


