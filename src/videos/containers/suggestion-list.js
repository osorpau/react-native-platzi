import React from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}
class SuggestionList extends React.Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias T_T" />;
  itemSeparator = () => <Separator />;
  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ItemSeparatorComponent={this.itemSeparator}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SuggestionList);
