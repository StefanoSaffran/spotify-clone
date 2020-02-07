import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: #121212;
  flex: 1;
  width: auto;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#015B48', '#15B470', 'rgba(15, 173, 114, 0.5)', 'transparent'],
  start: [0, 0],
  end: [0, 1],
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 600px;
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  color: white;
  margin: 100px 35px 70px;
  font-size: 28px;
  font-weight: bold;
`;

export const PremiumSlide = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  height: 150px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const InfoText = styled.Text`
  color: #fff;
  margin: 25px 20px;
  font-weight: 500;
  text-align: center;
`;

export const CurrentlyPlan = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  border-radius: 6px;
  margin: 0 15px 15px;
`;

export const IndividualPlan = styled(LinearGradient).attrs({
  colors: ['#015B48', '#15B470'],
  start: [0, 0],
  end: [1, 1],
})`
  justify-content: space-around;
  margin: 15px;
  border-radius: 6px;
`;

export const DuoPlan = styled(LinearGradient).attrs({
  colors: ['#578FBF', '#3F3F78'],
  start: [0, 0],
  end: [1, 1],
})`
  justify-content: space-around;
  margin: 15px;
  border-radius: 6px;
`;
export const FamilyPlan = styled(LinearGradient).attrs({
  colors: ['#223165', '#AC2894'],
  start: [0, 0],
  end: [1, 1],
})`
  justify-content: space-around;
  margin: 15px;
  border-radius: 6px;
`;

export const StudentPlan = styled(LinearGradient).attrs({
  colors: ['#F29925', '#D38448'],
  start: [0, 0],
  end: [1, 1],
})`
  justify-content: space-around;
  margin: 15px;
  border-radius: 6px;
`;

export const Header = styled.Text`
  color: #fff;
  padding: 35px 25px 20px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const Body = styled.Text`
  color: #fff;
  padding: 0 25px 35px;
  text-align: center;
  font-weight: bold;
  line-height: 25px;
`;

export const Left = styled.Text`
  color: #fff;
  padding: 25px;
  padding-left: 30px;
  font-weight: bold;
  font-size: 16px;
`;

export const Right = styled.Text`
  color: #fff;
  padding: 25px;
  padding-right: 30px;
  text-transform: uppercase;
  font-size: 11px;
`;
