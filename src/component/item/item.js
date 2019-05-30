import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Item extends Component {

   config = {
      navigationBarTitleText: '',
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
      let { listItem } = this.props
    return (
        <View>
        {
          listItem&&listItem.map ((item,index)=>{
            return <View id="item" key={index}>
              <View className="top">
                <Image src={item.profile_image} />
                <View className="right">
                  <Text>{item.name}</Text>
                  <Text>{item.created_at}</Text>
                </View>
              </View>
              <View className="detail">
                <Text>{item.text}</Text>
                <View className="center">
                  <Video src={item.videouri} style={item.videouri||(item.cdn_img&&item.voiceuri)?{display:'block'}:{display:'none'}} controls poster={item.bimageuri} />
                  <Audio src={item.voiceuri} controls loop style={item.voiceuri&&(!item.cdn_img&&!item.videouri)?{display:'block'}:{display:'none'}} className="auido" poster={item.bimageuri} />
                  <Image src={item.cdn_img} style={item.cdn_img&&(!item.videouri&&!item.voiceuri)?{display:'block',width:item.width+'rpx',height:item.height+'rpx'}:{display:'none'}} />
                </View>
              </View>
            </View>
          })
        }
        </View>
    );
  }
}
export default Item;