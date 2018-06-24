import Taro, {Component} from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';
import {observer, inject} from '../../taro-mobx/index';
import './index.scss';

@inject('store')
@observer
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {store} = this.props;
    return (
      <View className='index'>
        <Text> {store.num} </Text>
        <Button
          onClick={this.props.store.handleAdd}
          size='mini'
        >
          按钮+
        </Button>
        <Button
          onClick={this.props.store.handleMinus}
          size='mini'
        >
          按钮-
        </Button>
      </View>
    );
  }
}
