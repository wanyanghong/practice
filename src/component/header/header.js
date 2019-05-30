import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Header extends Component {

   config = {
       navigationBarTitleText: ''
  }
  constructor(props){
    super(props)
  }

  componentWillMount () {}
  componentDidMount () {
      
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  clickHeader(itemList){
    let { headerList } = this.props
    headerList.map((item,index)=>{
      if(item.type==itemList.type){
        this.props.onIsShow(item.type,item.name1)
      }
    })
  }
  render() {
    let { headerList } = this.props
    return (
      <View className="headerList">
        {
          headerList&&headerList.map((item,index)=>{
            return <Text key={index} className={item.flag?'active':''} onClick={()=>{this.clickHeader(item)}}>{item.name}</Text>
          })
        }
      </View>
    );
  }
}
export default Header;