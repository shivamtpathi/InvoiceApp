import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {PdfCode} from './PdfCode';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import dateFormat from 'dateformat';
const Detail = () => {
  const [name, setname] = useState(' ');
  const [Address, setAddress] = useState(' ');
  const [Total, setTotal] = useState(' ');
  const [ReceivedAmount, setReceivedAmount] = useState(' ');
  const [RemainingBalance, setRemainingBalance] = useState('Paid ');
  const [PaymentMethod, setPaymentMethod] = useState(' ');
  const [Number, setNumber] = useState(' ');
  const [Quantity, setQuantity] = useState(' ');
  const date = new Date();

  const [Invoice, setInvoice] = useState(dateFormat(date, 'ddmmyyhhMss'));
  const [Product, setProduct] = useState();

  // console.log(Product);

  const printPDF = async () => {
    let html = PdfCode(
      name,
      Address,
      Number,
      Quantity,
      Invoice,
      Product,
      Total,
      ReceivedAmount,
      PaymentMethod,
      RemainingBalance,
    );

    const results = await RNHTMLtoPDF.convert({
      html: html,
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollcontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Full name"
            onChangeText={text => setname(text)}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Address</Text>
          <TextInput
            style={styles.input}
            value={Address}
            placeholder="Full Address"
            onChangeText={text => setAddress(text)}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={Number}
            placeholder="1234567890"
            onChangeText={text => setNumber(text)}
            keyboardType="number-pad"></TextInput>
        </View>

        {/* ................................................ */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Product:</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={Product}
              onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}>
              <Picker.Item label="ChooseProduct" value="ChooseProduct" />
              <Picker.Item label="Shirt" value="Shirt" />
              <Picker.Item label="Mobile" value="Mobile" />
            </Picker>
          </View>
        </View>
        {/* .............................. */}

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Quantity:</Text>
          <TextInput
            style={styles.input}
            value={Quantity}
            placeholder="Quantity"
            onChangeText={text => setQuantity(text)}
            keyboardType="number-pad"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Invoice No: </Text>
          <TextInput
            style={styles.input}
            value={Invoice}
            keyboardType="numeric"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Total:</Text>
          <TextInput
            style={styles.input}
            value={Total}
            placeholder="Total ₹"
            onChangeText={text => setTotal(text)}
            keyboardType="number-pad"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Received Amount:</Text>
          <TextInput
            style={styles.input}
            value={ReceivedAmount}
            placeholder="Received ₹"
            onChangeText={text => setReceivedAmount(text)}
            keyboardType="number-pad"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Remaining Balance:</Text>
          <TextInput
            style={styles.input}
            value={RemainingBalance}
            placeholder="Remaining ₹"
            onChangeText={text => setRemainingBalance(text)}
            keyboardType="number-pad"></TextInput>
        </View>

        {/* .... */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Payment Method:</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={PaymentMethod}
              onValueChange={(itemValue, itemIndex) =>
                setPaymentMethod(itemValue)
              }>
              <Picker.Item label="ChooseMethod" value="ChooseMethod" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Card" value="Card" />
            </Picker>
          </View>
        </View>
      </ScrollView>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={printPDF}>
          <Text style={styles.btnText}>Create Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollcontainer: {
    margin: 15,
  },
  inputContainer: {},
  input: {
    borderWidth: 1,
    marginVertical: 10,
    height: 40,
    justifyContent: 'center',
  },
  inputText: {
    fontWeight: 'bold',
    color: '#454545',
    fontSize: 16,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
