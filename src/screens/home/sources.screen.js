import React from 'react';
import { Linking } from 'react-native';
import { Text, ScrollView } from 'react-native';
import { CardContainer, SourcesContainer } from '../../components/style/result-card.component';
import { MiniCardContainer } from '../../components/style/mini-card.component';
import { Spacer } from '../../components/style/spacer.component';
export const SourcesScreen = () => {
  return (
    <SourcesContainer>
      <MiniCardContainer>
        <Text>
          The odds ratios for increased chances of having a side effect, have been determined using
          the{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://vaers.hhs.gov/about.html')}>
            VAERS database
          </Text>
          . The the Vaccine Adverse Event Reporting System (VAERS) is a national early warning
          system to detect possible safety problems in U.S.-licensed vaccines. It is co-managed by
          the Centers for Disease Control and Prevention (CDC) and the U.S. Food and Drug
          Administration (FDA).
          <Spacer position="bottom" size="large"></Spacer>
          {'\n'}
          {'\n'}
          Official reports of side effects for the Pfizer/Biontech vaccine, the Moderna Vaccine, and
          the Jannsen/Johnson and Johnson vaccines can be found{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.fda.gov/media/144414/download')}>
            here,
          </Text>{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.fda.gov/media/144638/download')}>
            here,
          </Text>{' '}
          and{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.fda.gov/media/146305/download')}>
            here.
          </Text>
          {'\n'}
          {'\n'}
          Further reports associating the vaccines with thrombotic events and Guillain-Barré
          syndrome can be found{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.fda.gov/media/146305/download')}>
            here
          </Text>{' '}
          and{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() =>
              Linking.openURL('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8331323/')
            }>
            here,
          </Text>{' '}
          respectively.
          {'\n'}
          {'\n'}
          Numbers for current COVID19 cases and vaccinations were obtained using the{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://disease.sh/docs/')}>
            disease.sh - Open Disease Data API.{' '}
          </Text>{' '}
        </Text>
      </MiniCardContainer>
    </SourcesContainer>
  );
};
