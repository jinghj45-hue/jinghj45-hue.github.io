// Shared catalogue: the home cards and their standalone detail pages.
window.portfolioWorks = [
  {image:'game',title:'中东地区游戏聚合平台APP',year:'2025',tags:['C端','UI/UX']},
  {image:'zhitou',title:'诸葛智投视频号电商投流平台',year:'2023',tags:['B端','UI/UX']},
  {image:'tuitui',title:'诸葛推推视频号电商店铺管理平台',year:'2023',tags:['B端','UI/UX']},
  {image:'juguang',title:'诸葛聚光小红书电商投流平台',year:'2024',tags:['B端','UI/UX']},
  {image:'mianshi',title:'面试教练APP',year:'2025',tags:['C端','UI/UX']},
  {image:'pinan',title:'平安健康保险年终报告',year:'2024',tags:['C端设计','H5设计']},
  {image:'manju',title:'AI漫剧制作平台',year:'2025',tags:['B端','UI/UX']},
  {image:'aiwonderland',title:'AI Wonderland Team海外官网',year:'2024',tags:['C端','UI/UX']},
  {image:'chondian',title:'充电调度系统平台',year:'2022',tags:['B端','UI/UX']},
  {image:'web3',title:'海外金融交易APP',year:'2021',tags:['C端','UI/UX']},
  {image:'2024zanhui',title:'2024展望新电商展会活动设计',year:'2024',tags:['视频剪辑','展会设计']},
  {image:'shipinzanhui',title:'首届视频号电商展会活动设计',year:'2023',tags:['视频剪辑','展会设计']},
  {image:'gonpai2.0',title:'蓝鲨工牌2.0设计',year:'2022',tags:['品牌文化建设','周边设计']},
  {image:'fruitip',title:'水果家族人格IP设计',year:'2023',tags:['IP设计','周边设计']},
  {image:'honbao',title:'牛年红包周边设计',year:'2021',tags:['IP设计','周边设计']},
  {image:'school',title:'福州外语外贸学院15周年校庆展板设计',year:'2018',tags:['活动设计','展板设计']},
  {image:'lansha7',title:'蓝鲨7周年活动',year:'2022',tags:['品牌文化建设','活动设计']}
];
window.portfolioAsset = name => name === 'school' || name === 'xiaoqin'
  ? 'assets/img_banner_school_hd.webp'
  : name === 'lansha7' ? 'assets/img_banner_lansha7.webp'
  : name === 'pinan' ? 'assets/img_banner_pinan.webp'
  : `assets/img_banner_${name}@2x.webp`;
