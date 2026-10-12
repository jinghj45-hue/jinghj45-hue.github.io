(() => {
  const params = new URLSearchParams(location.search);
  const key = params.get('work') || 'game';
  const work = window.portfolioWorks.find(item => item.image === key);
  const title = document.getElementById('projectTitle');
  const gallery = document.getElementById('projectGallery');
  if (!work) {
    title.textContent = '未找到该作品';
    document.getElementById('projectSubtitle').textContent = '请使用顶部「作品」返回作品展示。';
    return;
  }
  const syncScale = () => {
    const mobile = innerWidth < 768;
    const scale = Math.min(1, innerWidth / 1920);
    document.documentElement.style.setProperty('--scale', scale);
    document.documentElement.style.setProperty('--u', `${mobile ? (innerWidth - 32) / 1202 : scale}px`);
  };
  syncScale();
  window.addEventListener('resize', syncScale, {passive: true});
  document.title = `${work.title} · Huang Jing.`;
  const isGame = key === 'game';
  const isTuitui = key === 'tuitui';
  const isMianshi = key === 'mianshi';
  const isJuguang = key === 'juguang';
  const isManju = key === 'manju';
  const isZhitou = key === 'zhitou';
  const isAiwonderland = key === 'aiwonderland';
  const isChondian = key === 'chondian';
  const isWeb3 = key === 'web3';
  const isExpo2024 = key === '2024zanhui';
  const isVideoExpo = key === 'shipinzanhui';
  const isPinan = key === 'pinan';
  const brandCases = {
    'gonpai2.0': {
      title: '【蓝鲨工牌2.0】设计',
      subtitle: '由于1.0工牌过于简陋无法凸显公司改革后的调性和理念，所以对工牌进行重新设计，突出加强文化理念。',
      tags: ['品牌文化建设','周边设计'],
      projectNode: '112:2147', navNode: '112:2148', headingNode: '112:2005', galleryNode: '112:2179', stackNode: '112:2013', creditNode: '112:2024', zeroNode: '112:2181',
      width: 1200, heights: [675,675,675,675,675,675,675,1158,675,675], imageNodeStart: 2014, imageNodePrefix: '112'
    },
    fruitip: {
      title: '【水果家族人格】IP设计',
      subtitle: '提取了五种水果不同的外貌特征，发挥自主想象为每个水果进行了一些人物特点的设计。IP形象目前已制作成PP夹、亚克力挂饰、文件夹等文创产品；放在市场上售卖，广受好评。',
      tags: ['IP设计','周边设计'],
      projectNode: '114:2191', navNode: '114:2192', headingNode: '114:2215', galleryNode: '114:2223', stackNode: '114:2249', creditNode: '114:2255', zeroNode: '114:2238',
      width: 1200, heights: [675,3314,3314,3583,983], imageNodeStart: 2250, imageNodePrefix: '114'
    },
    honbao: {
      title: '【牛来运转】红包设计',
      subtitle: '为福州蓝鲨信息技术有限公司2021年牛年新年礼盒进行的周边设计',
      tags: ['IP设计','周边设计'],
      projectNode: '114:2260', navNode: '114:2261', headingNode: '114:2313', galleryNode: '114:2292', stackNode: '114:2294', creditNode: '114:2300', zeroNode: '114:2303',
      width: 1202, heights: [1285,450,3440], imageNodeStart: 2322, imageNodePrefix: '114'
    },
    school: {
      title: '【福州外语外贸学院15周年】展板设计',
      subtitle: '承接福州外语外贸学院艺术与设计学院15周年庆的活动展板设计',
      tags: ['活动设计','展板设计'],
      projectNode: '114:2327', navNode: '114:2328', headingNode: '114:2351', galleryNode: '114:2359', stackNode: '114:2360', creditNode: '114:2365', zeroNode: '114:2368',
      width: 1200, heights: [750,750,763,900,794,794], imageNodeStart: 2377, imageNodePrefix: '114'
    },
    lansha7: {
      title: '【蓝鲨七周年】活动策划',
      subtitle: '为福州蓝鲨信息技术有限公司七周年进行了周年主题活动策划并进行周边设计与会场布置',
      tags: ['品牌文化建设','活动设计'],
      projectNode: '114:2385', navNode: '114:2386', headingNode: '114:2409', galleryNode: '114:2417', stackNode: '114:2418', creditNode: '114:2425', zeroNode: '114:2428',
      width: 1200, heights: [675,675,675,675,675,675,675], imageNodeStart: 2482, imageNodePrefix: '114'
    }
  };
  const brandCase = Object.prototype.hasOwnProperty.call(brandCases, key) ? brandCases[key] : null;
  const detail = isGame ? {
    title: '【海外游戏聚合平台】APP设计',
    subtitle: '为中东用户打造的精品娱乐游戏聚合平台',
    tags: ['C端设计','UI/UX设计','APP设计']
  } : isTuitui ? {
    title: '【诸葛推推】小程序/APP设计',
    subtitle: '一款专门为电商商家、达人带货管理的APP',
    tags: ['B端设计','UI/UX设计','APP/小程序']
  } : isMianshi ? {
    title: '【面试教练】APP',
    subtitle: '面对95~05后人群求职面试AI助手工具',
    tags: ['C端设计','UI/UX设计','APP设计']
  } : isJuguang ? {
    title: '【诸葛聚光】web设计',
    subtitle: '一款专门为小红书电商商家、达人带货管理的平台',
    tags: ['B端设计','UI/UX设计','WEB设计'],
    year: '2025'
  } : isManju ? {
    title: '【跃动引擎】AI漫剧制作平台',
    subtitle: '接入最新AI大模型,增加剧集管理功能。帮助漫剧制作人更好产出',
    tags: ['B端设计','UI/UX设计','WEB设计']
  } : isZhitou ? {
    title: '【诸葛智投】小程序/APP设计',
    subtitle: '一款专门为电商商家提供广告投流一站式工具的APP',
    tags: ['B端设计','UI/UX设计','APP/小程序']
  } : isAiwonderland ? {
    title: '【Wonderland Team】海外官网',
    subtitle: '一款专门针对儿童用户AI写真APP的海外官网设计',
    tags: ['C端设计','UI/UX设计','WEB设计']
  } : isChondian ? {
    title: '【充电调度系统】平台设计',
    subtitle: '为XX城市公交系统所制作的平台设计，包含公交行列调度、公交与私家车充电调度使用情况等功能。',
    tags: ['B端设计','UI/UX设计','WEB设计'],
    year: '2021'
  } : isWeb3 ? {
    title: '【海外金融交易】APP',
    subtitle: '一站式数字资产平台，行情实时掌握，充值便捷高效，锁仓理财轻松开启，资产增值触手可得。',
    tags: ['C端设计','UI/UX设计','APP设计']
  } : isExpo2024 ? {
    title: '【2024展望新电商】展会活动设计',
    subtitle: '第二届视频电商付费大会&首届跨界新电商付费大会展会视觉设计',
    tags: ['视频剪辑','展会设计']
  } : isVideoExpo ? {
    title: '【穿越周期X智投未来】展会活动设计',
    subtitle: '首届视频号电商付费大会展会视觉设计',
    tags: ['视频剪辑','展会设计']
  } : isPinan ? {
    title: '【平安健康保险】年终报告',
    subtitle: '为平安健康保险公司制作了2024年年度报告。',
    tags: ['C端设计','H5设计']
  } : brandCase || {title: work.title, subtitle: '', tags: work.tags};
  title.textContent = detail.title;
  document.getElementById('projectSubtitle').textContent = detail.subtitle;
  if (isTuitui) {
    document.body.classList.add('project-tuitui');
    document.querySelector('.project').dataset.nodeId = '91:1171';
    document.querySelector('.project-nav').dataset.nodeId = '91:1218';
    document.querySelector('.project-heading').dataset.nodeId = '91:1195';
    gallery.dataset.nodeId = '91:1205';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
  }
  if (isMianshi) {
    document.body.classList.add('project-mianshi');
    document.querySelector('.project').dataset.nodeId = '91:1243';
    document.querySelector('.project-nav').dataset.nodeId = '91:1288';
    document.querySelector('.project-heading').dataset.nodeId = '91:1267';
    gallery.dataset.nodeId = '91:1277';
    // The design uses the same 06437.svg folder artwork as the Tuitui page.
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
  }
  detail.tags.forEach(label => {
    const tag = document.createElement('span');
    tag.className = 'project-tag'; tag.textContent = label;
    document.getElementById('projectTags').appendChild(tag);
  });
  const addImage = (parent, index, width, height, projectKey = 'game') => {
    const image = document.createElement('img');
    image.src = `assets/${projectKey}/img_${projectKey}_${index}.webp`;
    image.alt = `${work.title} · 展示图 ${index}`;
    image.width = width; image.height = height;
    image.style.aspectRatio = `${width} / ${height}`;
    image.loading = index === 1 ? 'eager' : 'lazy';
    image.decoding = 'async';
    if (index === 1) image.fetchPriority = 'high';
    parent.appendChild(image);
    return image;
  };
  let creditParent = gallery;
  if (brandCase) {
    document.body.classList.add('project-brand', `project-${key.replace('.', '-')}`);
    document.querySelector('.project').dataset.nodeId = brandCase.projectNode;
    document.querySelector('.project-nav').dataset.nodeId = brandCase.navNode;
    document.querySelector('.project-heading').dataset.nodeId = brandCase.headingNode;
    gallery.dataset.nodeId = brandCase.galleryNode;
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const stack = document.createElement('div');
    stack.className = 'gallery-brand-stack'; stack.dataset.nodeId = brandCase.stackNode;
    brandCase.heights.forEach((height, i) => {
      const image = addImage(stack, i + 1, brandCase.width, height, key);
      image.className = 'project-image';
      image.dataset.nodeId = `${brandCase.imageNodePrefix}:${brandCase.imageNodeStart + i}`;
    });
    gallery.appendChild(stack); creditParent = stack;
    // Preserve Figma's trailing zero-size auto-layout slot after the artwork and credit.
    const zero = document.createElement('div');
    zero.className = 'gallery-zero-slot'; zero.dataset.nodeId = brandCase.zeroNode;
    zero.setAttribute('aria-hidden', 'true'); gallery.appendChild(zero);
  } else if (isGame) {
    const heights = [988,1088,1288,1225,963,1038,1000,1000,1000,1750,1038,1088];
    heights.forEach((height, i) => { addImage(gallery, i + 1, 1200, height).className = 'project-image'; });
    const sections = [
      {title:'TG社群运营图', className:'gallery-social', start:13, end:15, width:384, height:384},
      {title:'运营banner图', className:'gallery-banners', start:16, end:25, width:588, height:187},
      {title:'APP上架五图设计', className:'gallery-store', start:26, end:30, width:220, height:391}
    ];
    sections.forEach(item => {
      const section = document.createElement('section'); section.className = 'gallery-section';
      const heading = document.createElement('h2'); heading.textContent = item.title;
      const row = document.createElement('div'); row.className = `gallery-grid ${item.className}`;
      for (let i = item.start; i <= item.end; i++) addImage(row, i, item.width, item.height);
      section.append(heading, row); gallery.appendChild(section);
    });
    const motionSection = document.createElement('section');
    motionSection.className = 'gallery-section gallery-game-motion';
    const motionHeading = document.createElement('h2');
    motionHeading.textContent = '部分动效设计展示';
    const motionGrid = document.createElement('div');
    motionGrid.className = 'gallery-grid gallery-game-motion-grid';
    for (let i = 1; i <= 6; i++) {
      const video = document.createElement('video');
      video.className = 'game-motion-video';
      video.src = `assets/game/motion/motion-${i}.mp4`;
      video.autoplay = true; video.loop = true; video.muted = true;
      video.defaultMuted = true; video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', `部分动效设计展示 · 视频 ${i}`);
      motionGrid.appendChild(video);
    }
    motionSection.append(motionHeading, motionGrid); gallery.appendChild(motionSection);
  } else if (isTuitui) {
    const heights = [675,675,675,1625,675,800,1500,3364];
    heights.forEach((height, i) => {
      const image = addImage(gallery, i + 1, 1200, height, 'tuitui');
      image.className = 'project-image';
      image.dataset.nodeId = `91:${1206 + i}`;
    });
    const loginMotionSection = document.createElement('section');
    loginMotionSection.className = 'gallery-section gallery-tuitui-motion';
    const loginMotionHeading = document.createElement('h2');
    loginMotionHeading.textContent = '登录页动效展示';
    const loginMotionVideo = document.createElement('video');
    loginMotionVideo.className = 'tuitui-motion-video';
    loginMotionVideo.src = 'assets/tuitui/login-motion.mp4';
    loginMotionVideo.autoplay = true;
    loginMotionVideo.loop = true;
    loginMotionVideo.muted = true;
    loginMotionVideo.defaultMuted = true;
    loginMotionVideo.playsInline = true;
    loginMotionVideo.preload = 'metadata';
    loginMotionVideo.setAttribute('aria-label', '诸葛推推 · 登录页动效展示');
    loginMotionSection.append(loginMotionHeading, loginMotionVideo);
    gallery.appendChild(loginMotionSection);
  } else if (isMianshi) {
    const heights = [675,676,676,1090,676,676];
    heights.forEach((height, i) => {
      const image = addImage(gallery, i + 1, 1200, height, 'mianshi');
      image.className = 'project-image';
      image.dataset.nodeId = `91:${1278 + i}`;
    });
    const motionSection = document.createElement('section');
    motionSection.className = 'gallery-section gallery-mianshi-motion';
    const motionHeading = document.createElement('h2');
    motionHeading.textContent = '部分动效展示';
    const motionGrid = document.createElement('div');
    motionGrid.className = 'gallery-grid gallery-mianshi-motion-grid';
    for (let i = 1; i <= 3; i += 1) {
      const video = document.createElement('video');
      video.className = 'mianshi-motion-video';
      video.src = `assets/mianshi/motion-${i}.mp4`;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', `面试教练APP · 部分动效展示 ${i}`);
      motionGrid.appendChild(video);
    }
    motionSection.append(motionHeading, motionGrid);
    gallery.appendChild(motionSection);
  } else if (isJuguang) {
    document.querySelector('.project').dataset.nodeId = '92:1342';
    document.querySelector('.project-nav').dataset.nodeId = '92:1343';
    document.querySelector('.project-heading').dataset.nodeId = '92:1366';
    gallery.dataset.nodeId = '92:1376';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const sections = [
      {title:'登录页', node:'99:1465', description:'使用了Blender软件建模渲染设计。创作灵感源于数字化营销的流量逻辑：把线上投流这种抽象的数据流转，具象成可视化的数字城市。3D 视觉增强记忆点，和普通登录页拉开差距。传递 “汇聚流量、助力爆单” 的产品定位，兼顾美感与业务表达。', images:[[1,675,'99:1468']]},
      {title:'主页面图表展示', node:'99:1469', images:[[2,675,'99:1472'],[3,675,'99:1473']]},
      {title:'部分弹窗展示', node:'99:1474', images:[[4,675,'99:1478'],[5,675,'99:1479'],[6,675,'99:1481'],[7,675,'99:1482']]},
      {title:'广告计划推广页面', node:'99:1483', images:[[8,1254,'99:1486'],[9,800,'99:1487']]}
    ];
    sections.forEach(item => {
      const section = document.createElement('section');
      section.className = 'gallery-section gallery-case-section'; section.dataset.nodeId = item.node;
      const heading = document.createElement('h2'); heading.textContent = item.title;
      section.appendChild(heading);
      if (item.description) {
        const description = document.createElement('p');
        description.className = 'gallery-description'; description.textContent = item.description;
        section.appendChild(description);
      }
      item.images.forEach(([index, height, node]) => {
        const image = addImage(section, index, 1200, height, 'juguang');
        image.className = 'project-image'; image.dataset.nodeId = node;
      });
      gallery.appendChild(section);
    });
  } else if (isExpo2024 || isVideoExpo) {
    document.body.classList.add('project-exhibition');
    const nodes = isExpo2024
      ? {project:'111:1843', nav:'111:1890', heading:'111:1862', gallery:'111:1870', intro:'111:1915', zero:'111:1873'}
      : {project:'111:1918', nav:'111:1919', heading:'111:1942', gallery:'111:1950', intro:'111:1951', zero:'111:1954'};
    document.querySelector('.project').dataset.nodeId = nodes.project;
    document.querySelector('.project-nav').dataset.nodeId = nodes.nav;
    document.querySelector('.project-heading').dataset.nodeId = nodes.heading;
    gallery.dataset.nodeId = nodes.gallery;
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const addEventVideo = (source, label, node) => {
      const video = document.createElement('video');
      video.className = 'project-image project-video';
      if (node) video.dataset.nodeId = node;
      video.src = source;
      if (isVideoExpo) { video.width = 1320; video.height = 718; }
      video.addEventListener('loadedmetadata', () => {
        video.width = video.videoWidth;
        video.height = video.videoHeight;
      }, {once: true});
      video.controls = true; video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', label);
      video.textContent = '您的浏览器不支持视频播放。';
      gallery.appendChild(video);
    };
    if (isVideoExpo) addEventVideo(`assets/${key}/event.mp4`, '首届视频号电商展会 · 活动视频', nodes.intro);
    const addZeroSlot = () => {
      const slot = document.createElement('div');
      slot.className = 'gallery-zero-slot'; slot.dataset.nodeId = nodes.zero;
      slot.setAttribute('aria-hidden', 'true'); gallery.appendChild(slot);
    };
    if (isVideoExpo) addZeroSlot();
    const heights = isExpo2024 ? [800,900,900,900,795,880] : [800,1200];
    heights.forEach((height, i) => {
      if (isExpo2024 && i === 2) addZeroSlot();
      const image = addImage(gallery, i + 1, 1200, height, key);
      image.className = 'project-image';
      image.dataset.nodeId = isExpo2024 ? `111:${i < 2 ? 1871 + i : 1872 + i}` : `111:${1970 + i}`;
    });
    const rows = isExpo2024
      ? [{node:'111:1878', width:384, images:[[7,684,'111:1879'],[8,684,'111:1880'],[9,684,'111:1881']]},
         {node:'111:1882', width:384, images:[[10,684,'111:1883'],[11,684,'111:1884'],[12,684,'111:1885']]}]
      : [{node:'111:1972', width:588, images:[[3,6256,'111:1973'],[4,5060,'111:1974']]}];
    rows.forEach(item => {
      const row = document.createElement('div');
      row.className = `gallery-grid gallery-exhibition ${isExpo2024 ? 'gallery-exhibition-posters' : 'gallery-exhibition-pair'}`;
      row.dataset.nodeId = item.node;
      item.images.forEach(([index, height, node]) => {
        const image = addImage(row, index, item.width, height, key);
        image.dataset.nodeId = node;
      });
      gallery.appendChild(row);
    });
    if (isExpo2024) {
      addEventVideo(`assets/${key}/event.mp4`, '2024展望新电商展会 · 活动视频 1', nodes.intro);
      addEventVideo(`assets/${key}/event-2.mp4`, '2024展望新电商展会 · 活动视频 2');
    }
  } else if (isPinan) {
    document.body.classList.add('project-pinan');
    document.querySelector('.project').dataset.nodeId = '153:145';
    document.querySelector('.project-nav').dataset.nodeId = '153:147';
    document.querySelector('.project-heading').dataset.nodeId = '153:170';
    gallery.dataset.nodeId = '153:179';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const sections = [
      {
        title: '主视觉围绕 “家庭守护” 核心',
        description: '紧扣平安健康保险年度服务场景，以「温暖家庭生活插画」为核心表现，通过生活化家庭互动细节（亲子陪伴、居家日常、全家欢聚），让数据报告画面变得温情治愈，避免保险报告的生硬严肃感。整体色调统一为暖橙柔和配色，既适配保险守护的安心调性，符合 H5 长图传播的视觉需求；又通过统一的插画风格、叙事逻辑，形成系列连贯感，精准传递年度报告「平安相伴，守护用户与家人健康幸福生活」的活动核心。',
        images: [1, 2, 3]
      },
      {
        title: '贴合产品调性设计',
        description: '以暖调居家扁平插画承载保单年度数据，用温馨家庭场景具象化保险守护，传递平安健康陪伴家人的温暖内核。',
        images: [4, 5, 6, 7, 8, 9]
      },
      {
        title: '结果分享页展示',
        description: '以新年上上签为载体，统一橙红喜庆色调，融入祥云、烟花等传统吉祥元素，借抽签趣味形式收尾年度报告，传递新年安康祝福，引导用户分享传播。',
        images: [10, 11, 12]
      }
    ];
    sections.forEach((item, sectionIndex) => {
      const section = document.createElement('section');
      section.className = 'gallery-section gallery-case-section pinan-section';
      const heading = document.createElement('h2');
      heading.textContent = item.title;
      const description = document.createElement('p');
      description.className = 'gallery-description';
      description.textContent = item.description;
      const grid = document.createElement('div');
      grid.className = 'gallery-grid gallery-pinan';
      item.images.forEach(index => {
        const image = addImage(grid, index, 384, 831, 'pinan');
        image.className = 'pinan-screen';
        image.loading = sectionIndex === 0 ? 'eager' : 'lazy';
        image.fetchPriority = sectionIndex === 0 ? 'high' : 'auto';
      });
      section.append(heading, description, grid);
      gallery.appendChild(section);
      if (sectionIndex === sections.length - 1) creditParent = section;
    });
  } else if (isWeb3) {
    document.body.classList.add('project-web3');
    document.querySelector('.project').dataset.nodeId = '111:1786';
    document.querySelector('.project-nav').dataset.nodeId = '111:1787';
    document.querySelector('.project-heading').dataset.nodeId = '111:1810';
    gallery.dataset.nodeId = '111:1820';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const sections = [
      {title:'登录注册流程页', node:'111:1821', rows:[{node:'115:2493', images:[[1,'115:2490'],[2,'115:2491'],[3,'115:2492']]}]},
      {title:'首页及快捷充值页', node:'116:2502', rows:[{node:'116:2504', images:[[4,'116:2512'],[5,'116:2514'],[6,'116:2515']]}]},
      {title:'首页及快捷充值页', node:'116:2524', rows:[{node:'116:2526', images:[[7,'116:2527'],[8,'116:2528'],[9,'116:2529']]},{node:'118:2539', images:[[10,'118:2540'],[11,'118:2541'],[12,'118:2542']]}]},
      // Figma reuses the fourth through sixth assets for these three slots.
      {title:'首页及快捷充值页', node:'117:2532', rows:[{node:'117:2534', images:[[4,'117:2535'],[5,'117:2536'],[6,'117:2537']]}]},
      {title:'交易页', node:'119:2544', rows:[{node:'119:2546', images:[[16,'119:2547'],[17,'119:2548'],[18,'119:2549']]}]},
      {title:'资产页', node:'120:2551', rows:[{node:'120:2553', images:[[19,'120:2554'],[20,'120:2555'],[21,'120:2556']]}]}
    ];
    let slotIndex = 0;
    sections.forEach(item => {
      const section = document.createElement('section');
      section.className = 'gallery-section gallery-case-section';
      section.dataset.nodeId = item.node;
      const heading = document.createElement('h2'); heading.textContent = item.title;
      section.appendChild(heading);
      item.rows.forEach(itemRow => {
        const row = document.createElement('div');
        row.className = 'gallery-grid gallery-web3';
        row.dataset.nodeId = itemRow.node;
        itemRow.images.forEach(([source, node]) => {
          const image = addImage(row, source, 384, 831, 'web3');
          image.className = 'web3-screen';
          image.dataset.nodeId = node;
          image.alt = `${work.title} · 展示图 ${++slotIndex}`;
        });
        section.appendChild(row);
      });
      gallery.appendChild(section);
      creditParent = section;
    });
  } else if (isChondian) {
    document.body.classList.add('project-chondian');
    document.querySelector('.project').dataset.nodeId = '108:1717';
    document.querySelector('.project-nav').dataset.nodeId = '111:1762';
    document.querySelector('.project-heading').dataset.nodeId = '108:1736';
    gallery.dataset.nodeId = '108:1744';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const heights = [900,900,675,675,675];
    heights.forEach((height, i) => {
      if (i === 4) {
        // The zero-size slot in Figma adds one extra gallery gap before the final image.
        const slot = document.createElement('div');
        slot.className = 'gallery-zero-slot';
        slot.dataset.nodeId = '108:1750';
        slot.setAttribute('aria-hidden', 'true');
        gallery.appendChild(slot);
      }
      const image = addImage(gallery, i + 1, 1200, height, 'chondian');
      image.className = 'project-image';
      image.dataset.nodeId = `108:${1745 + i}`;
    });
  } else if (isAiwonderland) {
    document.body.classList.add('project-aiwonderland');
    document.querySelector('.project').dataset.nodeId = '108:1653';
    document.querySelector('.project-nav').dataset.nodeId = '108:1693';
    document.querySelector('.project-heading').dataset.nodeId = '108:1677';
    gallery.dataset.nodeId = '108:1687';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const image = addImage(gallery, 1, 1200, 4032, 'aiwonderland');
    image.className = 'project-image';
    image.dataset.nodeId = '108:1688';
  } else if (isZhitou) {
    document.body.classList.add('project-zhitou');
    document.querySelector('.project').dataset.nodeId = '108:1582';
    document.querySelector('.project-nav').dataset.nodeId = '108:1628';
    document.querySelector('.project-heading').dataset.nodeId = '108:1606';
    gallery.dataset.nodeId = '108:1616';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    // Preserve the updated Figma crops: split artwork still shares its source image.
    const panels = [
      {source:1, height:3001, node:'108:1617'},
      {source:2, height:1378, node:'108:1618'},
      {source:3, height:3351, node:'108:1619'},
      {source:4, height:1170, node:'108:1620'},
      {source:5, height:3316, node:'111:1976', cropHeight:208.48, cropTop:0},
      {source:5, height:3597, node:'111:1977', cropHeight:192.19, cropTop:-92.19},
      {source:6, height:2500, node:'108:1622'},
      {source:7, height:1939, node:'111:1978', cropHeight:345.85, cropTop:0, cropWidth:100.01},
      {source:7, height:4759, node:'111:1979', cropHeight:140.91, cropTop:-40.91, cropWidth:100.01}
    ];
    panels.forEach((panel, i) => {
      const frame = document.createElement('div');
      frame.className = 'zhitou-image-frame';
      frame.dataset.nodeId = panel.node;
      frame.style.height = `calc(${panel.height} * var(--u))`;
      const image = addImage(frame, panel.source, 1200, panel.height, 'zhitou');
      image.alt = `${work.title} · 展示图 ${i + 1}`;
      image.className = 'project-image';
      if (panel.cropHeight) {
        image.style.height = `${panel.cropHeight}%`;
        image.style.top = `${panel.cropTop}%`;
        image.style.width = `${panel.cropWidth || 100}%`;
        image.style.aspectRatio = 'auto';
      }
      gallery.appendChild(frame);
    });
  } else if (isManju) {
    document.body.classList.add('project-manju');
    document.querySelector('.project').dataset.nodeId = '100:1490';
    document.querySelector('.project-nav').dataset.nodeId = '100:1491';
    document.querySelector('.project-heading').dataset.nodeId = '100:1514';
    gallery.dataset.nodeId = '100:1524';
    document.querySelector('.nav-folder-art img').src = 'assets/tuitui/dock_folder.svg';
    const sections = [
      {title:'登录页', node:'100:1525', description:'使用AI软件生成多段漫剧片段，进行剪辑拼合循环播放。让用户直观感受产品功能定位。', images:[[1,'105:1554']]},
      {title:'主界面', node:'105:1549', description:'采用深色科技风格，页面顶部放置四大创作功能卡片，用色彩插画区分模块；下方网格展示公共资产素材，左侧固定导航栏。围绕漫剧创作者工作流，将创作入口、素材库前置。页面层级清晰，深色底最大化凸显素材视觉效果。', images:[[2,'105:1552']]},
      {title:'剧本管理及分镜管理示', node:'100:1529', images:[[3,'103:1547'],[4,'103:1548']]},
      {title:'分镜创作功能展示', node:'105:1560', images:[[5,'105:1569'],[6,'105:1571'],[7,'105:1570'],[8,'105:1572']]}
    ];
    sections.forEach(item => {
      const section = document.createElement('section');
      section.className = 'gallery-section gallery-case-section'; section.dataset.nodeId = item.node;
      const heading = document.createElement('h2'); heading.textContent = item.title;
      section.appendChild(heading);
      if (item.description) {
        const description = document.createElement('p'); description.className = 'gallery-description';
        description.textContent = item.description; section.appendChild(description);
      }
      item.images.forEach(([index, node]) => {
        const frame = document.createElement('div'); frame.className = 'manju-image-frame'; frame.dataset.nodeId = node;
        if (index === 1) {
          const video = document.createElement('video');
          video.className = 'project-image';
          video.src = 'assets/manju/login.mp4';
          video.poster = 'assets/manju/img_manju_1.webp';
          video.width = 1200; video.height = 675;
          video.autoplay = true; video.loop = true; video.muted = true;
          video.defaultMuted = true; video.playsInline = true;
          video.preload = 'auto';
          video.setAttribute('aria-label', 'AI漫剧制作平台 · 登录页演示视频');
          frame.appendChild(video);
        } else {
          addImage(frame, index, 1200, 675, 'manju').className = 'project-image';
        }
        section.appendChild(frame);
      });
      gallery.appendChild(section);
    });
  } else {
    // Other projects retain their own artwork; never reuse the game's case study.
    const image = document.createElement('img');
    image.className = 'project-image'; image.src = window.portfolioAsset(key); image.alt = work.title;
    image.width = 772; image.height = 540; image.decoding = 'async'; gallery.appendChild(image);
  }
  const credit = document.createElement('footer'); credit.className = 'project-credit';
  if (isChondian) credit.dataset.nodeId = '108:1751';
  if (isWeb3) credit.dataset.nodeId = '116:2498';
  if (isExpo2024) credit.dataset.nodeId = '111:1886';
  if (isVideoExpo) credit.dataset.nodeId = '111:1967';
  if (isPinan) credit.dataset.nodeId = '153:196';
  if (brandCase) credit.dataset.nodeId = brandCase.creditNode;
  const year = document.createElement('span'); year.textContent = detail.year || work.year;
  const author = document.createElement('span'); author.textContent = '@JingJing';
  credit.append(year, author); creditParent.appendChild(credit);
  document.getElementById('projectBack').addEventListener('click', event => {
    // Preserve scroll position when returning to the card that opened this page.
    if (document.referrer && new URL(document.referrer).pathname.endsWith('/index.html') && history.length > 1) {
      event.preventDefault(); history.back();
    }
  });
})();
