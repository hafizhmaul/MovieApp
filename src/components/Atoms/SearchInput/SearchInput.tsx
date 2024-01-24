import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearData} from '../../../store/slice/MovieSlice';
import {MainColor} from '../../../utils/constant';
import {styles} from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  navigation?: any;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  navigation,
}) => {
  const dispatch: any = useDispatch();

  return (
    <View style={styles.containerSearch}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(clearData());
          navigation.navigate('Home');
        }}>
        <FontAwesomeIcon icon={faArrowLeft} size={18} />
      </TouchableOpacity>
      <View style={styles.containerTextInput}>
        <TextInput
          editable
          numberOfLines={1}
          onChangeText={onChangeText}
          defaultValue={value}
          style={styles.contentTextInput}
          placeholder="Search for a movie"
          placeholderTextColor={MainColor.PRIMARY_GRAY}
        />

        <FontAwesomeIcon
          style={styles.iconSearch}
          icon={faMagnifyingGlass}
          size={18}
          color={MainColor.PRIMARY_BLUE}
        />
      </View>
    </View>
  );
};

export default SearchInput;
