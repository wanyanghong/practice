import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView,  Video, Audio, Image} from '@tarojs/components'
import './index.scss'
import Header from '../../component/header/header'
import Up from '../../images/up.png'
import Down from '../../images/down.png'
import Zhuan from '../../images/zhuan.png'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '百思',
    navigationBarBackgroundColor: '#000',
    navigationBarTextStyle: 'white',
    onReachBottomDistance:50,
    enablePullDownRefresh:true
    
  }
  constructor(){
    this.state={
      headerList:[
          {
            name:'全部',
            type:1,
            flag:true,
            name1:"q"
          },
          {
            name:'视频',
            type:41,
            flag:false,
            name1:'s'
          },
          {
            name:'图片',
            type:10,
            flag:false,
            name1:'t'
          },
          {
            name:'段子',
            type:29,
            flag:false,
            name1:'d'
          },
          {
            name:'声音',
            type:31,
            flag:false,
            name1:"S"
          }
      ],
      type:1,
      dataList:[],
      page:1,
      navTop:0,
      flag:false,
      name:"q"
    }
  }

  componentWillMount () { }

  componentDidMount () {
    wx.request({
      url: `http://api.budejie.com/api/api_open.php?a=list&c=data&type=1&page=1`,
      success: (res)=>{
        this.setState({
            dataList:res.data.list
          })
       }
    });
      let selQuery = wx.createSelectorQuery();
      selQuery.select('.header').boundingClientRect()
      selQuery.selectViewport().scrollOffset()
      selQuery.exec(function(res){
        res[0].top       // #the-id节点的上边界坐标
        console.log(res[0].top)
        res[1].scrollTop // 显示区域的竖直滚动位置
      })
      wx.setStorage({
        key: 'name',
        data:{name:'',passWord:''}
      });
      wx.setStorage({
        key: 'user',
        data: {user:'sunliang',pwd:'sunliang0928'},
      });
  }
  headerVal(val){
    console.log(val)
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  isShow(val,name){
    console.log(name)
    this.state.headerList.map((item,index)=>{
      if(item.type==val){
        this.state.headerList[index].flag=true
        this.setState({
          headerList:this.state.headerList
        })
        this.setState({
          type:val,
          name:name
        })
        wx.request({
          url: `http://api.budejie.com/api/api_open.php?a=list&c=data&type=${val}&page=1`,
          success: (res)=>{
            this.setState({
                dataList:res.data.list
              })
           }
        })
      }else{
        this.state.headerList[index].flag=false
        this.setState({
          headerList:this.state.headerList
        })
      }
    })
  }
  render () {
    return (
      <View className='index'>
        <View className={this.state.flag?"headerFix":"header"}>
          <Header headerList={this.state.headerList} onIsShow={this.isShow.bind(this)} />
        </View>
        <ScrollView className='scroll' scrollY scrollIntoView={this.state.name} scrollTop="0">
         <View id={this.state.name} >
            {
                this.state.dataList.map ((item,index)=>{
                  return <View className="item" key={index} >
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
                    <View className="bottomList">
                        <View className="list">
                          <Image src={Up} />
                          <Text>{item.ding}</Text>
                        </View>
                        <View className="list">
                          <Image src={Down} />
                          <Text>{item.cai}</Text>
                        </View>
                        <View className="list">
                          <Image src={Zhuan} />
                          <Text>{item.top_cmt.length<=0?0:item.top_cmt.length}</Text>
                        </View>
                      </View>
                  </View>
                })
              }
         </View>
      </ScrollView>
      </View>
    )
  }
  onReachBottom(){
    //console.log(111)
    this.setState({
      page:++this.state.page
    })
    console.log(this.state.page)
    wx.request({
      url: `http://api.budejie.com/api/api_open.php?a=list&c=data&type=${this.state.type}&page=${this.state.page}`,
      success: (res)=>{
        this.setState({
            dataList:res.data.list
          })
       }
    })
    // console.log(this.state.dataList)
  }
  onPullDownRefresh(){

  }
  onPageScroll(e){
    if(e.scrollTop>=this.state.navTop){
      if(this.state.flag){
        return
      }
      this.setState({
        flag:true
      })
    }else{
      this.setState({
        flag:false
      })
    }
  }
}
