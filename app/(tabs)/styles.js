import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6CA',
    padding: 15,
  },
  
  // Seção do Filme
  filmeContainer: {
    backgroundColor: '#E8C07D',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#9C7C38',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#B8860B',
  },
  filmePoster: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#9C7C38',
  },
  filmeTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
  },
  filmeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  metaItem: {
    color: '#5C4033',
    fontSize: 14,
    fontWeight: '500',
  },
  filmeDescricao: {
    color: '#5C4033',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },
  filmeInfo: {
    borderTopWidth: 1,
    borderTopColor: '#9C7C38',
    paddingTop: 10,
  },
  infoItem: {
    color: '#5C4033',
    fontSize: 14,
    marginBottom: 5,
  },

  // Galeria
  galeriaContainer: {
    marginVertical: 15,
  },
  galeriaImagem: {
    width: 180,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#9C7C38',
  },

  // Filtros
  filtrosContainer: {
    backgroundColor: '#D2B48C',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#B8860B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F5DEB3',
    color: '#5C4033',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#B8860B',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  picker: {
    backgroundColor: '#F5DEB3',
    color: '#5C4033',
  },
  filterLabel: {
    color: '#5C4033',
    fontSize: 14,
    marginBottom: 5,
  },
  sliderContainer: {
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  // Cards de Atores
  card: {
    backgroundColor: '#E8C07D',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9C7C38',
    shadowColor: '#5C4033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  expandedCard: {
    backgroundColor: '#D2B48C',
  },
  atorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#9C7C38',
  },
  atorInfo: {
    flex: 1,
  },
  atorNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 3,
  },
  atorPapel: {
    fontSize: 14,
    color: '#8B4513',
    marginBottom: 5,
  },
  atorBio: {
    fontSize: 13,
    color: '#5C4033',
    lineHeight: 18,
    marginBottom: 8,
  },
  atorDetails: {
    marginBottom: 8,
  },
  detailText: {
    fontSize: 13,
    color: '#5C4033',
    marginBottom: 3,
  },
  filmesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  filmeItem: {
    fontSize: 13,
    color: '#5C4033',
    marginBottom: 3,
  },
});