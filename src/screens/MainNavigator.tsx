import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from './Home';
import Found from './Found';
import Hobby from './Hobby';
import MyInfo from './MyInfo';

export default function Main() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'home', title: '홈', focusedIcon: 'home'},
    {key: 'found', title: '모임 찾기', focusedIcon: 'emoticon-outline'},
    {
      key: 'hobby',
      title: '취미용품',
      focusedIcon: 'cart',
    },
    {key: 'myInfo', title: '내 정보', focusedIcon: 'account'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    found: Found,
    hobby: Hobby,
    myInfo: MyInfo,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
