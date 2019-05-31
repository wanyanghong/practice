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
      flag:false,
      list:[]
    }
  }
  componentWillMount () {}
  componentDidMount () {} 
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
        if(res.data.name==''&&res.data.passWord==''){
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
    wx.getStorage({
      key: 'guan',
      success: (res)=>{
       this.setState({
         list:res.data
       })
      }
    })
  } 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  Unclcik(index){
    console.log(index)
    let arr=this.state.list.splice(index,0)
    this.setState({
      list:this.state.list
    })
    console.log(this.state.list.splice(index,1))
  }
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
        <View style={this.state.flag?{display:'block'}:{display:'none'}} className="guan">
          {
            this.state.list.map((item,index)=>{
              return <View key={index} className="Item" >
                <View className="list">
                  <Image src={item.header} />
                  <Text>{item.screen_name}</Text>
                 </View>
                 <Button onClick={()=>{this.Unclcik(index)}} className="btns">取消关注</Button>
              </View>
            })
          }
        </View>
      </View> 
    );
  }
}
export default Follow;