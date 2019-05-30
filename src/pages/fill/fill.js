import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Input} from '@tarojs/components';

 class Fill extends Component {

   config = {
       navigationBarTitleText: '登陆',
       navigationBarBackgroundColor: '#000',
       navigationBarTextStyle: 'white'
  }
  constructor(){
    this.state={
      name:'',
      passWord:''
    }
  }
  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  loginIng(){
    wx.getStorage({
      key: 'user',
      success: (res)=>{
        if(res.data.user==this.state.name&&res.data.pwd==this.state.passWord){
          wx.navigateBack({
            delta: 1
          });
        }else{
          wx.showToast({
            title: '密码或账号错误',
            icon: 'none',
            duration: 1500
          });
        }
      }
    });
    wx.setStorage({
      key: 'name',
      data: {name:this.state.name,passWord:this.state.passWord}
    });
   
  }
  render() {
    return (
      <View className="wrap">
        <View className="top">
          <Input type="text" placeholder="输入用户名" onInput={(e)=>{this.setState({name:e.detail.value})}}/>
          <Input type="text" placeholder="请输入密码" onInput={(e)=>{this.setState({passWord:e.detail.value})}}/>
        </View>
        <Button onClick={()=>{this.loginIng()}}>登陆</Button>
      </View>
    );
  }
}
export default Fill;