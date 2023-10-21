import React, {useState} from 'react';
// prettier-ignore
import {ScrollView, View, Text, Alert, Image, TouchableOpacity, TextInput} from 'react-native';
import {MD2Colors as Colors, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
// prettier-ignore
export default function Found() {
  const [nameValue, setNameValue] = useState<string>('');
  const [checked, setChecked] = useState('man');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({label: '40', value: '1'});
  const [items, setItems] = useState([
    {label: '40', value: '1'},
    {label: '41', value: '2'},
    {label: '42', value: '3'},
    {label: '43', value: '4'},
    {label: '44', value: '5'},
    {label: '45', value: '6'},
    {label: '46', value: '7'},
    {label: '47', value: '8'},
  ]);
  const [currentValue, setCurrentValue] = useState(1);
  const onChange = (value: any) => {
    switch (value) {
      case '1':
        setCurrentValue(1);
        break;
      case '2':
        setCurrentValue(2);
        break;
      case '3':
        setCurrentValue(3);
        break;
      case '4':
        setCurrentValue(4);
        break;
      case '5':
        setCurrentValue(5);
        break;
      case '6':
        setCurrentValue(6);
        break;
      case '7':
        setCurrentValue(7);
        break;
      case '8':
        setCurrentValue(8);
        break;
      default:
        setCurrentValue(1);
    }
  };
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
            marginLeft: 120,
          }}>
          정보 입력
        </Text>
      </View>
      <ScrollView style={{flex: 1, paddingTop: 16}}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 208,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            프로필 사진
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/profile_img.png')}
              style={{width: 86, height: 90, borderRadius: 12}}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#EEF2FB',
                marginLeft: 10,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#97B0EA',
                marginHorizontal: 27,
                paddingVertical: 16,
                flexDirection: 'column',
                width: 86,
                height: 90,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => Alert.alert('프로필 사진 추가')}>
              <Icon name="camera" size={32} color="#97B0EA" />
              <Text
                style={{
                  color: '#8A8D9E',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                1/1
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 310,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#E7E8EE',
              height: 36,
              flexDirection: 'row',
              paddingLeft: 8,
              paddingVertical: 8,
            }}>
            <Icon
              name="alert-circle-outline"
              size={20}
              color={Colors.grey500}
            />
            <Text style={{color: '#8A8D9E', fontSize: 16, marginLeft: 4}}>
              얼굴이 보이는 실물사진을 첨부해주세요.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 126,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            이름 <Text style={{color: '#EB5757'}}>*</Text>
          </Text>
          <TextInput
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#D6D7E1',
              height: 56,
            }}
            value={nameValue}
            onChangeText={value => setNameValue(value)}
            placeholder="실명을 입력해주세요"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 97,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            성별
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  color="#F5935C"
                  uncheckedColor="#A3A3A3"
                  value="man"
                />
                <Text style={{fontSize: 18, color: '#171717', marginTop: 6}}>
                  남성
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 70}}>
                <RadioButton
                  color="#F5935C"
                  uncheckedColor="#A3A3A3"
                  value="woman"
                />
                <Text style={{fontSize: 18, color: '#171717', marginTop: 6}}>
                  여성
                </Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 126,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            활동 지역
          </Text>
          <View
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#E7E8EE',
              height: 56,
              flexDirection: 'row',
              paddingHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#8A8D9E', fontSize: 16}}>
              거주하는 동네를 선택해주세요
            </Text>
            <Icon name="magnify" size={24} color={Colors.grey600} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 350,
          }}>
          <Text style={{color: '#1F2128', fontSize: 20, fontWeight: '600'}}>
            나이
          </Text>
          <DropDownPicker
            style={{
              marginTop: 12,
              borderColor: '#E7E8EE',
              height: 56,
              paddingHorizontal: 12,
            }}
            open={open}
            value={value}
            items={items}
            placeholder="나이를 선택해주세요"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={220} 
            onChangeValue={onChange} 
          />
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
            onPress={() =>
              nameValue.length > 0 ? Alert.alert('완료') : Alert.alert('이름을 입력해주세요.')
            }>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
                height: 24,
              }}>
              완료
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
