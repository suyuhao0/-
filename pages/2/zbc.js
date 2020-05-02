// pages/2/zbc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seteIndex:0,
    image:"",
    list:[
      {
        "catename":"各护健康",
        "image":"/image/1.png",
        "cateitems": [
          { name: "鼻腔护理", "img": "/image/1-1.png",
            arr:[
              { image: "/image/1.1.1.png", 
                txt:"新西兰进口呵护鼻腔修复黏膜的护鼻水",
                tet2:"原装进口，泸卡蜂蜜提取,保护鼻黏膜，滋润鼻腔。",
                price:99
              },
              {
                image: "/image/1.1.2.png",
                txt: "便利清洗又不伤肤的鼻毛修剪器", 
                txt2:"小巧便携，珥耗角均可修剪，抗菌刀头，- -冲即净",
                price: 69
              },
              {
                image: "/image/1.1.3.png",
                txt: "一瓶解决多种鼻腔问题的清洁喷雾",
                txt2: "预防鼻炎，缓解鼻充血，除垢通气，抗霾除菌，滋润清洁鼻腔",
                price: 79
              },
              {
                image: "/image/1.1.4.png",
                txt: "薄荷精油鼻通三支装boom.boom", 
                txt2: "天然成分制成，提神洗脑",
                price: 149
              }
            ] 
          },
          {
            name: "面部护理", "img": "/image/1-2.png",
            arr: [
              {
                image: "/image/1.2.1.png", 
                txt: "紫禁城东方美学凸显气质的精美口红礼盒",
                txt2: "古典传统设计，优雅东方美学，低调不失气质，唇间轻点红玛瑙，玲珑琥珀散晶光。",
                price: 199
              },
              {
                image: "/image/1.2.2.png",
                txt: "祛黑头祛痘二合- -的可视化智能祛黑头仪",
                txt2: "微型摄像，十倍放大，手机边看边吸黑头，多档模式，清洁肌肤。",
                price: 299
              },
              {
                image: "/image/1.2.3.png",
                txt: "-支提升气场又显白的红丝绒口红",
                txt2: "国际一线化妆品牌同厂研发，显色有质感，哑光又滋润，礼盒装含三个不会出错的热门色",
                price: 198
              },
              {
                image: "/image/1.2.4.png",
                txt: "十大功效于-体的十全大补面膜礼盒",
                txt2: "礼盒含面膜+眼霜，拯救熬夜脸，淡化细纹，收缩毛孔，舒缓不刺激，提亮肤色",
                price: 339
              },
              {
                image: "/image/1.2.5.png",
                txt: "温和清洁不伤肤的软萌屁桃君洁面仪礼盒",
                txt2: "软萌造型，深层洁肤不伤肤，四大洁净模式，防震不手麻，无线充电",
                price: 339
              },
              {
                image: "/image/1.2.6.png",
                txt: "清洁按摩两不误的便携硅胶洁面仪",
                txt2: "改善黑头痘痘粉刺，深层清洁，3种档位，USB接口，防水防潮防腐，温和无刺激",
                price: 98
              },
              {
                image: "/image/1.2.7.png",
                txt: "唯美复古风的颐和园百鸟朝凤九色眼影",
                txt2: "唯美复古风的颐和园百鸟朝凤九色眼影就足够，送礼自用两相宜",
                price: 99.9
              },
              {
                image: "/image/1.2.8.png",
                txt: "颐和园中国古风精美礼盒的气垫bb霜",
                txt2: "定制古风礼盒，送替换装,提亮遮瑕，控油持妆，防水防汗，送礼自用两相宜",
                price: 139.9
              },
              {
                image: "/image/1.2.9.png",
                txt: "水润亮白的净透焕亮礼套装",
                txt2: "肌肤哲理经典三部曲，清爽洗面奶+焕肤套装+清新保湿霜，送礼自用都合适",
                price: 339
              },
              {
                image: "/image/1.2.10.png",
                txt: "改善黑头痘印的黑氧面膜贴5片装",
                txt2: "8分钟清洁黑头淡痘印，温和疏通不伤毛孔",
                price: 116
              },
              {
                image: "/image/1.2.11.png",
                txt: "舒缓眼部疲劳的冷热敷便携舒眼仪",
                txt2: "Hello Kitty正版授权,天10分钟，双重护眼，舒缓眼部浮肿，3种充电方式，送便携收纳袋",
                price: 199
              },
              {
                image: "/image/1.2.12.png",
                txt: "清洁保湿两不误的氨基酸洁面仪套装",
                txt2: "氨基酸洁面乳+硅胶洁面仪，比手洗更干净，控油不伤肤，洗后脸不绷",
                price: 169
              },
              {
                image: "/image/1.2.13.png",
                txt: "15分钟导出黑头又不伤毛孔的鼻贴",
                txt2: "温和不伤鼻头，舒适四层棉布，操作简便，不含激素",
                price: 199
              }
            ]
          },
          { name: "按摩保健", "img": "/image/1-3.png",
            arr:[
              {
                image: "/image/1.3.1.png", 
                txt: "仿真指压舒缓颈背的恒温热敷按摩靠枕",
                txt2:"4颗平滑按摩头，仿真指压按摩，有效缓解肌肉酸痛，多个部位可用，舒缓全身疲惫",
                price:329
              },
              {
                image: "/image/1.3.2.png",
                txt: "缓解腿部疲劳的便携无线按摩器",
                txt2: "每天15分钟，塑造腿型，舒缓疲劳，运动恢复，气囊按摩,小巧便携",
                price: 559
              },
              {
                image: "/image/1.3.3.png",
                txt: "拯救女友姨妈痛的暖宫宝",
                txt2: "会员折扣|会员专字折扣",
                price: 69
              },
              {
                image: "/image/1.3.4.png",
                txt: "舒缓疼痛和疲劳的随身智能按摩贴",
                txt2: "身按摩,亲肤材质，自动吸附，迷你便携，持久续航，多人群适用",
                price: 79.9
              },
              {
                image: "/image/1.3.5.png",
                txt: "一键告别打鼾烦恼的智能喉部止鼾器",
                txt2: "精准识别，干预鼾声,小巧便携，佩戴舒适，可查看睡眠质报告, 使用简单",
                price: 49
              },
              {
                image: "/image/1.3.6.png",
                txt: "舒缓整个腰背的大尺寸记忆棉腰靠",
                txt2: "舒缓整个腰背的大尺寸记忆棉腰靠持久耐用，办公室or车用，3色可选，超大尺寸, 3d设计贴合人体骨骼",
                price: 188
              },
              {
                image: "/image/1.3.7.png",
                txt: "告别打鼾烦恼的止鼾睡眠眼罩",
                txt2: "柔软舒适，配合app数据分析，告别打鼾烦恼，精美包装,送礼体面",
                price: 399
              },
              {
                image: "/image/1.3.8.png",
                txt: "媲美按摩椅指压式按摩的多用颈部按摩仪",
                txt2: "立体按摩头，仿真指压，环绕式温感热敷,模拟人手力度和温度，深层缓解颈部疲劳。",
                price: 299
              },
              {
                image: "/image/1.3.9.png",
                txt: "全方位仿真指压揉捏推拿的温感按摩抱枕",
                txt2: "4个3D揉捏按摩头，指压按捏，按摩加热,一次按摩15分钟，腰背肩颈完美贴合",
                price: 299
              },
              {
                image: "/image/1.3.10.png",
                txt: "久坐不累的3D水感降温气囊坐垫/靠垫",
                txt2: "减轻大腿压迫感，舒缓臀部压力，久坐不热，呵护尾椎，通风透气",
                price: 189
              },
            ] 
          },
          { name: "洗发护发", "img": "/image/1-4.png",
            arr:[
              {
                image:"/image/1.4.1.png",
                txt: "可舒缓身心持久留香的二合- -洗发沐浴露",
                txt2:"祛除体表油腻汗味，持久留香，杆不紧绷，焕发活力,温和肌肤，简单方便",
                price:99
              },
              {
                image: "/image/1.4.2.png",
                txt: "防脱育发强韧发丝的意大利洗护套装",
                txt2: "补充营养，苏毛续，长效控油，告别脱发烦恼",
                price: 118
              },
              {
                image: "/image/1.4.3.png",
                txt: "教造型的男士发型组合装(发泥+发胶)",
                txt2: "清爽不粘腻，气味清新不刺鼻，易清洗",
                price: 66
              },
              {
                image: "/image/1.4.4.png",
                txt: "中草药提炼的控油洗发套装",
                txt2: "医疗级的控油洗护，科学控油养发",
                price: 138
              },
              {
                image: "/image/1.4.5.png",
                txt: "便携迷你气囊梳ARTH1英国KENT",
                txt2: "无痛疏通打结，避免伤发",
                price: 129
              },
              {
                image: "/image/1.4.6.png",
                txt: "英国猪鬃毛顺发梳KENT",
                txt2: "送赠品",
                price: 149
              },
              {
                image: "/image/1.4.7.png",
                txt: "[新人专享价]防脱育发强韧发丝的意大利洗护套装",
                txt2: "补充营养，苏毛续，长效控油，告别脱发烦恼",
                price: 329.9
              },
              {
                image: "/image/1.4.8.png",
                txt: "去屑控油的芦荟修护洗发露",
                txt2: "呵护3种发质，控油止痒，蓬松顺滑，防止干枯打结,孕妇可放心使用",
                price: 169
              },
            ] 
          },
          { name: "美容仪器", "img": "/image/1-5.png",
            arr:[
              {
                image:"/image/1.5.1.png",
                txt: "NuFACE改善细纹的便携微电流美容仪",
                txt2:"脸部塑形，紧致肌肤，V脸神器，促进代谢，FDA认证，操作简单",
                price:1499
              },
              {
                image: "/image/1.5.2.png",
                txt: "嫩肤脱毛仪mushu木薯",
                txt2: "脱毛、嫩肤、祛痘集-身",
                price: 1499
              },
              {
                image: "/image/1.5.3.png",
                txt: "飞利浦男士眼部能量仪MS3020 PHILIPS",
                txt2: "缓解疲劳,焕能双眼",
                price: 899
              },
              {
                image: "/image/1.5.4.png",
                txt: "雅萌射频再生美颜仪HRF-10T",
                txt2: "6大功能，唤醒Q弹肌肤",
                price: 2599
              },
              {
                image: "/image/1.5.5.png",
                txt: "日立舒缓眼部疲劳可热敷冷敷的迷你护眼仪",
                txt2: "冷热双模式，舒缓眼睛疲劳，3D贴合眼部设计，小巧便携，呵护放松眼部。",
                price: 899
              },
              {
                image: "/image/1.5.6.png",
                txt: "格朗美鼻毛剪GROOM MATE",
                txt2: "安全利索，磨具精密",
                price: 339
              },
            ] 
          },
          { name: "纤体塑身", "img": "/image/1-6.png",
            arr:[
              {
                image: "/image/1.6.1.png",
                txt: "智能塑形腰带炸脂机攀高Pangao",
                txt2: "随时随地，受就瘦",
                price: 299
              },
              {
                image: "/image/1.6.2.png",
                txt: "在家就能锻炼腹肌燃脂瘦腰的十合一多功能健身器",
                txt2: "器多用，锻炼全身,在家就能练出腹肌、小蛮腰，折叠收纳不占地",
                price: 299
              },
              {
                image: "/image/1.6.3.png",
                txt: "小巧便携瘦身按摩仪LEBODY",
                txt2: "每天十分钟，还你魔鬼身材",
                price: 2199
              },
              {
                image: "/image/1.6.4.png",
                txt: "美国健身运动腰带拉链款Flipbelt",
                txt2: "排汗透气，超大容量",
                price: 249
              },
              {
                image: "/image/1.6.5.png",
                txt: "美国健身运动腰带经典款Flipbelt",
                txt2: "排汗透气，超大容量",
                price: 199
              }
            ] 
          },
          { name: "香水香氛", "img": "/image/1-7.png",
            arr:[
              {
                image: "/image/1.7.1.png",
                txt: "低调沉稳木香随身随用的固体香膏",
                txt2: "固体香育，香味持久，方便携带，随身取用，浑厚木香，低调沉稳",
                price: 88
              },
              {
                image: "/image/1.7.2.png",
                txt: "小众不撞香的小羊皮随身香水礼盒",
                txt2: "法国高级香料，高档羊皮包装，留香长达8小时，多款式可选",
                price: 119
              },
              {
                image: "/image/1.7.3.png",
                txt: "让浪漫更有仪式感的香董蜡烛礼盒",
                txt2: "创意礼物，内赠专属灭烛罩与金砖火柴，陶瓷杯身，雕塑装饰，0化学添加，精美礼包装",
                price: 385
              },
              {
                image: "/image/1.7.4.png",
                txt: "法国进口天然精油的无火藤条香董",
                txt2: "8种香型，法国进口精油，20平米扩香范围，清新自然，安神助眠，高端礼包装",
                price: 118
              },
              {
                image: "/image/1.7.5.png",
                txt: "持款留香低调独特的固体香水",
                txt2: "极简而有质感，-只鸡蛋的重量，轻便携带，有趣的设计,支持替换装,",
                price: 118
              },
              {
                image: "/image/1.7.6.png",
                txt: "古典优雅耐人寻味的固体香水",
                txt2: "六种香调可选，精致男生的不二选择",
                price: 198
              }
            ] 
          },
          { name: "身体护理", "img": "/image/1-8.png",
            arr:[
              {
                image: "/image/1.8.1.png",
                txt: "澳洲原装进口温和无刺激的除螨皂",
                txt2: "深度除螨，祛痘淡斑",
                price: 58
              },
              {
                image: "/image/1.8.2.png",
                txt: "拯救发际线危机的日本育发精华",
                txt2: "改善脱发问题，止痒防脱，滋养头皮，搭配同系列洗发水更有效",
                price: 148
              },
              {
                image: "/image/1.8.3.png",
                txt: "24小时长效抗菌的足部除臭喷雾",
                txt2: "每天喷- -喷，解决脚气、脚痒、香港脚问题，无味不刺激，男女适用",
                price: 128
              },
              {
                image: "/image/1.8.4.png",
                txt: "高颜值的指甲油保温杯礼套组",
                txt2: "指尖上的七夕礼物，明星同款指甲油+潮牌保温杯，不样的跨界礼盒",
                price: 299
              },
              {
                image: "/image/1.8.5.png",
                txt: "日本护肤纯子宝宝皂Junco Classic EI",
                txt2: "可以吃的香皂更适合孕妇、宝",
                price: 288
              },
              {
                image: "/image/1.8.6.png",
                txt: "荷兰沐浴礼盒限量版(沐浴慕斯+乳液慕斯+去角质凝胶) greenland格兰大地角质凝胶) greenland格兰大地",
                txt2: "爱的香味，你我更亲近",
                price: 356
              }
            ] 
          },
          { name: "口腔护理", "img": "/image/1-9.png",
            arr:[
              {
                image: "/image/1.9.1.png",
                txt: "澳洲进口改善牙渍黄牙的活性炭美白牙贴",
                txt2: "原装进口，椰子壳活性炭成分，改善牙渍，拒绝大黄牙。",
                price: 188
              },
              {
                image: "/image/1.9.2.png",
                txt: "便携高颜值深度冲牙器",
                txt2: "能装进口袋的洁齿小精灵，专为东方人设计，无死角清洁牙齿",
                price: 329
              },
              {
                image: "/image/1.9.3.png",
                txt: "臻白去渍的天然活性炭洁牙粉/牙膏",
                txt2: "产自美国，4味可选，去除烟渍咖啡渍，清新口气，深层清洁，白啮",
                price: 128
              },
              {
                image: "/image/1.9.4.png",
                txt: "-支可以洁面的声波电动牙刷",
                txt2: "美齿洁面刷头随意切换，续航60天，纤细机身，防水，情侣款，高性价比",
                price: 359
              },
              {
                image: "/image/1.9.5.png",
                txt: "新西兰美白去烟渍的纯天然牙膏",
                txt2: "清新口气，洁净亮白，强健牙齿，多种搭配可选",
                price: 175
              },
              {
                image: "/image/1.9.6.png",
                txt: "瑞士美白牙渍的纯天然护理牙膏",
                txt2: "不含化学美白剂，有效解决烟渍咖啡渍牙菌斑，让笑容更健康更灿烂",
                price: 168
              }
            ] 
          },
          {
            name: "男士护理", "img": "/image/1-10.png",
            arr: [
              {
                image: "/image/1.10.1.png",
                txt: "德国刀片利落剃须的多档调节手动剃须刀",
                txt2: "7档可调，型男必备!根据你的胡须，匹配适合你的刮感,德国进口刀片，剃须干净利落",
                price: 58
              },
              {
                image: "/image/1.10.2.png",
                txt: "小巧便携的高速电动鼻毛修剪器",
                txt2: "刀头锋利耐用，无需充电，全机身防水，精致礼盒装，送礼自用都可以",
                price: 69
              },
              {
                image: "/image/1.10.3.png",
                txt: "弹力顺滑不伤肤的防水电动剃须刀",
                txt2: "速效深层洁净胡须，耐用的刀片，身防水，干湿双剃，续航时长，礼品级包装",
                price: 249
              },
              {
                image: "/image/1.10.4.png",
                txt: "蔚蓝海韵动能活力套装苏",
                txt2: "保湿控油，清爽超快感",
                price: 99
              },
              {
                image: "/image/1.10.5.png",
                txt: "蔚蓝海韵沐浴露洗发露套装苏",
                txt2: "强韧发根，改善粉刺",
                price: 89
              },
              {
                image: "/image/1.10.6.png",
                txt: "映趣轻松理发剃发的无线式理发器推剪",
                txt2: "自由定长，低噪运行，简单易上手,智能快充，无线方便使用",
                price: 89
              }
            ]
          }
        ]
      },
      {
        "catename": "手机数码",
        "image": "/image/2.jpg",
        "cateitems": [
          {
            name: "手机配件", "img": "/image/2-1.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "车载配件", "img": "/image/2-2.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "拍照配件", "img": "/image/2-3.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "电脑配件", "img": "/image/2-4.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "耳机音响", "img": "/image/2-5.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "移动电源", "img": "/image/2-6.png",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          }
        ]
      },
      {
        "catename": "家居日用",
        "image": "/image/3.jpg",
        "cateitems": [
          { name: "清洁用品", "img": "/image/3-1.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "雨伞雨具", "img": "/image/3-2.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "婴童日用", "img": "/image/3-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "宠物用品", "img": "/image/3-4.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "装饰摆件", "img": "/image/3-5.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "灯具用品", "img": "/image/3-6.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "文创用品", "img": "/image/3-7.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "运动户外", "img": "/image/3-8.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "床上用品", "img": "/image/3-9.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "杯壶酒具", "img": "/image/3-10.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "收纳用品", "img": "/image/3-11.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "餐厨用品", "img": "/image/3-12.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      },
      {
        "catename": "家用电器",
        "image": "/image/4.jpg",
        "cateitems": [
          { name: "智能电子", "img": "/image/4-1.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "厨房电器", "img": "/image/4-2.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "生活家电", "img": "/image/4-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      },
      {
        "catename": "服饰鞋靴",
        "image": "/image/5.jpg",
        "cateitems": [
          { name: "男女鞋", "img": "/image/5-1.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "男女装", "img": "/image/5-2.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "袜子", "img": "/image/5-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "女鞋", "img": "/image/5-4.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "男鞋", "img": "/image/5-5.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "内衣裤", "img": "/image/5-6.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "男装", "img": "/image/5-7.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "女装", "img": "/image/5-8.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      },
      {
        "catename": "精品箱包",
        "image": "/image/6.jpg",
        "cateitems": [
          { name: "钱包", "img": "/image/6-1.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "其他箱包", "img": "/image/6-2.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "双肩包", "img": "/image/6-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "单肩包", "img": "/image/6-4.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "行李箱", "img": "/image/6-5.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      },
      {
        "catename": "食品饮料",
        "image": "/image/7.jpg",
        "cateitems": [
          { name: "休闲零食", "img": "/image/7-1.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "粮油副食", "img": "/image/7-2.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "茶叶酒水", "img": "/image/7-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "咖啡冲饮", "img": "/image/7-4.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      },
      {
        "catename": "首饰配饰",
        "image": "/image/8.jpg",
        "cateitems": [
          {
            name: "其他配饰", "img": "/image/8-1.jpg",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          {
            name: "腰带", "img": "/image/8-2.jpg",
            arr: [
              { image: "", txt: "", price: 0 }
            ]
          },
          { name: "围巾丝巾", "img": "/image/8-3.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "眼镜", "img": "/image/8-4.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "帽子", "img": "/image/8-5.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "手表", "img": "/image/8-6.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "戒指", "img": "/image/8-7.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "首饰套装", "img": "/image/8-8.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "首饰收纳", "img": "/image/8-9.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "耳饰", "img": "/image/8-10.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "手链手镯", "img": "/image/8-11.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          },
          { name: "项链吊坠", "img": "/image/8-12.png",
            arr:[
            {image:"",txt:"",price:0}
            ] 
          }
        ]
      }
    ],
    items:[],
    title: "各护健康"
  },

  onItem(e) {
    let { index } = e.currentTarget.dataset;
    this.setData({
      title: this.data.list[index].catename,
      seteIndex: index,
      items: this.data.list[index].cateitems,
      image: this.data.list[index].image,
    })
  },

  onList(e){
    let str = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '/pages/classData/classData?nav='+str,
    })
    console.log(e.currentTarget.dataset)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.list)
    this.setData({
      title: this.data.list[this.data.seteIndex].catename,
      image: this.data.list[this.data.seteIndex].image,
      items: this.data.list[this.data.seteIndex].cateitems
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})