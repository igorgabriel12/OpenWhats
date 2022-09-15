import React from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import data from './Countries';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IntlPhoneInput extends React.Component {
  constructor(props) {
    super(props);
    const defaultCountry =
      data.filter((obj) => obj.code === props.defaultCountry)[0] ||
      data.filter((obj) => obj.code === 'TR')[0];
    this.state = {
      defaultCountry,
      flag: defaultCountry.flag,
      modalVisible: false,
      dialCode: defaultCountry.dialCode,
      phoneNumber: '',
      mask: defaultCountry.mask,
      countryData: data,
      selectedCountry: defaultCountry,
    };
  }

  onChangePropText = (unmaskedPhoneNumber, phoneNumber) => {
    const {dialCode, mask, selectedCountry} = this.state;
    const countOfNumber = mask.match(/9/g).length;

    if (this.props.onChangeText) {
      const isVerified =
        (countOfNumber === unmaskedPhoneNumber?.length ||
          (dialCode === '+55' &&
            countOfNumber === unmaskedPhoneNumber?.length + 1)) &&
        phoneNumber?.length > 0;
      this.props.onChangeText({
        dialCode,
        unmaskedPhoneNumber,
        phoneNumber,
        isVerified,
        selectedCountry,
      });
    }
  };

  onChangeText = (value) => {
    let unmaskedPhoneNumber = (value.match(/\d+/g) || []).join('');

    if (unmaskedPhoneNumber.length === 0) {
      this.setState({phoneNumber: ''});
      this.onChangePropText('', '');
      return;
    }

    let phoneNumber = this.state.mask.replace(/9/g, '_');
    for (let index = 0; index < unmaskedPhoneNumber.length; index += 1) {
      phoneNumber = phoneNumber.replace('_', unmaskedPhoneNumber[index]);
    }
    let numberPointer = 0;
    for (let index = phoneNumber.length; index > 0; index -= 1) {
      if (phoneNumber[index] !== ' ' && !isNaN(phoneNumber[index])) {
        numberPointer = index;
        break;
      }
    }
    phoneNumber = phoneNumber.slice(0, numberPointer + 1);
    unmaskedPhoneNumber = (phoneNumber.match(/\d+/g) || []).join('');

    this.onChangePropText(unmaskedPhoneNumber, phoneNumber);
    this.setState({phoneNumber});
  };

  showModal = () =>
    this.props.disableCountryChange
      ? null
      : this.setState({modalVisible: true});

  hideModal = () => {
    this.setState({modalVisible: false});
  };

  onCountryChange = async (code) => {
    const countryData = await data;
    try {
      const country = await countryData.filter((obj) => obj.code === code)[0];
      this.setState({
        dialCode: country.dialCode,
        flag: country.flag,
        mask: country.mask,
        phoneNumber: '',
        selectedCountry: country,
      });
      this.hideModal();
    } catch (err) {
      const defaultCountry = this.state.defaultCountry;
      this.setState({
        dialCode: defaultCountry.dialCode,
        flag: defaultCountry.flag,
        mask: defaultCountry.mask,
        phoneNumber: '',
        selectedCountry: defaultCountry,
      });
    }
  };

  filterCountries = (value) => {
    const {lang} = this.props;
    const countryData = data.filter(
      (obj) =>
        obj[lang?.toLowerCase() ?? 'en']?.indexOf(value) > -1 ||
        obj.dialCode.indexOf(value) > -1,
    );
    this.setState({countryData});
  };

  focus() {
    this.props.inputRef.current.focus();
  }

  renderModal = () => {
    if (this.props.customModal)
      return this.props.customModal(
        this.state.modalVisible,
        this.state.countryData,
        this.onCountryChange,
      );
    const {
      countryModalStyle,
      modalContainer,
      modalFlagStyle,
      filterInputStyle,
      modalCountryItemCountryNameStyle,
      modalCountryItemCountryDialCodeStyle,
      closeText,
      filterText,
      searchIconStyle,
      closeButtonStyle,
      lang,
    } = this.props;

    return (
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        onRequestClose={() => this.hideModal()}
        visible={this.state.modalVisible}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: 40,
            backgroundColor: 'rgba(10,10,10, 0.5)',
          }}>
          <View style={[styles.modalContainer]}>
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: '#333'}}>
                  Selecionar código do país
                </Text>
                <TouchableOpacity
                  onPress={() => this.hideModal()}
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={'close-outline'} size={28} color={'#888'} />
                </TouchableOpacity>
              </View>
              <View style={styles.filterInputStyleContainer}>
                <TextInput
                  autoFocus
                  onChangeText={this.filterCountries}
                  placeholder={filterText || 'Filtrar'}
                  placeholderTextColor={'#ccc'}
                  style={[styles.filterInputStyle, filterInputStyle]}
                />
                <Icon name={'search-outline'} size={25} color={'#29a73d'} />
              </View>
            </View>

            <FlatList
              style={{flex: 1}}
              data={this.state.countryData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.clearTextInput();
                    this.onCountryChange(item.code);
                  }}>
                  <View style={[styles.countryModalStyle, countryModalStyle]}>
                    <Text style={[styles.modalFlagStyle, modalFlagStyle]}>
                      {item.flag}
                    </Text>
                    <View style={styles.modalCountryItemContainer}>
                      <Text
                        style={[
                          styles.modalCountryItemCountryNameStyle,
                          modalCountryItemCountryNameStyle,
                        ]}>
                        {item[lang?.toLowerCase() ?? 'en']}
                      </Text>
                      <Text
                        style={[
                          styles.modalCountryItemCountryDialCodeStyle,
                          modalCountryItemCountryDialCodeStyle,
                        ]}>{`  ${item.dialCode}`}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  };

  renderAction = () => {
    const renderAction = this.props.renderAction;
    if (renderAction) {
      if (typeof renderAction !== 'function')
        throw 'The renderAction is not a function. Please set a renderAction function on there';
      else return this.props.renderAction();
    }
    return null;
  };

  render() {
    const {flag} = this.state;
    const {
      flagStyle,
      inputProps,
      containerStyle,
      phoneInputStyle,
      onSubmitEditing,
      dialCodeTextStyle,
    } = this.props;
    return (
      <View style={{...styles.container, ...containerStyle}}>
        <TouchableOpacity onPress={() => this.showModal()}>
          <View style={styles.openDialogView}>
            <Text style={[styles.flagStyle, flagStyle]}>{flag}</Text>
            <Text style={[styles.dialCodeTextStyle, dialCodeTextStyle]}>
              {this.state.dialCode}
            </Text>
          </View>
        </TouchableOpacity>

        <TextInput
          {...inputProps}
          style={[styles.phoneInputStyle, phoneInputStyle]}
          placeholder={
            this.props.placeholder || this.state.mask.replace(/9/g, '_')
          }
          // autoFocus
          autoCorrect={false}
          returnKeyType="send"
          secureTextEntry={false}
          keyboardType="number-pad"
          placeholderTextColor={'#ccc'}
          value={this.state.phoneNumber}
          onChangeText={this.onChangeText}
          onSubmitEditing={onSubmitEditing}
        />

        <TouchableOpacity
          disabled={this.state.phoneNumber.length === 0}
          onPress={() => {
            this.onChangePropText('', '');
            this.setState({phoneNumber: ''});
          }}
          style={styles.trashButton}>
          <Icon
            name={'trash-outline'}
            size={20}
            color={this.state.phoneNumber.length !== 0 ? '#F88' : '#aaa'}
          />
        </TouchableOpacity>
        {this.renderAction()}
        {this.renderModal()}
      </View>
    );
  }
}

IntlPhoneInput.propTypes = {
  lang: PropTypes.string,
  closeText: PropTypes.string,
  inputRef: PropTypes.object,
  customModal: PropTypes.func,
  flagStyle: PropTypes.object, // {}
  onChangeText: PropTypes.func,
  filterText: PropTypes.string,
  clearTextInput: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  defaultCountry: PropTypes.string,
  modalContainer: PropTypes.object, // {}
  containerStyle: PropTypes.object, // {}
  phoneInputStyle: PropTypes.object, // {}
  searchIconStyle: PropTypes.object,
  filterInputStyle: PropTypes.object, // {}
  dialCodeTextStyle: PropTypes.object, // {}
  closeButtonStyle: PropTypes.object, // {}
  disableCountryChange: PropTypes.bool,
  modalCountryItemCountryNameStyle: PropTypes.object, // {}
};

const styles = StyleSheet.create({
  closeTextStyle: {
    padding: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  modalCountryItemCountryDialCodeStyle: {
    fontSize: 15,
  },
  modalCountryItemCountryNameStyle: {
    flex: 1,
    color: '#333',
    fontSize: 15,
  },
  modalCountryItemContainer: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  modalFlagStyle: {
    fontSize: 22,
  },
  trashButton: {
    width: 40,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 10,
    elevation: 5,
    paddingTop: 13,
    paddingHorizontal: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  flagStyle: {
    fontSize: 25,
  },
  dialCodeTextStyle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  countryModalStyle: {
    flex: 1,
    padding: 12,
    marginHorizontal: 15,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  openDialogView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchIcon: {
    padding: 10,
  },
  filterInputStyleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  phoneInputStyle: {
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 5,
    color: '#101010',
  },
  container: {
    flex: 1,
    padding: 5,
    // paddingLeft: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  searchIconStyle: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  countryStyle: {
    flex: 1,
    borderColor: 'black',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    padding: 12,
    alignItems: 'center',
  },
});
