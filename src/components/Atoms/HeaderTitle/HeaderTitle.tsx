import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {assignTitle} from '../../../store/slice/HomeSlice';
import {styles} from './HeaderTitle.styles';

const HeaderTitle: React.FC<{title: string; navigation: any}> = ({
  title,
  navigation,
}) => {
  const dispatch: any = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(assignTitle(title));
        navigation.navigate('ViewAll', {title});
      }}
      activeOpacity={1}
      style={styles.containerHeaderTitle}>
      <Text style={styles.headerTitle}>{title}</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </TouchableOpacity>
  );
};

export default HeaderTitle;
