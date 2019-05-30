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
    this.request('http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=5')
  } 
  request(url){
    Taro.request({
      url:url,
      success:(res)=>{
        this.setState({
          rightList:res.data.list
        })
      }
    })
  }
  clcikLeft(id){
    this.request(`http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${id}`)
    this.setState({
      category_id:id
    })
  }
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    console.log(this.state.category_id)
    return (
      <View className="wrap">
        <View className="left">
          {
            this.state.leftList.map((item,index)=>{
              return <Text key={index} className={this.state.category_id==item.id?"leftAdd":"leftList"} onClick={()=>{this.clcikLeft(item.id)}} >{item.name}</Text>
            })
          }
        </View>
        <ScrollView className="rightList" scrollY>
          {
            rightList.map((item,index)=>{
              return <View key={index} className="item">
                <View className="leftItem">
                  <Image src={item.header} />
                  <View className="right">
                    <Text>{item.screen_name}</Text>
                    <Tetx>{item.fans_count}人以关注</Tetx>
                  </View>
                </View>
                <Button className="btn">+关注</Button>
              </View>
            })
          }
        </ScrollView>
      </View>
    );
  }
}
export default Attention;