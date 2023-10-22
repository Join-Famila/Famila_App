import React from 'react';
// prettier-ignore
import {Image,View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// prettier-ignore
export default function MyInfo() {
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
          마이페이지
        </Text>
      </View>
      <View
        style={{
          marginLeft: 10,
          width: 75,
          height: 48,
          borderWidth: 2,
          borderTopColor: 'white',
          borderRightColor: 'white',
          borderLeftColor: 'white',
          borderBottomColor: '#F5935C',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#F5935C', fontSize: 18, fontWeight: '600'}}>
          내 정보
        </Text>
      </View>
      <View style={{paddingTop: 4}}>
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/profile_img.png')}
              style={{
                width: 78,
                height: 78,
                borderRadius: 100,
              }}
            />
            <View style={{marginLeft: 15, justifyContent: 'center'}}>
              <Text style={{color: '#31343F', fontSize: 22, fontWeight: '600'}}>
                장옥순
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  color: '#999999',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                76세, 여성
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#5C5F70',
                fontSize: 18,
                fontWeight: '600',
                marginEnd: 4,
              }}>
              수정
            </Text>
            <Icon name="pencil" size={24} color={Colors.grey700} />
          </View>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#E7E8EE',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: '#1F2128', fontSize: 18, fontWeight: '600'}}>
                  계좌 등록하기
                </Text>
                <TouchableOpacity
                  style={{
                    width: 66,
                    height: 24,
                    backgroundColor: '#F5935C',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 4,
                  }}
                  onPress={() => Alert.alert('등록하기')}>
                  <Text
                    style={{color: 'white', fontSize: 12, fontWeight: '600'}}>
                    등록하기
                  </Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={24} color={'#737373'} />
            </View>
            <View
              style={{
                marginTop: 10,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#E7E8EE',
                height: 60,
                flexDirection: 'row',
                paddingLeft: 8,
                paddingVertical: 8,
              }}>
              <Icon
                name="alert-circle-outline"
                size={20}
                color={Colors.grey500}
              />
              <Text
                style={{color: Colors.grey600, fontSize: 16, marginLeft: 4}}>
                {'모임을 만들고 '}
                <Text style={{color: '#EC616F'}}>수익을 얻으시려면</Text>
                {' 계좌를 등록\n해주세요!'}
              </Text>
            </View>
          </View>
          <View
            style={styles.view}>
            <Text style={{color: '#1F2128', fontSize: 18, fontWeight: '600'}}>
              결제 내역
            </Text>
            <Icon name="chevron-right" size={24} color={'#737373'} />
          </View>
          <View
            style={styles.view}>
            <Text style={{color: '#1F2128', fontSize: 18, fontWeight: '600'}}>
              시니어 정보
            </Text>
            <Icon name="chevron-right" size={24} color={'#737373'} />
          </View>
          <View
            style={styles.view}>
            <Text style={{color: '#1F2128', fontSize: 18, fontWeight: '600'}}>
              공지 및 이용가이드
            </Text>
            <Icon name="chevron-right" size={24} color={'#737373'} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    borderBottomColor: '#E7E8EE',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
});
