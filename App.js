import React, { useState, useRef } from 'react';
import
  {
    ScrollView,
    SafeAreaView,
    //StatusBar,
    View,
    Dimensions,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    Image
  } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './global';

const { width: screenWidth, height: screenHeight }
  = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);

  // Dados estáticos
  const [listing, setListing] = useState([
    {
      title: 'O Irlandês',
      text: 'Um assassino envelhecido lembra seu tempo na máfia e os eventos que se cruzam com seu amigo Jimmy Hoffa, entre os anos 1950 e 1970.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg'
    },
    {
      title: 'O Homem Invisível',
      text: 'Quando o ex abusivo de Cecilia tira a própria vida e deixa sua fortuna, ela suspeita que a morte dele tenha sido uma farsa.',
      release: 2020,
      img: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
    },
    {
      title: '1917',
      text: '6 de abril de 1917, dois soldados são designados para correr contra o tempo e entregar uma mensagem que impedirá 1.600 homens de caminharem direto para uma armadilha mortal.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
    },
    {
      title: 'Aves de Rapina',
      text: 'Depois de se separar do Coringa, Harley Quinn se junta aos super-heróis Black Canary, Huntress e Renee Montoya para salvar uma jovem de um senhor do crime.',
      release: 2020,
      img: 'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    },
    {
      title: 'Coringa',
      text: 'Em Gotham City, o comediante com problemas mentais Arthur Fleck é isolado e maltratado pela sociedade. Esse caminho o coloca frente a frente com seu alter-ego: o Coringa.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
      title: 'Parasita',
      text: 'A ganância e a discriminação de classe ameaçam o recém-formado relacionamento simbiótico entre a rica família Park e o pobre clã Kim.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
      title: 'O Poço',
      text: 'Uma prisão vertical com um andar por nível. Duas pessoas por andar. Uma única plataforma com alimentos e dois minutos por dia para se alimentar.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX675_AL_.jpg'
    },
    {
      title: 'Era Uma Vez em Hollywood',
      text: 'Um ator de televisão despojado e seu dublê se esforçam para alcançar fama e sucesso na indústria cinematográfica durante os últimos anos da Era de Ouro de Hollywood, em 1969.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
      title: 'Bad Boys Para Sempre',
      text: 'Os detetives de Miami Mike Lowrey e Marcus Burnett devem enfrentar um casal de traficantes de mãe e filho que causam estragos vingativos em sua cidade.',
      release: 2020,
      img: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
      title: 'Pokémon: Detetive Pikachu',
      text: 'Em um mundo onde as pessoas colecionam Pokémon para a batalha, um garoto encontra um Pikachu falante inteligente que procura ser um detetive.',
      release: 2019,
      img: 'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
      title: 'Sonic: O Filme',
      text: 'Depois de descobrir um ouriço pequeno, azul e rápido, um policial da pequena cidade deve ajudá-lo a derrotar um gênio do mal que deseja fazer experiências com ele.',
      release: 2020,
      img: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    }
  ]);

  const [background, setBackground] = useState(listing[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  // prop item, index (item atual)
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={{ uri: item.img }}
            style={styles.carouselImg}
          />

          <Text style={styles.carouselTitle}>
            { item.title }
          </Text>
          <MaterialIcons
            name="play-circle-outline"
            size={30}
            color="#FFF"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          height: screenHeight
        }}
      >
        {/*
        <StatusBar
          barStyle="light-content"
        />
        */}
        <View style={styles.wrapper}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.bgImg}
            blurRadius={3}
          >
            <View style={styles.search}>
              <TextInput
                style={styles.input}
                placeholder="Procurando algo?"
                placeholderTextColor="#000"
              />

              <TouchableOpacity style={styles.icon}>
                <MaterialIcons
                  name="search"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>
              Acabou de chegar
            </Text>

            <View style={styles.slide}>
              <Carousel
                style={styles.carousel}
                ref={ carouselRef }
                data={ listing }
                renderItem={ _renderItem }
                sliderWidth={ screenWidth }
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(listing[index].img);
                  setActiveIndex(index);
                }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>
                  { listing[activeIndex].title }
                </Text>
                <Text style={styles.movieText}>
                  { listing[activeIndex].text }
                </Text>
                <Text style={styles.movieRelease}>
                  { listing[activeIndex].release }
                </Text>
              </View>

              <TouchableOpacity>
                <MaterialIcons
                  name="queue"
                  color="#141414"
                  size={30}
                  style={{
                    marginRight: 20,
                    marginTop: 7
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
