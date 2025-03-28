import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, Switch, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import styles from "./styles";

//imagens adicionais 
const imagensDestaque = [
  require("../../assets/images/Duna deserto.jpg"),
  require("../../assets/images/Duna nave.jpg"),
  require("../../assets/images/Duna arte.jpg"),
  require("../../assets/images/Duna figurino.jpg"),
  require("../../assets/images/Duna armas.jpg"),
  require("../../assets/images/Duna arte1.jpg"),
  require("../../assets/images/Duna arte2.jpg"),
  require("../../assets/images/Duna atreides.jpg")
];

const elenco = [
  {
    id: "1",
    nome: "Timothée Chalamet",
    papel: "Paul Atreides",
    imagem: require("../../assets/images/Duna ator 1.jpg"),
    sexo: "Masculino",
    dataNascimento: "1995-12-27",
    localNascimento: "Nova York, EUA",
    bio: `Timothée Chalamet é um ator americano nascido em Nova York, no dia 27 de dezembro de 1995. Ele é conhecido por sua atuação em filmes de grande sucesso como "Me Chame Pelo Seu Nome" e "Duna".`,
    filmes: [
      { titulo: "Me Chame Pelo Seu Nome", data: "2017-01-22" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
  {
    id: "2",
    nome: "Zendaya",
    papel: "Chani",
    imagem: require("../../assets/images/Duna ator 2.jpg"),
    sexo: "Feminino",
    dataNascimento: "1996-09-01",
    localNascimento: "Oakland, EUA",
    bio: `Zendaya Maree Stoermer Coleman, conhecida como Zendaya, nasceu em Oakland, Califórnia, no dia 1 de setembro de 1996. Ela ganhou reconhecimento mundial por seu papel na série de TV "Euphoria" e no filme "Duna".`,
    filmes: [
      { titulo: "Homem-Aranha: Sem Volta Para Casa", data: "2021-12-17" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
  {
    id: "3",
    nome: "Rebecca Ferguson",
    papel: "Lady Jessica",
    imagem: require("../../assets/images/Duna ator 3.jpg"),
    sexo: "Feminino",
    dataNascimento: "1983-10-19",
    localNascimento: "Estocolmo, Suécia",
    bio: `Rebecca Ferguson é uma atriz sueca, nascida em Estocolmo, Suécia, no dia 19 de outubro de 1983. Ela é amplamente reconhecida por seu talento e sua presença de palco marcante.`,
    filmes: [
      { titulo: "Missão Impossível: Nação Secreta", data: "2015-07-31" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
  {
    id: "4",
    nome: "Oscar Isaac",
    papel: "Duque Leto Atreides",
    imagem: require("../../assets/images/Duna ator 4.jpg"),
    sexo: "Masculino",
    dataNascimento: "1979-03-09",
    localNascimento: "Guatemala, Guatemala",
    bio: `Oscar Isaac, nascido em 9 de março de 1979 na Guatemala, é um ator e músico talentoso, amplamente reconhecido por sua atuação em uma variedade de papéis em filmes aclamados pela crítica.`,
    filmes: [
      { titulo: "Star Wars: O Despertar da Força", data: "2015-12-18" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
  {
    id: "5",
    nome: "Javier Bardem",
    papel: "Stilgar",
    imagem: require("../../assets/images/Duna ator 5.jpg"),
    sexo: "Masculino",
    dataNascimento: "1969-03-01",
    localNascimento: "Las Palmas, Espanha",
    bio: `Javier Bardem, nascido em 1 de março de 1969 em Las Palmas, Espanha, é um dos atores mais renomados de sua geração.`,
    filmes: [
      { titulo: "Onde os Fracos Não Têm Vez", data: "2007-11-21" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
  {
    id: "6",
    nome: "Stellan Skarsgård",
    papel: "Barão Vladimir Harkonnen",
    imagem: require("../../assets/images/Duna ator 6.jpg"),
    sexo: "Masculino",
    dataNascimento: "1951-06-13",
    localNascimento: "Gotemburgo, Suécia",
    bio: `Stellan Skarsgård é um ator sueco nascido em Gotemburgo, Suécia, no dia 13 de junho de 1951. Com mais de 50 anos de carreira, Skarsgård se tornou um dos atores mais respeitados.`,
    filmes: [
      { titulo: "Os Vingadores", data: "2012-05-04" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
];

const filme = {
  titulo: "Duna",
  descricao: "Em um futuro distante, Paul Atreides, um jovem brilhante e talentoso, deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.",
  orcamento: "165,000,000",
  voto: "8.0",
  duracao: "155 min",
  lancamento: "2021-10-22",
  imagem: require("../../assets/images/Duna.jpg"),
  genero: "Ficção Científica",
  diretor: "Denis Villeneuve",
};

const AtorItem = ({ ator }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={[styles.card, expanded && styles.expandedCard]}>
        <Image source={ator.imagem} style={styles.atorImage} />
        <View style={styles.atorInfo}>
          <Text style={styles.atorNome}>{ator.nome}</Text>
          <Text style={styles.atorPapel}>{ator.papel}</Text>
          
          {expanded && (
            <>
              <Text style={styles.atorBio}>{ator.bio}</Text>
              <View style={styles.atorDetails}>
                <Text style={styles.detailText}>Sexo: {ator.sexo}</Text>
                <Text style={styles.detailText}>Nascimento: {ator.dataNascimento}</Text>
                <Text style={styles.detailText}>Local: {ator.localNascimento}</Text>
              </View>
              <Text style={styles.filmesTitle}>Filmes Notáveis:</Text>
              {ator.filmes.map((filme, index) => (
                <Text key={index} style={styles.filmeItem}>• {filme.titulo} ({filme.data})</Text>
              ))}
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [nome, setNome] = useState("");
  const [personagem, setPersonagem] = useState("Todos");
  const [sexo, setSexo] = useState("Todos");
  const [idadeMinima, setIdadeMinima] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const filtrarAtores = () => {
    return elenco.filter(ator => {
      const atendeNome = nome === "" || ator.nome.toLowerCase().includes(nome.toLowerCase());
      const atendePersonagem = personagem === "Todos" || ator.papel === personagem;
      const atendeSexo = sexo === "Todos" || ator.sexo === sexo;
      
      const anoNascimento = parseInt(ator.dataNascimento.split("-")[0]);
      const idade = 2023 - anoNascimento;
      const atendeIdade = idade >= idadeMinima;
      
      return atendeNome && atendePersonagem && atendeSexo && (mostrarDetalhes || atendeIdade);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* SEÇÃO DO FILME */}
        <View style={styles.filmeContainer}>
          <Image source={filme.imagem} style={styles.filmePoster} />
          <Text style={styles.filmeTitulo}>{filme.titulo} (2021)</Text>
          
          <View style={styles.filmeMeta}>
            <Text style={styles.metaItem}>🎬 {filme.diretor}</Text>
            <Text style={styles.metaItem}>⭐ {filme.voto}/10</Text>
            <Text style={styles.metaItem}>⏱️ {filme.duracao}</Text>
          </View>
          
          <Text style={styles.filmeDescricao}>{filme.descricao}</Text>
          
          <View style={styles.filmeInfo}>
            <Text style={styles.infoItem}>💰 Orçamento: ${filme.orcamento}</Text>
            <Text style={styles.infoItem}>📅 Lançamento: {filme.lancamento}</Text>
            <Text style={styles.infoItem}>🎭 Gênero: {filme.genero}</Text>
          </View>

          {/* GALERIA DE IMAGENS */}
          <Text style={styles.sectionTitle}>Galeria de Arrakis</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.galeriaContainer}
          >
            {imagensDestaque.map((imagem, index) => (
              <Image 
                key={index} 
                source={imagem} 
                style={styles.galeriaImagem} 
              />
            ))}
          </ScrollView>
        </View>

        {/* FILTROS */}
        <View style={styles.filtrosContainer}>
          <Text style={styles.sectionTitle}>Filtrar Elenco</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Buscar ator..."
            value={nome}
            onChangeText={setNome}
          />
          
          <View style={styles.filterRow}>
            <View style={styles.pickerContainer}>
              <Text style={styles.filterLabel}>Personagem</Text>
              <Picker
                selectedValue={personagem}
                onValueChange={setPersonagem}
                style={styles.picker}
              >
                <Picker.Item label="Todos" value="Todos" />
                <Picker.Item label="Paul Atreides" value="Paul Atreides" />
                <Picker.Item label="Chani" value="Chani" />
                <Picker.Item label="Lady Jessica" value="Lady Jessica" />
                <Picker.Item label="Duque Leto" value="Duque Leto Atreides" />
                <Picker.Item label="Stilgar" value="Stilgar" />
                <Picker.Item label="Barão Harkonnen" value="Barão Vladimir Harkonnen" />
              </Picker>
            </View>
            
            <View style={styles.pickerContainer}>
              <Text style={styles.filterLabel}>Sexo</Text>
              <Picker
                selectedValue={sexo}
                onValueChange={setSexo}
                style={styles.picker}
              >
                <Picker.Item label="Todos" value="Todos" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </View>
          </View>
          
          <View style={styles.sliderContainer}>
            <Text style={styles.filterLabel}>Idade mínima: {idadeMinima} anos</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={idadeMinima}
              onValueChange={setIdadeMinima}
              minimumTrackTintColor="#9c7c38"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#9c7c38"
            />
          </View>
          
          <View style={styles.switchContainer}>
            <Text style={styles.filterLabel}>Mostrar detalhes completos</Text>
            <Switch
              value={mostrarDetalhes}
              onValueChange={setMostrarDetalhes}
              trackColor={{ false: "#767577", true: "#9c7c38" }}
              thumbColor={mostrarDetalhes ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* LISTA DE ATORES */}
        <View style={styles.elencoContainer}>
          <Text style={styles.sectionTitle}>Elenco Principal</Text>
          <FlatList
            data={filtrarAtores()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <AtorItem ator={item} />}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}