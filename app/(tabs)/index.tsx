import React, { useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const elenco = [
  {
    id: "1",
    nome: "Timothée Chalamet",
    papel: "Paul Atreides",
    imagem: require("../../assets/images/Duna ator 1.jpg"),
    sexo: "Masculino",
    dataNascimento: "1995-12-27",
    localNascimento: "Nova York, EUA",
    bio: `Timothée Chalamet é um ator americano nascido em Nova York, no dia 27 de dezembro de 1995. Ele é conhecido por sua atuação em filmes de grande sucesso como "Me Chame Pelo Seu Nome" e "Duna". A sua habilidade em interpretar personagens complexos e sua presença de palco o tornaram um dos jovens atores mais promissores de Hollywood. Chalamet iniciou sua carreira em 2008 e, ao longo dos anos, conquistou diversos prêmios e indicações, incluindo uma nomeação ao Oscar de Melhor Ator. Além de seu talento no cinema, Timothée é amplamente reconhecido por seu estilo pessoal único e sua postura como ícone fashion. Ele é um defensor de causas sociais, usando sua fama para promover discussões sobre questões políticas e ambientais.`,
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
    bio: `Zendaya Maree Stoermer Coleman, conhecida como Zendaya, nasceu em Oakland, Califórnia, no dia 1 de setembro de 1996. Ela ganhou reconhecimento mundial por seu papel na série de TV "Euphoria" e no filme "Duna". Zendaya é uma das figuras mais influentes da geração millennial, com uma carreira que abrange a atuação, a música e o ativismo. Desde jovem, ela demonstrou interesse pela arte, começando a atuar em comerciais e programas de TV. Sua versatilidade no palco e na tela, aliada a seu talento natural, fez dela uma das estrelas mais aclamadas da atualidade. Zendaya também é conhecida por ser uma voz ativa em prol de questões sociais e raciais, usando sua plataforma para inspirar e educar seus seguidores.`,
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
    bio: `Rebecca Ferguson é uma atriz sueca, nascida em Estocolmo, Suécia, no dia 19 de outubro de 1983. Ela é amplamente reconhecida por seu talento e sua presença de palco marcante, sendo uma das atrizes mais renomadas da sua geração. Ferguson ganhou notoriedade internacional após seu papel em "Missão Impossível: Nação Secreta" e, mais recentemente, em "Duna", onde interpreta a poderosa Lady Jessica. Ela também apareceu em outros filmes de sucesso como "O Sabotador" e "A Kidnapping". Rebecca é conhecida por sua abordagem intensa e profissional na preparação de seus papéis, sempre buscando a profundidade emocional dos personagens. Ela tem sido uma defensora das mulheres na indústria do entretenimento e continua a ser uma das figuras mais respeitadas do cinema contemporâneo.`,
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
    bio: `Oscar Isaac, nascido em 9 de março de 1979 na Guatemala, é um ator e músico talentoso, amplamente reconhecido por sua atuação em uma variedade de papéis em filmes aclamados pela crítica, incluindo "Ex Machina" e a franquia "Star Wars". Sua carreira começou no teatro, mas foi no cinema que ele realmente se destacou. Isaac tem um estilo de atuação único, que combina uma intensidade emocional com uma habilidade impressionante para interpretar personagens complexos. Além de seu trabalho em Hollywood, ele tem se envolvido com produções independentes e de arte, mostrando seu interesse por narrativas desafiadoras e criativas. Ele também se dedica a causas sociais, principalmente relacionadas aos direitos humanos e à justiça social.`,
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
    bio: `Javier Bardem, nascido em 1 de março de 1969 em Las Palmas, Espanha, é um dos atores mais renomados de sua geração. Ele é amplamente reconhecido por seu talento extraordinário e seu desempenho inesquecível em uma série de filmes aclamados pela crítica. Entre suas obras mais notáveis estão "Onde os Fracos Não Têm Vez", que lhe rendeu um Oscar de Melhor Ator Coadjuvante, e "Duna", onde interpreta o líder Stilgar. Bardem tem uma carreira que abrange tanto o cinema comercial quanto o cinema independente, sempre se destacando pela profundidade e intensidade de seus personagens. Além de sua carreira cinematográfica, ele é um ativista e defensor de causas ambientais e sociais, utilizando sua fama para promover mudanças no mundo.`,
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
    bio: `Stellan Skarsgård é um ator sueco nascido em Gotemburgo, Suécia, no dia 13 de junho de 1951. Com mais de 50 anos de carreira, Skarsgård se tornou um dos atores mais respeitados e prolíficos da sua geração. Ele é amplamente conhecido por seus papéis em filmes de grande sucesso, como "Os Vingadores" e "Duna", mas também tem uma vasta carreira no cinema europeu, incluindo colaborações com diretores renomados como Lars von Trier. Sua capacidade de interpretar uma ampla gama de personagens, de vilões a heróis complexos, o tornou um ícone do cinema mundial. Além de seu trabalho no cinema, Skarsgård também é ativo no teatro e em outras produções culturais.`,
    filmes: [
      { titulo: "Os Vingadores", data: "2012-05-04" },
      { titulo: "Duna", data: "2021-10-22" },
    ],
  },
];

const AtorItem = ({ ator }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpandido(!expandido)}>
      <View style={[styles.atorCard, expandido && styles.atorExpandido]}>
        <Image source={ator.imagem} style={styles.atorImagem} />
        <View style={styles.textContainer}>
          <Text style={styles.atorNome}>{ator.nome}</Text>
          <Text style={styles.atorPapel}>{ator.papel}</Text>
          {expandido && (
            <>
              <Text style={styles.atorBio}>{ator.bio}</Text>
              <Text style={styles.filmeTitulo}>Filmes</Text>
              {ator.filmes.map((filme, index) => (
                <Text key={index} style={styles.filmeItem}>🔹 {filme.titulo} ({filme.data})</Text>
              ))}
            </>
          )}
          {expandido && (
            <View style={styles.infoBar}>
              <Text style={styles.infoText}>Sexo: {ator.sexo}</Text>
              <Text style={styles.infoText}>Nascimento: {ator.dataNascimento}</Text>
              <Text style={styles.infoText}>Local: {ator.localNascimento}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ElencoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Duna 1 Elenco</Text>
      <FlatList
        data={elenco}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AtorItem ator={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8C07D", padding: 10 },
  titulo: { fontSize: 28, fontWeight: "bold", color: "#6D4C41", textAlign: "center", marginVertical: 15 },
  atorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C19A6B",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  atorExpandido: { backgroundColor: "#D2B48C", padding: 15 },
  atorImagem: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  textContainer: { flex: 1 },
  atorNome: { fontSize: 18, fontWeight: "bold", color: "#4E342E" },
  atorPapel: { fontSize: 14, color: "#5C4033" },
  atorBio: { fontSize: 14, color: "#5C4033", marginTop: 5 },
  infoBar: {
    marginTop: 10,
    padding: 5,
  },
  infoText: { fontSize: 12, color: "#4E342E", marginBottom: 5 },
  filmeTitulo: { fontSize: 16, fontWeight: "bold", marginTop: 10, color: "#4E342E" },
  filmeItem: { fontSize: 14, color: "#5C4033" },
});









