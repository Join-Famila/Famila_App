import React, {useState, useEffect} from 'react';
// prettier-ignore
import {ScrollView, View, Text, Alert, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {MD2Colors as Colors, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
// prettier-ignore
export default function Hobby() {
  const [searchValue, setsearchValue] = useState<string>('');
  const [btn, setBtn] = useState(0);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (btn===0) {
      setList(['운동', '건강관리', '자전거', '등산', '골프', '댄스', '헬스', '볼링', '걷기', '명상', '요가']);
    }
    else if(btn===1){
      setList(['노래', '음악', '뮤지컬', '무용', '영화', '미술', '독서'])
    }
    else if(btn===2){
      setList(['한식', '양식', '중식', '일식'])
    }
    else if(btn===3){
      setList(['국내여행', '국외'])
    }
    else if(btn===4){
      setList(['캘리그라피', '회화', '수제음식'])
    }
    else{
      setList(['기타'])
    }
    
  }, [btn]);
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 56,
          borderBottomWidth: 1,
          borderBottomColor: '#E7E8EE',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#1F2128',
            fontSize: 18,
            fontWeight: '600',
          }}>
          취미 용품
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 104,
          paddingHorizontal: 16,
          paddingTop: 32,
          paddingBottom: 16,
        }}>
        <TextInput
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#D6D7E1',
            height: 56,
            fontSize: 18,
          }}
          value={searchValue}
          onChangeText={value => setsearchValue(value)}
          placeholder=" 검색으로 원하는 용품 찾기"
        />
        <Icon
          name="magnify"
          size={24}
          color={Colors.grey600}
          style={{position: 'absolute', right: 28, bottom: 32}}
        />
      </View>
      <View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 18,
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.btn, {
                borderColor: btn == 0 ? '#F5935C' : '#AFB2C0',
                width: 109,
                backgroundColor: btn == 0 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(0)}>
              <Text style={styles.btnText}>🏌🏼 활동/건강</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {
                marginLeft: 8,
                borderColor: btn == 1 ? '#F5935C' : '#AFB2C0',
                width: 113,
                backgroundColor: btn == 1 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(1)}>
              <Text style={styles.btnText}>🎤 문화/예술</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {
                marginLeft: 8,
                borderColor: btn == 2 ? '#F5935C' : '#AFB2C0',
                width: 80,
                backgroundColor: btn == 2 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(2)}>
              <Text style={styles.btnText}>🍖 음식</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <TouchableOpacity
              style={[styles.btn, {
                borderColor: btn == 3 ? '#F5935C' : '#AFB2C0',
                width: 80,
                backgroundColor: btn == 3 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(3)}>
              <Text style={styles.btnText}>✈️ 여행</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {
                marginLeft: 8,
                borderColor: btn == 4 ? '#F5935C' : '#AFB2C0',
                width: 94,
                backgroundColor: btn == 4 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(4)}>
              <Text style={styles.btnText}>✏️ 클래스</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {
                marginLeft: 8,
                borderColor: btn == 5 ? '#F5935C' : '#AFB2C0',
                width: 112,
                backgroundColor: btn == 5 ? '#FBCDAB12' : '#FFFFFF',
              }]}
              onPress={() => setBtn(5)}>
              <Text style={styles.btnText}>🎸 기타 등등</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{paddingHorizontal: 16}}>
          {list.map(key => (
            <TouchableOpacity
              style={{height: 40}}
              onPress={() => Alert.alert(key)}
              key={key}>
              <Text
                style={{
                  marginLeft: 12,
                  color: '#1F2128',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                {key}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    borderWidth: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#1F2128',
    fontSize: 16,
    fontWeight: '500',
  },
});
