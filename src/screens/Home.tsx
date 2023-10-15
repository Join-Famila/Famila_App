import React from 'react';
// prettier-ignore
import {StyleSheet, View, Text, Alert, Image, TouchableOpacity} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const onIconPressed = () => Alert.alert('알림!!');
// prettier-ignore
export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={styles.topBar}>
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
        <View style={{paddingTop: 12, flexDirection: 'column'}}>
          <Text style={styles.title}>
            내 모임 <Text style={{color: '#F5935C'}}>2</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              paddingTop: 20,
              paddingBottom: 16,
            }}>
            <View style={{width: 105, alignItems: 'center'}}>
              <Image
                source={require('../assets/talk.png')}
                style={{width: 78, height: 78, borderRadius: 100}}
              />
              <Text
                style={{
                  marginTop: 11,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#31343F',
                }}>
                실버 스윙댄스 모임 두줄에...
              </Text>
              <View style={styles.crown}>
                <Icon name="crown" size={16} color="white" />
              </View>
            </View>
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
                marginLeft: 21,
              }}>
              <Text style={{color: '#8A8D9E', fontSize: 16}}>{'+더보기'}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#E7E8EE',
            height: 60,
            flexDirection: 'row',
            paddingLeft: 8,
            paddingVertical: 8,
          }}>
          <Icon name="alert-circle-outline" size={20} color={Colors.grey500} />
          <Text style={{color: Colors.grey600, fontSize: 16, marginLeft: 4}}>
            {'모임을 만들고 수익을 얻으시려면 '}
            <Text
              style={{color: '#EC616F', textDecorationLine: 'underline'}}
              onPress={() => Alert.alert('계좌 등록')}>
              {'여기에서\n'}
            </Text>
            계좌를 등록해주세요!
          </Text>
        </View>
      </View>
      <View style={{marginTop: 27}}>
        <Text style={styles.title}>
          단체톡 <Text style={{color: '#F5935C'}}>2</Text>
        </Text>
        <View style={{marginTop: 16}}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/talk.png')}
              style={{width: 78, height: 78, borderRadius: 100}}
            />
            <View style={{marginLeft: 14}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 250,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#31343F'}}>
                  실버 스윙 댄스 모임 두줄에...
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#AFB2C0'}}>
                  73
                </Text>
              </View>
              <View
                style={{
                  marginTop: 9,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 250,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#8A8D9E'}}>
                  어서오세요~!
                </Text>
                <View
                  style={{
                    backgroundColor: '#FF3A3A',
                    borderRadius: 500,
                    width: 21,
                    height: 20,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.crown}>
            <Icon name="crown" size={16} color="white" />
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
  title: {
    color: '#31343F',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  crown: {
    position: 'absolute',
    backgroundColor: '#F5935C',
    width: 24,
    height: 24,
    borderRadius: 100,
    top: 58.5,
    left: 73,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
