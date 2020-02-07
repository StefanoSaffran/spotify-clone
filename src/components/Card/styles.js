import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 160px;
  padding: 15px 0;
  margin-right: 8px;
`;

export const PodImage = styled.Image`
  width: 150px;
  height: 150px;
  background-color: gray;
  border-radius: 6px;
`;

export const ContainerSubtitle = styled.View`
  flex-direction: column;
  padding: 10px 0;
`;

export const Subtitle = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  color: #fcfcfc;
  font-size: 13px;
  font-weight: bold;
  padding: 2px 0;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: #999;
  font-size: 12px;
`;
