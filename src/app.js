import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/attention/attention',
      'pages/follow/follow',
      'pages/my/my',
      'pages/fill/fill',
      'pages/ping/ping'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: 'white',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    
    },
    tabBar:{
      position:"bottom",
      "list":[
        {
          text:'精华',
          pagePath:"pages/index/index",
          iconPath:'images/Essence play.png',
          selectedIconPath:'images/Essence.png'
        },
        {
          text:'推荐关注',
          pagePath:"pages/attention/attention",
          iconPath:'images/follow.png',
          selectedIconPath:'images/follow play.png'
        },
        {
          text:'关注',
          pagePath:"pages/follow/follow",
          iconPath:'images/Recommended attention.png',
          selectedIconPath:'images/Recommended attention play.png'
        },
        {
          text:'我',
          pagePath:"pages/my/my",
          iconPath:'images/my.png',
          selectedIconPath:'images/my play.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
