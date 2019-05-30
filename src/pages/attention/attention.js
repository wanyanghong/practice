import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Attention extends Component {

   config = {
       navigationBarTitleText: '推荐关注',
       navigationBarBackgroundColor: '#000',
       navigationBarTextStyle: 'white',
  }

  constructor(){
    this.state={
      leftList:[],
      category_id:5,
      rightList:[]
    }
  }
  componentWillMount () {}
  componentDidMount () {
    Taro.request({
      url:'http://api.budejie.com/api/api_open.php?a=category&c=subscribe',
      success:(res)=>{
        this.setState({
          leftList:res.data.list
        })
      }
    })
    Taro.request({
      url:`http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${this.state.category_id}`,
      success:(res)=>{
        this.setState({
          rightList:res.data.list
        })
      }
    })
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
        <View className="left">
          {
            leftList.map((item,index)=>{
              return <View key={index}>{item.name}</View>
            })
          }
        </View>
        <ScrollView className="rightList" scrollY>
          {
            rightList.map((item,index)=>{
              return <View key={index} className="item">
                <View className="leftItem">
                  {/* <Image src={item.header} /> */}
                  <View className="right">
                    <Text>{item.screen_name}</Text>
                    <Tetx>{item.fans_count}人以关注</Tetx>
                  </View>
                </View>
                <Button>+关注</Button>
              </View>
            })
          }
        </ScrollView>
      </View>
    );
  }
}
export default Attention;