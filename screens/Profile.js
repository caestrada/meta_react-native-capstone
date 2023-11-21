import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  CheckBox,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaskedTextInput } from "react-native-mask-text";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderStatuses, setOrderStatuses] = useState(false);
  const [passwordChanges, setPasswordChanges] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedProfile = await AsyncStorage.getItem("profile");
        if (storedProfile !== null) {
          const profile = JSON.parse(storedProfile);
          setFirstName(profile.firstName || "");
          setEmail(profile.email || "");
        }
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage", error);
      }
    };

    loadProfile();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal information</Text>
      <Text style={styles.subheading}>Avatar</Text>

      <View style={styles.avatarSection}>
        {/* Add avatar image here */}
        <TouchableOpacity style={styles.button}>
          <Text>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
        <MaskedTextInput
          mask="(999) 999-9999"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
      </View>
      <View style={styles.notifications}>
        <Text>Email notifications</Text>
        {/* Add CheckBox components and labels here */}
      </View>
      <View style={styles.footerButtons}>
        <Button title="Log out" onPress={() => {}} />
        <Button title="Save changes" onPress={() => {}} />
        <Button title="Discard changes" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    // gap: 15,
  },
  title: {
    color: "#333333",
    fontSize: 22,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 12,
    marginBottom: 5,
    color: "#777",
  },
  input: {
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
  },
});
