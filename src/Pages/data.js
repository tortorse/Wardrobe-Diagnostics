const quiz = {
  questions: [
    {
      id: 0,
      content: '你穿着不喜欢的衣服的频率有多少?',
      options: [
        {
          key: 0,
          content: '大多数时候',
          next: 1
        },
        {
          key: 1,
          content: '极少',
          next: 2
        }
      ]
    },
    {
      id: 1,
      content: '尝试跳出自己的舒适区，变得更有创意，并重新界定自己的个人风格。',
      options: [
        {
          key: 0,
          content: '我并没有多少真正喜欢的衣服。我觉得已处理绝大多数衣服都很无聊、安全、可有可无',
          result: '尝试跳出自己的舒适区，变得更有创意，并重新界定自己的个人风格。'
        },
        {
          key: 1,
          content: '我不确定自己喜欢什么，但我希望能穿的更好看。',
          result: '尝试收集海量灵感素材，找出自己喜欢那些样式、颜色和版型'
        },
        {
          key: 2,
          content: '理论上，我知道自己喜欢什么，可一旦试穿，就觉得什么都不对劲',
          result: '尝试找出最让自己感觉自信的服装类型，练习把个人风格外化为自己喜欢穿着的服饰'
        }
      ]
    },
    {
      id: 2,
      content: '你是否知道,到底哪种版型、颜色和面料能让你最为自信和舒适?',
      options: [
        {
          key: 0,
          content: '是'
        },
        {
          key: 1,
          content: '不知道,寻找我喜欢的衣服总有些漫无目的',
          result: '尝试体验各种各样的造型,找 出自己喜欢的和不喜欢的'
        }
      ]
    }
  ]
}
export default quiz
