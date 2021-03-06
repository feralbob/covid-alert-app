import {useI18n} from 'locale';
import {Text, TextMultiline} from 'components';
import React from 'react';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';

import {BaseHomeView} from '../components/BaseHomeView';

export const FrameworkUnavailableView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const i18n = useI18n();

  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);
  return (
    <BaseHomeView iconName="icon-bluetooth-disabled" testID="frameworkUnavailable">
      <Text focusRef={autoFocusRef} variant="bodyTitle" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.FrameworkUnavailable.Title')}
      </Text>
      <TextMultiline marginBottom="m" text={i18n.translate('Home.FrameworkUnavailable.Body')} />
    </BaseHomeView>
  );
};
