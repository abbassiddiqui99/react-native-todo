import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Form from "./Form";
import Header from "./Header";
import TodoItems from "./TodoItems";

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: "bd7acbea",
      title: "First Item",
    },
    {
      id: "3ac68afc",
      title: "Second Item",
    },
    {
      id: "58694a0f",
      title: "Third Item",
    },
    {
      id: "bd7acbea1",
      title: "4th Item",
    },
    {
      id: "3ac68afc1",
      title: "5th Item",
    },
    {
      id: "58694a0f1",
      title: "6th Item",
    },
  ]);
  const onPressHandler = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const getDataHandler = (id) => {
    const getData = data.filter((item) => item.id === id);
    console.log(getData);
  };

  const onSubmitHandler = (text) => {
    setData((prevData) => {
      setData([
        { id: new Date().getTime().toString(), title: text },
        ...prevData,
      ]);
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>
        <View>
          {/* Header Here */}
          <Header />
          <View style={styles.content}>
            {/* Form Here */}
            <Form onSubmitHandler={onSubmitHandler} />
            <View style={styles.item}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TodoItems
                    item={item.title}
                    id={item.id}
                    onPressHandler={onPressHandler}
                    getDataHandler={getDataHandler}
                    navigation={navigation}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </Text>
    </View>

    // Edit HERE!!!!!!!

    // <View style={styles.container}>
    //   <Text>
    //     <View>
    //       {/* Header Here */}
    //       <Header />
    //       <View style={styles.content}>
    //         {/* Form Here */}
    //         <Form onSubmitHandler={onSubmitHandler} />
    //         <View style={styles.item}>
    //           <FlatList
    //             data={data}
    //             renderItem={({ item }) => (
    //               <TodoItems
    //                 item={item.title}
    //                 id={item.id}
    //                 onPressHandler={onPressHandler}
    //               />
    //             )}
    //             keyExtractor={(item) => item.id}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //   </Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   backgroundColor: "#fff",
  // },
  // content: {
  //   padding: 40,
  // },
  // item: {
  //   marginTop: 20,
  // },
});

export default Home;
