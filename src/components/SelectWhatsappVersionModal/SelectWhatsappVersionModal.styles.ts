import { styled } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60%;
  elevation: 5;
  overflow: hidden;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const LabelTitle = styled.Text`
  color: #888;
  font-size: 26px;
  font-weight: bold;
`;

export const AppNameLabel = styled.Text`
  color: #888;
  font-size: 16px;
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
`;

export const CancelButtonLabel = styled.Text`
  color: #fa4b4b;
  font-size: 18px;
  font-weight: bold;
`;
