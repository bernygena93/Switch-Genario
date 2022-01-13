import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    elevation: 1,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 200,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#f72585',
  },
  button2: {
    backgroundColor: '#b5179e',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D5D5D5',
    width: 50,
    marginBottom: 15,
  },
  input: {
    fontSize: 22,
    fontWeight: '500',
  },
});
