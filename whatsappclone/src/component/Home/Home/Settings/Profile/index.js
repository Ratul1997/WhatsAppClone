import React from 'react';
import {View, Text} from 'react-native';
import SettingHeader from '../SettingHeader';
import ImagePlaceHolder from '../../../../../common/ImagePlaceHolder';
import ProfileInformation from './ProfileInformations';

function Profile(props) {
  const {navigation} = props;
  const goBack = () => {
    navigation.pop();
  };
  return (
    <>
      <SettingHeader title="Profile" goBack={goBack} />
      <ImagePlaceHolder />
      <ProfileInformation />
    </>
  );
}
export default Profile;
