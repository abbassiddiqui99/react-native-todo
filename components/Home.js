import React from "react";
import { SafeAreaView, Animated } from "react-native";
import { useSelector } from "react-redux";
import FadeInView from "./animation/animation";
import Header from "./Header";
import TodoItems from "./TodoItems";

const Home = ({ navigation }) => {
  const todoListData = useSelector((state) => state.todo.items);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 80);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
  });

  return (
    <FadeInView>
      <SafeAreaView>
        <Animated.View
          style={{
            transform: [{ translateY: translateY }],
            elevation: 1000,
            zIndex: 1000,
          }}
        >
          <Header navigation={navigation} />
        </Animated.View>

        <Animated.FlatList
          data={todoListData}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 80 }}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TodoItems item={item.title} id={item.id} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </SafeAreaView>
    </FadeInView>
  );
};

export default Home;
