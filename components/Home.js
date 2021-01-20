import React from "react";
import { useState } from "react";
import { FlatList, View, Text } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import FadeInView from "./animation/animation";
import Form from "./Form";
import Header from "./Header";
import TodoItems from "./TodoItems";

const Home = ({ navigation }) => {
  const todoListData = useSelector((state) => state.todo.items);
  // const checking = useSelector((state) => state.todo.checking);
  // const eventList = useSelector((state) => state.todo.eventList);
  const [checking, setChecking] = useState(false);
  const [previous, setPrevious] = useState(100);

  const headerComponent = () => (
    <View>
      <Header />
      <Form />
    </View>
  );

  const _onScroll = (e) => {
    // console.log(e);
    if (e > 100) {
      setChecking(true);
      // setPrevious(e);
      // this.setState({
      //   hide: true,
      //   previous: event,
      // });
    } else {
      setChecking(false);
      // setPrevious(e);
      // this.setState({
      //   hide: false,
      //   previous: event,
      // });
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 7 }}>
        <FlatList
          onScroll={(e) => _onScroll(e.nativeEvent.contentOffset.y)}
          data={todoListData}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TodoItems item={item.title} id={item.id} navigation={navigation} />
          )}
          ListHeaderComponent={headerComponent}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;
