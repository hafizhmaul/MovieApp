import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {MainColor} from '../../../utils/constant';

const LoadingIndicator: React.FC<{isLoading: boolean}> = ({isLoading}) => {
  return (
    <View style={{marginTop: 10}}>
      {isLoading ? (
        <ActivityIndicator size="large" color={MainColor.PRIMARY_GRAY} />
      ) : null}
    </View>
  );
};

export default LoadingIndicator;
