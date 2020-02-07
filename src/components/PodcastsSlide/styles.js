import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 23px;
  font-weight: bold;
`;

export const PodcastList = styled.ScrollView.attrs({
  showHorizontalScrollIndicator: false,
  horizontal: true,
})``;
