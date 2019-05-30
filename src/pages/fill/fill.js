import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

 class Fill extends Component {

   config = {
       navigationBarTitleText: ''
  }
  constructor(){
      this.state={
          title:'父传子',
          name:'hhhh'
      }
  }

  hahah(){
      this.setState({
          name:'哈哈哈'
      })
  }
  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <Text onClick={()=>{this.hahah()}}>看我页面</Text>
        <View>{this.state.name}</View>
      </View>
    );
  }
}
export default Fill;