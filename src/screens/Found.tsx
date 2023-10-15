import React from 'react';
// prettier-ignore
import {StyleSheet, View, Text, Alert, Image, TouchableOpacity} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const onIconPressed = () => Alert.alert('알림!!');
// prettier-ignore
export default function Found() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={styles.topBar}>
        <Image
          source={require('../assets/topBarLogo.png')}
          style={{
            width: 96,
            height: 26.91,
          }}
        />
        <Icon
          name="bell"
          size={20}
          color={Colors.grey700}
          onPress={onIconPressed}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 8,
          paddingLeft: 16,
          paddingBottom: 14,
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/b.png')}
          style={{
            width: 78,
            height: 78,
            borderRadius: 78 / 2,
            paddingEnd: 15,
            backgroundColor: '#F2F3F7',
            borderWidth: 1,
            borderColor: '#E7E8EE',
          }}
        />
        <View
          style={[
            {
              flexDirection: 'column',
              marginLeft: 15,
              justifyContent: 'space-between',
              height: 110,
            },
          ]}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: '#FEE500'}]}
            onPress={() => Alert.alert('카카오톡 로그인')}>
            <Icon name="chat" size={20} color="black" />
            <Text
              style={[styles.btnText, {color: 'black'}]}>
              카카오톡으로 로그인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: '#1F2128'}]}
            onPress={() => Alert.alert('휴대폰 번호 로그인')}>
            <Icon name="tablet-android" size={18} color="white" />
            <Text
              style={[styles.btnText, {color: 'white'}]}>
              휴대폰 번호로 로그인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop: 12, marginTop: 57, flexDirection: 'column'}}>
        <Text
          style={{
            color: '#31343F',
            fontSize: 20,
            fontWeight: '600',
            paddingHorizontal: 16,
          }}>
          내 모임 <Text style={{color: '#F5935C'}}>2</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: '#F2F3F7',
              width: 78,
              height: 78,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#8A8D9E', fontSize: 16}}>
              {'+ 모임\n  찾기'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.plusMeetingBtn}
        onPress={() => Alert.alert('모임 만들기')}>
        <Icon name="plus" size={20} color="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            height: 24,
          }}>
          모임 만들기
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    width: 235,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnText: {fontSize: 18, fontWeight: '600', height: 24},
  plusMeetingBtn: {
    backgroundColor: '#F5935C',
    borderRadius: 100,
    paddingHorizontal: 40,
    paddingVertical: 12,
    flexDirection: 'row',
    width: 187,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
