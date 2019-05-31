import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import user from '../../images/user.png'
class My extends Component {

   config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#000',
    navigationBarTextStyle: 'white'
  }
  constructor(){
    this.state={
      flag:false,
      name:'',
      list:["我的设置","我的关注","我的发布","我的评论"]
    }
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {
    wx.getStorage({
      key: 'name',
      success: (res)=>{
       if(!res.data.name==''&&!res.data.passWord==""){
          this.setState({
            flag:true,
            name:res.data.name
          })
       }else{
         this.setState({
           flag:false
         })
       }
      }
    });
  }
  clcikLogin(){
    wx.navigateTo({
      url: '../fill/fill'
    });
  }
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="wrap">
        <View className="header">
          <Image src={user} />
          <View style={this.state.flag?{display:'none'}:{display:'block'}} onClick={()=>{this.clcikLogin()}} className="add">登陆/注册</View>
          <View style={this.state.flag?{display:'block'}:{display:'none'}}>{this.state.name}</View>
        </View>
        <View className="list">
          {
            this.state.list.map((item,index)=>{
              return <View className="itemList" key={index}>{item}</View>
            })
          }
        </View>
      </View>
    );
  }
}
export default My;