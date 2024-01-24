import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {MainColor} from '../../../utils/constant';

const items = [1, 2, 3, 4, 5];

const SkeletonLoading = () => {
  return (
    <SkeletonPlaceholder
      highlightColor="#fff"
      backgroundColor={MainColor.SECONDARY_GRAY}
      borderRadius={4}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        {items.map((_, index) => (
          <SkeletonPlaceholder.Item
            key={index}
            style={{marginLeft: 15, marginBottom: 5}}
            width={120}
            height={180}
            borderRadius={10}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoading;
