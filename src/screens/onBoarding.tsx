import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Activity() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <View style={{marginTop: 233, alignItems: 'center'}}>
        <Image
          source={require('../assets/logo2.png')}
          style={{
            width: 122,
            height: 122.18,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#F5935C',
            fontWeight: '600',
            marginTop: 16,
          }}>
          4060 취미 기반 모임 커뮤니티
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 26,
          flexDirection: 'column',
          alignItems: 'center',
          paddingHorizontal: 16,
          height: 208,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: '#FEE500', justifyContent: 'center'},
          ]}
          onPress={() => Alert.alert('카카오톡 로그인')}>
          <Icon name="chat" size={20} color="black" />
          <Text
            style={[
              styles.btnText,
              {
                color: 'black',
                marginLeft: 20,
              },
            ]}>
            카카오톡으로 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: '#1F2128', justifyContent: 'center'},
          ]}
          onPress={() => Alert.alert('휴대폰 번호 로그인')}>
          <Icon name="tablet-android" size={18} color="white" />
          <Text
            style={[
              styles.btnText,
              {
                color: 'white',
                marginLeft: 20,
              },
            ]}>
            휴대폰 번호로 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderWidth: 1,
              borderColor: '#F5935C',
              paddingLeft: 84,
              paddingRight: 24,
              justifyContent: 'space-around',
            },
          ]}
          onPress={() => Alert.alert('로그인 없이 사용')}>
          <Text style={[styles.btnText, {color: '#F5935C'}]}>
            우선 로그인 없이 사용
          </Text>
          <Icon name="chevron-right" size={18} color="#F5935C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {fontSize: 18, fontWeight: '600', height: 24},
});
