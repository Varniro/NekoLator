import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Dimensions, Platform, PixelRatio } from 'react-native';
import { HStack, Pressable} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

var operation;

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
} 

export function checkSize(str){
  if(str.toString().length>14){
    return 30
  }else if(str.toString().length>9){
    return 40
  }else{
    return 50
  }

  return 50
} 

export function calc(num1, num2, op){
  if(op == '/'){
    console.log(num1/num2)
    return num1/num2;
  }else if(op == '*'){
    console.log(num1*num2)
    return num1*num2;
  }else if(op == '-'){
    console.log(num1-num2)
    return num1-num2;
  }else if(op == '+'){
    console.log(num1+num2)
    return num1+num2;
  }
}

export default function App() {
  const name = '0';
  const element = <h1>Hello, {name}</h1>;

  const [text, setText] = useState('');
  const [numText, setNumText] = useState('');
  const [nextNum, toggleNext] = useState(false);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState(0);
  const [firstOp, toggleFirst] = useState(true);
  //const [bigFont, setBigFont] = useState(50);
  //const[operation, setOperation] = useState(' ');
  var bigFont = (checkSize(numText)); 


  return (
    <>
    <View style={styles.container1}>
    <Text style={{fontSize:20, alignSelf: 'flex-end', flexDirection: 'row-reverse', margin: 7.5}}>{text}</Text>  
    <Text style={{fontSize:bigFont, alignSelf: 'flex-end', flexDirection: 'row-reverse', margin: 7.5}}>{numText}</Text>  
    <StatusBar style="auto" />
    </View>


    <View style={styles.container2}>
    <HStack m={4} spacing={5}>
    <Pressable style= {styles.btn}
      onPressIn={() => {
        if(firstOp == true){
          if(numText != ''){
            setNumText(parseFloat(numText)/100), 
            toggleNext(true), 
            toggleFirst(false)
          }
        }else if(nextNum == false){
          setText(num1 + operation + parseFloat(numText)/100),
          setNumText(parseFloat(numText)/100) 
          //toggleFirst(true),
          //toggleNext(true)
        }else{
          
        }
        bigFont = (checkSize(numText))
      }
      }
    ><Text variant="button" style={styles.txt}>%</Text></Pressable>
      <Pressable style= {styles.btn}
        onPressIn={() => {setNumText(''), setText(''), setNum1(0), toggleFirst(true)}}
      ><Text variant="button" style={styles.txt}>C</Text></Pressable>
      <Pressable style= {styles.btn}
        onPressIn={() => {
          if(firstOp == true){
            setNumText(''), setText(''), setNum1(0), toggleFirst(true)
          }else{
            setNumText('')
          }}}
      ><Text variant="button" style={styles.txt}>CE</Text></Pressable>
      <Pressable style= {styles.btn}
        onPressIn={() => {setNumText((current) => current.toString().slice(0,-1)),  bigFont = (checkSize(numText))}}
      ><Icon name="backspace" size={normalize(45)}></Icon></Pressable>
    </HStack>

    <HStack m={4} spacing={5}>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'7')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>7</Text>
      </Pressable>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'8')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>8</Text>
      </Pressable>
      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'9')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>9</Text>
      </Pressable>
      <Pressable style= {styles.btn}
        onPressIn={() => {
          if(firstOp == true){
            operation = '/'
            if(numText != ''){
              setText((current) => numText + '/'), 
              toggleNext(true), 
              setNum1(parseFloat(numText)),
              toggleFirst(false)
            }
          }else if(nextNum == false){
            setText(calc(num1,parseFloat(numText),operation) + '/'),
            setNumText(calc(num1,parseFloat(numText),operation)),
            //toggleFirst(true),
            setNum1(calc(num1,parseFloat(numText),operation))
            toggleNext(true)
            operation = '/'
          }else{
            setText((current) => numText + '/')
            operation = '/'
          }
          bigFont = (checkSize(numText))
        }}
      >
        <Text variant="button" style={styles.txt}>÷</Text>
      </Pressable>
    </HStack>

    <HStack m={4} spacing={5}>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'4')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>4</Text>
      </Pressable>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'5')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>5</Text>
      </Pressable>
      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'6')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>6</Text>
      </Pressable>

      <Pressable style= {styles.btn}
        onPressIn={() => {
          if(firstOp == true){
            operation = '*'
            if(numText != ''){
              setText(numText + '*'), 
              toggleNext(true), 
              setNum1(parseFloat(numText)),
              toggleFirst(false)
            }
          }else if(nextNum == false){
            setText(calc(num1,parseFloat(numText),operation) + '*'),
            setNumText(calc(num1,parseFloat(numText),operation)),
            //toggleFirst(true)
            setNum1(calc(num1,parseFloat(numText),operation))
            toggleNext(true)
            operation = '*'
          }else{
            setText(numText + '*')
            operation = '*'
          }

          bigFont = (checkSize(numText))
        }}
      >
        <Text variant="button" style={styles.txt}>x</Text>
      </Pressable>
    </HStack>

    <HStack m={4} spacing={5}>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'1')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>1</Text>
      </Pressable>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'2')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>2</Text>
      </Pressable>
      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'3')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>3</Text>
      </Pressable>

      <Pressable style= {styles.btn}
        onPressIn={() => {
          if(firstOp == true){
            operation = '-'
            if(numText != ''){
              setText(numText + '-'), 
              toggleNext(true), 
              setNum1(parseFloat(numText)),
              toggleFirst(false)
            }
          }else if(nextNum == false){
            setText(calc(num1,parseFloat(numText),operation) + '-')
            setNumText(calc(num1,parseFloat(numText),operation)),
            //toggleFirst(true)
            setNum1(calc(num1,parseFloat(numText),operation))
            toggleNext(true)
            operation = '-'
          }else{
            setText(numText + '-')
            operation = '-'
          }

          bigFont = (checkSize(numText))
        }}
      >
        <Text variant="button" style={styles.txt}>-</Text>
      </Pressable>
    </HStack>

    <HStack m={4} spacing={5}>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'.')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>.</Text>
      </Pressable>

      <Pressable style= {styles.btn} onPressIn={() => {
        if(nextNum == true){
          setNumText((current) => '')
          toggleNext(false)
        }
          setNumText((current) => current+'0')
          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>0</Text>
      </Pressable>
      <Pressable style= {styles.btn} onPressIn={() => {
          if(firstOp == true){
            setText(numText), 
            toggleNext(true), 
            setNum1(parseFloat(numText)),
            toggleFirst(false)
          }else if(nextNum == false){
            setText(num1 + operation + numText + '='),
            setNumText((current) => calc(num1,parseFloat(current),operation)),
            toggleFirst(true)
            setNum1((num1,parseFloat(numText),operation))
            toggleNext(true)
          }else{
            setText(numText)
          }

          bigFont = (checkSize(numText))
        }}><Text variant="button" style={styles.txt}>=</Text>
      </Pressable>

      <Pressable style= {styles.btn}
        onPressIn={() => {
          if(firstOp == true){
            operation = '+'
            if(numText != ''){
              setText(numText + '+'), 
              toggleNext(true), 
              setNum1(parseFloat(numText)),
              toggleFirst(false)
            }
          }else if(nextNum == false){
            setText(calc(num1,parseFloat(numText),operation) + '+'),
            setNumText(calc(num1,parseFloat(numText),operation)),
            //toggleFirst(true)
            setNum1(calc(num1,parseFloat(numText),operation))
            toggleNext(true)
            operation = '+'
          }else{
            setText(numText + '+')
            operation = '+'
          }

          bigFont = (checkSize(numText))
        }}
      >
        <Text variant="button" style={styles.txt}>+</Text>
      </Pressable>
    </HStack>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FFFDD0',
    textColor:'#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderColor: '#ff0000',
    borderWidth: 2,
  },

  container2: {
    flex: 1.35,
    backgroundColor: '#FFFDD0',
    textColor:'#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    //alignItems: 'stretch',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderColor: '#ff0000',
    borderWidth: 2,
    height:'100%'
  },

  btn: {
    width: '24%', 
    height: normalize(70), 
    backgroundColor: "skyblue",
    alignItems: 'center', 
    justifyContent:'center'
  },

  txt: {
    textAlign:'center', 
    fontSize: normalize(45),
  }
});

