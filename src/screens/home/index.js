import React, {useState, useEffect} from 'react';
import {
  Share,
  Linking,
  Keyboard,
  StatusBar,
  ImageBackground,
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
  LinkButton,
  LabelInput,
  LabelHeader,
  LabelFooter,
  LabelButton,
  ShareButton,
  ContainerInput,
  ContainerBannerAd,
  ContainerWhastsAnimation,
} from './styles';

import {BannerAd, BannerAdSize} from '@react-native-admob/admob';
import LottieView from 'lottie-react-native';
import {IntlPhoneInput} from '../../components';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneAnimation from '../../assets/animations/whats_verification.json';

var animation;
export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textError, setTextError] = useState(false);
  const [phoneIsVerified, setPhoneIsVerified] = useState(false);
  const [keyboardIsOpened, setKeyboardIsOpened] = useState(false);
  const [dialCode, setDialCode] = useState('');

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
    if (animation) {
      if (phoneIsVerified) {
        animation?.play(0, 75);
      } else {
        animation?.play(76, 119);
      }

      setTimeout(() => {
        animation?.pause();
      }, 900);
    }
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

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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
        <ShareButton onPress={onShare}>
          <Icon name={'share-social-outline'} size={22} color={'#FFF'} />
        </ShareButton>
      </Row>

      <Container>
        <Header>
          <LabelHeader>
            Envie mensagem para qualquer número pelo WhatsApp, sem precisar
            salvar o contato.
          </LabelHeader>
        </Header>
        <ContainerBannerAd>
          <BannerAd
            size={BannerAdSize.ADAPTIVE_BANNER}
            unitId="ca-app-pub-8357397311847363/1089641260"
            requestOptions={{requestNonPersonalizedAdsOnly: false}}
          />
        </ContainerBannerAd>
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
          </Row>
          <Button
            style={{
              backgroundColor: phoneIsVerified ? '#249035' : '#aaa',
            }}
            activeOpacity={phoneIsVerified ? 1 : 0.5}
            onPress={phoneIsVerified ? handdleSubmit : null}>
            <ContainerWhastsAnimation>
              <LottieView
                source={PhoneAnimation}
                ref={(e) => (animation = e)}
                style={{height: 90, width: 30}}
              />
            </ContainerWhastsAnimation>
            <LabelButton>Abrir no WhatsApp</LabelButton>
          </Button>

          <LinkButton onPress={onShare}>
            <LabelButton style={{color: '#249035', marginRight: 5}}>
              Indicar o app para amigos
            </LabelButton>
            <Icon name={'share-social-outline'} size={20} color={'#249035'} />
          </LinkButton>
        </Body>
        {!keyboardIsOpened && (
          <Footer>
            <LabelFooter>Versão: {DeviceInfo.getVersion()}</LabelFooter>
          </Footer>
        )}
      </Container>
    </ImageBackground>
  );
}
