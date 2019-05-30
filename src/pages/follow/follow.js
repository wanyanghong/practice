import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Image} from '@tarojs/components';
import car from '../../images/cat.png'
class Follow extends Component {

   config = {
       navigationBarTitleText: '关注',
       navigationBarBackgroundColor: '#000',
       navigationBarTextStyle: 'white'
  }
  constructor(){
    this.state={
      flag:false
    }
  }

 

  componentWillMount () {}
  componentDidMount () {
  
  } 
  login(){
    wx.navigateTo({
      url: '../fill/fill'
    });
  }
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {
    wx.getStorage({
      key: 'name',
      success: (res)=>{
        console.log(res)
        if(res.data.name==''||res.data.passWord==''){
          console.log(111)
          this.setState({
            flag:false
          })
        }else{
          this.setState({
            flag:true
          })
        }
      }
    });
  } 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  
  render() {
    return (
      <View className="wrap">  
        <View style={this.state.flag?{display:'none'}:{display:'block'}} className="login">
          <Image src={car} />
          <View>快快登陆吧，关注百思最in牛人</View>
          <View>好友动态让你过把瘾儿~</View>
          <View>哦耶~~~</View>
          <Button className="btn" onClick={()=>{this.login()}}>立即登陆/注册</Button>
        </View>
        <View style={this.state.flag?{display:'block'}:{display:'none'}}>
          一登陆
          {
            console.log(this.state)
          }
        </View>
      </View> 
    );
  }
}
export default Follow;