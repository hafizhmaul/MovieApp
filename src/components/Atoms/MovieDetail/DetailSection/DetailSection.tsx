import {
  faBuilding,
  faCalendar,
  faClock,
  faMoneyBill1,
} from '@fortawesome/free-regular-svg-icons';
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {MovieDetailProps} from '../../../../screens/MovieDetail/MovieDetail.type';
import {MainColor} from '../../../../utils/constant';
import {formattedDate} from '../../../../utils/helper';
import {styles} from '../ComponentDetail.styles';

const DetailSection: React.FC<{item: MovieDetailProps | null}> = ({item}) => {
  return (
    <View style={styles.containerDetail}>
      <Text>{item?.overview}</Text>
      <View>
        <Text style={styles.detailHeader}>Details</Text>
        <View style={styles.detailItem}>
          <FontAwesomeIcon
            icon={faCalendar}
            size={15}
            color={MainColor.PRIMARY_GRAY}
          />
          <Text style={styles.detailCategory}>Date Aired</Text>
          <Text>{formattedDate(item?.release_date || '')}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesomeIcon
            icon={faClock}
            size={15}
            color={MainColor.PRIMARY_GRAY}
          />
          <Text style={styles.detailCategory}>Duration</Text>
          <Text>{item?.runtime} min</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesomeIcon
            icon={faBuilding}
            size={15}
            color={MainColor.PRIMARY_GRAY}
          />
          <Text style={styles.detailCategory}>Studio</Text>
          <Text>{item?.production_companies[0]?.name || 'TBA'}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesomeIcon
            icon={faMoneyBill1}
            size={15}
            color={MainColor.PRIMARY_GRAY}
          />
          <Text style={styles.detailCategory}>Budget</Text>
          <Text>
            {item && item?.budget > 0
              ? `$${item?.budget.toLocaleString()}`
              : 'TBA'}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            size={15}
            color={MainColor.PRIMARY_GRAY}
          />
          <Text style={styles.detailCategory}>Genre</Text>
          <Text>{item?.genres.map(genre => genre.name).join(', ')}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailSection;
