import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Ping extends Component {

   config = {
    navigationBarTitleText: '评论',
    navigationBarBackgroundColor: '#000',
    navigationBarTextStyle: 'white',
  }
  constructor(){
    this.state={
      list:[]
    }
  }

  componentWillMount () {}
  componentDidMount () {
    wx.getStorage({
      key: 'data',
      success: (res)=>{
        this.setState({
          list:[res.data]
        })
        console.log(res.data)
      }
    });
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="wrap">
        {
          this.state.list.map((item,index)=>{
            return <View className="list" key={index}>
              <View className="top" style={item.top_cmt.length<=0?{display:'block'}:{display:'none'}}>
                <View>这条动态暂时还没有评论哦~~~</View>
              </View>
              <View className="bottom" style={item.top_cmt.length>0?{display:'block'}:{display:'none'}}>
                {
                  item.top_cmt.map((items,index)=>{
                    return <View className="bottomList" key={index}>
                       <View className="left">
                        <Image src={items.user.profile_image} />
                        <Text>{items.user.username}</Text>
                       </View>
                       <View className="Text">{items.content}</View>
                    </View>
                  })
                }
              </View>
            </View>
          })
        }
      </View>
    );
  }
}
export default Ping;