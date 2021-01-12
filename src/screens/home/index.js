import React, {useState, useEffect, useRef} from 'react';
import {
  Linking,
  Keyboard,
  StatusBar,
  Share,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Row,
  Body,
  Header,
  Button,
  Footer,
  Column,
  Container,
  LabelTitle,
  LabelInput,
  LabelHeader,
  LabelFooter,
  LabelButton,
  ContainerInput,
  TextInputStyle,
  ContainerWhastsAnimation,
} from './styles';

import LottieView from 'lottie-react-native';
import {IntlPhoneInput} from '../../components';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import DrinkAnimation from '../../assets/animations/whats_verification.json';
var animation;
export default function Home() {
  const phoneNumberRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textError, setTextError] = useState(false);
  const [phoneIsVerified, setPhoneIsVerified] = useState(false);

  // Implemenações futuras
  const [validSizeNumber, setValidSizeNumber] = useState(11);
  const [invalidSizeNumber, setInalidSizeNumber] = useState(10);
  const [dialCode, setDialCode] = useState('');

  const [phoneNumberOldLength, setPhoneNumberOldLength] = useState();

  function clearTextInput() {
    setPhoneNumber('');
    setPhoneIsVerified(false);
  }

  function handdleSubmit() {
    if (phoneIsVerified) {
      Keyboard.dismiss();
      Linking.openURL(`whatsapp://send?phone=${dialCode}${phoneNumber}`);
    } else {
      setTextError(true);
    }
  }

  useEffect(() => {
    if (phoneIsVerified) {
      animation.play(0, 75);
      setTimeout(() => {
        animation.pause();
      }, 900);
    }

    if (!phoneIsVerified) {
      animation.play(76, 119);
      setTimeout(() => {
        animation.pause();
      }, 900);
    }
    setPhoneNumberOldLength(phoneNumber.length);
  }, [phoneIsVerified]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Open Whats - Mensagem direto sem salvar o contato',
        message:
          'Instale essa ferramenta incrível que te ajudará a enviar mensagens pelo WhatsApp sem precisar adicionar o contato em sua lista de contatos. \nhttps://play.google.com/store/apps/details?id=com.findwhats',
        url: 'https://play.google.com/store/apps/details?id=com.findwhats',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={{flex: 1, paddingTop: 30}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Row style={{justifyContent: 'space-between', paddingHorizontal: 10}}>
        <Row />
        <LabelTitle>Open Whats</LabelTitle>
        <TouchableOpacity
          onPress={onShare}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={'share-social-outline'} size={22} color={'#FFF'} />
        </TouchableOpacity>
      </Row>

      <Container>
        <Header>
          <LabelHeader>
            Envie mensagem para qualquer número pelo WhatsApp, sem precisar
            salvar o contato.
          </LabelHeader>
        </Header>
        <Body>
          <Row>
            <Column>
              <LabelInput>Informe o número</LabelInput>
              <ContainerInput style={[textError && {borderColor: '#f71919'}]}>
                <IntlPhoneInput
                  defaultCountry={'BR'}
                  onChangeText={({
                    dialCode,
                    isVerified,
                    unmaskedPhoneNumber,
                  }) => {
                    setTextError(false);
                    setDialCode(dialCode);
                    setPhoneIsVerified(isVerified);
                    setPhoneNumber(unmaskedPhoneNumber);
                  }}
                  clearTextInput={clearTextInput}
                  onSubmitEditing={handdleSubmit}
                />
              </ContainerInput>
            </Column>
            <ContainerWhastsAnimation>
              <LottieView
                source={DrinkAnimation}
                ref={(e) => (animation = e)}
                style={{height: 100, width: 30}}
              />
            </ContainerWhastsAnimation>
          </Row>
          <Button
            style={{
              backgroundColor: phoneIsVerified ? '#249035' : '#aaa',
            }}
            activeOpacity={phoneIsVerified ? 1 : 0.5}
            onPress={phoneIsVerified ? handdleSubmit : null}>
            <LabelButton>Abrir no WhatsApp</LabelButton>
          </Button>
        </Body>
        <Footer>
          <LabelFooter>Versão: {DeviceInfo.getVersion()}</LabelFooter>
        </Footer>
      </Container>
    </ImageBackground>
  );
}
