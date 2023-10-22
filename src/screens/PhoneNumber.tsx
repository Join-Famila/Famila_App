import React, {useState, useEffect} from 'react';
// prettier-ignore
import {View, Text, Alert, TouchableOpacity, TextInput, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
// prettier-ignore
export default function MyInfo() {
  const [btnReady, setBtnReady] = useState<boolean>(false) //인증번호발송 버튼 활성화 여부 결정
  const [num, setNum] = useState<string>('') //사용자가 입력한 인증번호 저장
  const [color, setColor] = useState<boolean>(true)
  const [send, setSend] = useState<boolean>(false) //인증번호발송 여부

  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0);

  const [inputValue, setInputValue] = useState('') //사용자가 입력한 전화번호 저장

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    if (inputValue.length < 11 || inputValue.length < 13) {
      setBtnReady(false);
    }
    if (inputValue.length === 11 || inputValue.length === 13) {
      setInputValue(
        inputValue
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
      setBtnReady(true);
    }
  }, [inputValue]);

  const BtnChange = (value: any) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setInputValue(value);
    }
  };
  const sendMessage = () => {
    if (btnReady) {
      setMinutes(5)
      setSeconds(0)
      setColor(true)
      setSend(true)
    } else {
      setSend(false)
    }
  }
  const NumChange = (text: string) => {
    setNum(text)
    setColor(true)
  }
  const onNumCheck = () => {
    if (num === '1234') {
      setSend(false)
      Alert.alert('인증번호 일치')
    } else {
      setColor(false);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 56,
          borderBottomWidth: 1,
          borderBottomColor: '#E7E8EE',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-left"
          size={24}
          color="#1F2128"
          style={{marginLeft: 16}}
        />
        <Text
          style={{
            color: '#1F2128',
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 78,
          }}>
          휴대폰 번호로 로그인
        </Text>
      </View>
      <View style={{paddingTop: 16, flex: 1}}>
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 16,
            flexDirection: 'column',
            height: 237,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            휴대폰 번호
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={[styles.textInput, {width: width - 163}]}
              value={inputValue}
              keyboardType="number-pad"
              maxLength={13}
              onChangeText={value => BtnChange(value)}
              placeholder="010-1234-1234"
            />
            <TouchableOpacity
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: btnReady === true ? '#31343F' : '#D4D4D4',
                paddingHorizontal: 12,
                paddingVertical: 10,
                width: 123,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={sendMessage}>
              <Text
                style={{
                  color: btnReady ? '#31343F' : '#D4D4D4',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                인증번호 발송
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <TextInput
              style={[styles.textInput, {width: '100%'}]}
              keyboardType="number-pad"
              maxLength={4}
              onChangeText={value => NumChange(value)}
              placeholder="인증번호를 입력해주세요."
            />
            <Text style={{color: color ? '#27AE60' : '#EB5757', fontSize: 14}}>
              {send
                ? color
                  ? `인증번호가 문자로 발송되었습니다.\n유효시간 ${minutes}:${
                      seconds < 10 ? `0${seconds}` : seconds
                    }`
                  : '인증번호가 일치하지 않습니다.'
                : ''}
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 16, paddingBottom: 20}}>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            width: '100%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5935C',
          }}
          onPress={onNumCheck}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '600',
              height: 24,
            }}>
            확인
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D6D7E1',
    height: 56,
  },
});
