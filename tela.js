import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';
export default class SectionListBasics extends Component {
   state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      
      <View style={styles.container}>

         <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Protocolo digital Sepse', style: { color: '#fff' } }}
            rightComponent={{ icon: 'search', color: '#fff' }}
        />
        <SectionList
          sections={[
            {title: 'Pacientes em Tratamento', data: ['Devin']},
            {title: 'Pacientes para Avaliação', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   borderWidth: 1.5,
   borderColor: '#d6d7da'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

