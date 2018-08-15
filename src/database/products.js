const products = [
  {
    id: '5b5f51ff6f542763ff3ca402',
    name: 'fugiat sint dolore',
    index: 0,
    isActive: false,
    price: 99.99,
    pictures: [
      'https://picoolio.net/images/2018/08/14/64-03aaf709749232b42e.jpg',
      'https://picoolio.net/images/2018/08/14/64-03-B10177b926017a454.jpg',
      'https://picoolio.net/images/2018/08/14/64-03c5882e0cacb9d950a.jpg',
    ],
    category: 'jacket',
    color: 'white',
    brand: 'SUREMAX',
    description:
      'Ipsum culpa aute consequat dolor ex comm excepteur labore nostrud do nulla consequat. In mollit qui comm ullamco amet laboris officia comm cillum adipisicing et. Anim id tempor ea exercitation veniam est officia consectetur proident aute. Duis incididunt anim veniam fugiat. Eiusmod sint fugiat laborum dolore irure incididunt laborum reprehenderit eu laborum. Eu eiusmod qui mollit in reprehenderit consequat velit laboris ut est ea culpa. Adipisicing reprehenderit aute aute aliqua occaecat.\n\nEt comm eiusmod elit do ullamco dolore mollit ut minim Lorem reprehenderit aliqua. Enim culpa culpa id aliquip. Ad veniam laboris incididunt culpa Lorem. Laboris proident irure ullamco exercitation elit laborum dolore excepteur esse deserunt nisi occaecat voluptate minim. Proident do nisi exercitation aliquip aliqua aute aliquip magna sunt.',
    added: 'Thursday, August 17, 2017 11:29 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['tempor', 'tempor', 'non', 'sit', 'non'],
    orders: 0,
    discount: 20,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff361f044b7e267c4b',
    name: 'irure sunt elit',
    index: 1,
    isActive: false,
    price: 89.62,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-044f779c3c4a0a9440.jpg',
      'https://picoolio.net/images/2018/08/14/04-04-crp6d4ba287932d64ba.jpg',
    ],
    category: 'overall',
    color: 'brown',
    brand: 'ZAYA',
    description:
      'Incididunt anim incididunt voluptate quis ad non tempor eu ullamco ea officia non ullamco eu. Eiusmod nostrud Lorem aliquip id eu et eu ea labore fugiat qui id voluptate mollit. Exercitation adipisicing amet do comm cupidatat reprehenderit labore fugiat. comm cillum sint ea aute. Sunt exercitation proident laboris sunt occaecat velit qui deserunt quis incididunt fugiat comm quis voluptate. Id incididunt in elit pariatur ex dolor.\n\nAute id fugiat anim adipisicing. Laboris proident labore nostrud do voluptate ullamco anim voluptate sit ipsum comm minim. Elit culpa Lorem laboris elit ea ea cupidatat reprehenderit ea ea adipisicing.',
    added: 'Saturday, November 4, 2017 9:48 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['magna', 'eu', 'ut', 'non', 'ullamco'],
    orders: 0,
    discount: 10,
  },
  {
    id: '5b5f51ff4a3a1746b17f1652',
    name: 'ullamco enim aliqua',
    index: 2,
    isActive: false,
    price: 580.44,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-1067533fc0e033753f.jpg',
      'https://picoolio.net/images/2018/08/14/91-10M057306725079fad6.jpg',
      'https://picoolio.net/images/2018/08/14/91-10T92aff31f426bc74a.jpg',
    ],
    category: 'trousers',
    color: 'blue',
    brand: 'TERRAGEN',
    description:
      'Officia deserunt voluptate veniam ex Lorem dolore velit et. Est irure est aliquip sit consequat duis eu nostrud adipisicing. Dolor cupidatat eiusmod labore ad sint magna ullamco minim ipsum Lorem esse sint ex. Cillum cupidatat irure eu ut et comm deserunt irure consectetur id. Ipsum irure do duis sit aliqua magna ipsum deserunt ad consectetur ea fugiat cillum cupidatat.\n\nSunt mollit minim enim irure ex. Pariatur adipisicing cillum est id laborum sit tempor ut fugiat et quis laboris. Eu ullamco minim occaecat sunt esse irure tempor ea non.',
    added: 'Monday, December 15, 2014 1:43 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['sint', 'ea', 'veniam', 'enim', 'aliquip'],
    orders: 0,
    discount: 10,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51fff24fc5db104bff4d',
    name: 'dolor ex anim',
    index: 3,
    isActive: false,
    price: 66.28,
    pictures: [
      'https://picoolio.net/images/2018/08/14/64-045cde774386687c34.jpg',
      'https://picoolio.net/images/2018/08/14/64-04-B8fd795c91f6296cc.jpg',
      'https://picoolio.net/images/2018/08/14/64-04cc2dd7e77607650ed.jpg',
    ],
    category: 'jacket',
    color: 'white',
    brand: 'POLARAX',
    description:
      'Sunt voluptate tempor cillum labore enim aute dolor est est duis proident incididunt. Qui excepteur anim ipsum non cillum ullamco do excepteur. Laborum et irure deserunt velit do occaecat deserunt magna ut duis ut. Occaecat consequat enim comm incididunt aute in duis. Duis veniam deserunt nisi id sit deserunt ullamco in veniam. Id ipsum ea pariatur adipisicing amet nostrud officia tempor nostrud sit ad fugiat velit sint.\n\nAnim officia eiusmod quis duis. Ullamco mollit ex voluptate qui nulla proident consectetur proident tempor Lorem. Lorem cupidatat laborum deserunt in Lorem proident anim velit. Ut sit occaecat pariatur pariatur est labore cupidatat laboris qui mollit qui excepteur. Velit deserunt nulla occaecat laborum proident laborum labore. Laborum qui anim excepteur deserunt in ut.',
    added: 'Thursday, July 2, 2015 1:18 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ad', 'deserunt', 'consectetur', 'excepteur', 'aliquip'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff4e5431d28e6c2c72',
    name: 'nulla est esse',
    index: 4,
    isActive: true,
    price: 82.09,
    pictures: [
      'https://picoolio.net/images/2018/08/14/103-02d0d529da591a82c6.jpg',
      'https://picoolio.net/images/2018/08/14/103-02C1d674104a8163ec4.jpg',
    ],
    category: 'skirt',
    color: 'yellowred',
    brand: 'JUNIPOOR',
    description:
      'Non cillum culpa irure ullamco enim et anim nostrud. Laboris duis sunt ullamco id ea nisi aliquip aliqua cupidatat elit exercitation est reprehenderit. Irure cillum mollit in fugiat velit dolore id mollit enim esse deserunt culpa aute culpa. Aliquip aute excepteur ullamco Lorem consectetur qui eu sunt consectetur sunt ex fugiat reprehenderit. Dolore anim enim cupidatat do pariatur ex consectetur minim pariatur officia non fugiat. Deserunt nisi enim minim et duis anim mollit dolore cupidatat veniam pariatur qui irure.\n\nNon laboris amet velit non magna. Nostrud labore consequat anim velit ea pariatur. Laboris magna quis comm nisi aliqua sint. Pariatur nisi cillum eiusmod qui.',
    added: 'Wednesday, November 22, 2017 2:04 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['voluptate', 'comm', 'ipsum', 'deserunt', 'culpa'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffe2970c9f27265e65',
    name: 'irure exercitation ex',
    index: 5,
    isActive: true,
    price: 79.4,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'shirt',
    color: 'green',
    brand: 'KYAGORO',
    description:
      'Minim amet aliquip laboris dolore in elit incididunt ipsum minim anim. Dolor ut enim exercitation veniam. Enim incididunt anim laborum cupidatat ut excepteur magna. Lorem ullamco enim in pariatur laboris deserunt. Nulla officia Lorem velit id cillum voluptate ad comm ad aute Lorem. Ut anim magna excepteur sit ipsum pariatur deserunt et quis irure.\n\nSint quis nisi in eiusmod. Id nostrud culpa nulla quis dolor velit nulla. Ut ea duis sint aliquip elit aliqua enim quis labore minim reprehenderit consectetur do.',
    added: 'Friday, August 21, 2015 11:10 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ad', 'labore', 'amet', 'eiusmod', 'velit'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51fff93fe6f1389bdcb3',
    name: 'anim tempor sunt',
    index: 6,
    isActive: false,
    price: 34.94,
    pictures: [
      'https://image.ibb.co/jLD5Jz/spodnica_bia2.jpg',
      'https://image.ibb.co/jLD5Jz/spodnica_bia2.jpg',
    ],
    category: 'shirt',
    color: 'white',
    brand: 'NAMEBOX',
    description:
      'Nostrud occaecat ad qui qui culpa do minim exercitation do duis tempor dolor non culpa. Consectetur officia cillum cillum anim sit cillum enim tempor ex nulla ullamco consectetur excepteur. Ipsum nostrud velit in incididunt Lorem Lorem duis ea nisi ullamco. Labore ad velit sint proident magna ea excepteur exercitation amet anim qui sit fugiat. Cillum Lorem ut amet sint deserunt eiusmod nulla nostrud sit sunt duis. Fugiat nulla aliqua nulla occaecat Lorem est magna.\n\nNon sit aute id anim sunt officia cupidatat laborum velit. Velit laborum qui enim magna adipisicing aute exercitation nostrud esse laborum sint amet ut enim. Nisi deserunt minim officia nulla officia aliqua sit minim duis nisi ipsum laboris elit. Labore officia laboris ut velit pariatur excepteur dolore laborum occaecat.',
    added: 'Thursday, February 9, 2017 7:31 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['eu', 'amet', 'comm', 'exercitation', 'dolore'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffdae15f7a488788f8',
    name: 'nostrud voluptate deserunt',
    index: 7,
    isActive: true,
    price: 55.25,
    pictures: [
      'https://image.ibb.co/jLD5Jz/spodnica_bia2.jpg',
      'https://image.ibb.co/jLD5Jz/spodnica_bia2.jpg',
    ],
    category: 'shirt',
    color: 'black',
    brand: 'ELECTONIC',
    description:
      'Sint id ad eu aliqua laborum ipsum tempor fugiat minim. Enim adipisicing in et qui adipisicing esse incididunt. Ex velit incididunt sit fugiat. Velit excepteur cupidatat cupidatat ullamco comm incididunt sunt incididunt incididunt cupidatat ea tempor. Ut Lorem aliqua Lorem est sunt aliqua nulla reprehenderit consectetur et cupidatat occaecat. Incididunt cillum enim ex proident cupidatat incididunt duis ea.\n\nLaboris sit pariatur irure labore nulla fugiat cupidatat comm est tempor duis quis magna. Non id esse eiusmod elit deserunt eu elit cillum esse dolore. Ullamco comm tempor nulla aliquip sit exercitation sunt non duis irure ad. Est voluptate eiusmod consectetur labore dolore aliqua enim nisi.',
    added: 'Friday, January 24, 2014 3:51 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['minim', 'sunt', 'id', 'comm', 'excepteur'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffa508ed6f14e64704',
    name: 'laboris laboris cupidatat',
    index: 8,
    isActive: false,
    price: 56.32,
    pictures: [
      'https://picoolio.net/images/2018/08/14/85-017881ada46aeb0731.jpg',
      'https://picoolio.net/images/2018/08/14/85-01Dcd4b35147b9ef14d.jpg',
      'https://picoolio.net/images/2018/08/14/85-01T3b48dfdf2a04d9c8.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'FURNIGEER',
    description:
      'Do consectetur laboris proident magna ea cupidatat officia irure magna duis anim id consectetur. Magna voluptate nulla comm do ex nostrud aute exercitation cupidatat anim deserunt. Officia sit ullamco exercitation cupidatat sit et mollit aliquip. Velit aliquip veniam reprehenderit irure labore non excepteur magna quis do. Minim est aute veniam aute. Nostrud quis do cillum dolore.\n\nEiusmod voluptate aliqua ea ipsum. Enim non ad aliqua laborum tempor tempor voluptate comm. comm fugiat esse ex mollit tempor ut voluptate eu tempor amet. Reprehenderit ex non duis culpa amet nulla magna. Culpa voluptate fugiat cillum est. Deserunt proident qui adipisicing in consectetur culpa id id tempor. Consectetur dolor id eu nostrud aute aliquip exercitation consectetur sit et voluptate et.',
    added: 'Monday, March 12, 2018 4:04 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['do', 'aliquip', 'elit', 'aliquip', 'excepteur'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffe88ab3b6cf2aa927',
    name: 'dolore labore comm',
    index: 9,
    isActive: true,
    price: 39.22,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-061dc75ee147df34fb.jpg',
      'https://picoolio.net/images/2018/08/14/89-06M1ab51b856d81547e.jpg',
      'https://picoolio.net/images/2018/08/14/89-06T87b4337f650f5427.jpg',
    ],
    category: 'trousers',
    color: 'white',
    brand: 'VENOFLEX',
    description:
      'Sint laborum enim culpa ex. Et ea laboris quis amet incididunt excepteur minim consequat. Dolore elit reprehenderit adipisicing irure officia. Laboris sit eu amet in cillum ea sint laboris laboris.\n\nIrure est dolore dolore id adipisicing dolore incididunt aliquip ad culpa. Elit cupidatat ullamco incididunt reprehenderit. Ullamco consectetur do exercitation ex mollit deserunt irure esse sit. Non cillum cupidatat fugiat occaecat culpa. Ut qui magna non est cupidatat incididunt magna est nisi mollit. Eu officia dolore ut fugiat in velit adipisicing aliqua velit dolore sit non non.',
    added: 'Thursday, September 3, 2015 7:27 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ipsum', 'ex', 'ipsum', 'ea', 'qui'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff4e6dfec1b33fe09d',
    name: 'ut ad consequat',
    index: 10,
    isActive: false,
    price: 75.05,
    pictures: [
      'https://picoolio.net/images/2018/08/14/85-020869165fbc26185a.jpg',
      'https://picoolio.net/images/2018/08/14/85-02Df57b834ea211d7ee.jpg',
      'https://picoolio.net/images/2018/08/14/85-02T58cf10d6bec6f041.jpg',
    ],
    category: 'dress',
    color: 'green',
    brand: 'EPLODE',
    description:
      'Esse aliquip sint sit eiusmod esse dolore ex incididunt ut mollit ad esse adipisicing et. Sint laboris qui cillum aliquip eu sint tempor laborum Lorem. Fugiat ad incididunt eu consectetur nulla incididunt ex est. Eiusmod fugiat non exercitation id tempor pariatur eu. Laborum mollit minim minim qui Lorem sunt tempor proident. Minim ex veniam quis eu anim dolore comm proident.\n\nReprehenderit laboris aliquip laboris pariatur dolor est non. Tempor fugiat elit velit nulla amet anim. Quis laborum velit elit reprehenderit elit dolor nisi consequat laboris ea esse. Incididunt laboris non sunt et esse culpa magna ullamco ipsum officia cillum aute non.',
    added: 'Wednesday, March 19, 2014 12:12 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['excepteur', 'eiusmod', 'id', 'amet', 'non'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff735dba45b6eb9c4b',
    name: 'dolore magna ad',
    index: 12,
    isActive: false,
    price: 10.44,
    pictures: [
      'https://picoolio.net/images/2018/08/14/85-057c00be7da3286798.jpg',
      'https://picoolio.net/images/2018/08/14/85-05D33708bcdeee4d8cf.jpg',
      'https://picoolio.net/images/2018/08/14/85-05T1b2b0f696d8c239c.jpg',
    ],
    category: 'dress',
    color: 'orange',
    brand: 'OHMNET',
    description:
      'Reprehenderit proident pariatur voluptate laboris ullamco incididunt magna consectetur comm amet est. Velit comm aliquip laborum sunt in voluptate exercitation id aliquip irure irure anim. Proident eu tempor consectetur Lorem laborum ullamco nulla laboris quis occaecat aliquip incididunt ipsum deserunt. Sint comm ipsum culpa ea proident dolore cupidatat veniam.\n\nConsequat ullamco laborum dolore incididunt. Elit aliquip mollit tempor minim cupidatat laborum labore proident consectetur veniam amet et duis. Pariatur occaecat sunt laborum excepteur. Pariatur elit velit eu exercitation reprehenderit eiusmod consequat. Reprehenderit minim ut voluptate ad quis do sit amet id laborum sunt proident consectetur cupidatat. Aliqua pariatur ex reprehenderit incididunt labore esse officia ad ullamco voluptate. Fugiat nisi reprehenderit cillum do laboris excepteur tempor.',
    added: 'Wednesday, August 27, 2014 8:50 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['non', 'officia', 'irure', 'et', 'anim'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffa6b42522b8254623',
    name: 'aliquip irure qui',
    index: 13,
    isActive: true,
    price: 77.44,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B276442fd1f72eef679d9.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B2782480349f2b9e09952.jpg',
    ],
    category: 'skirt',
    color: 'multicolor',
    brand: 'ADORNICA',
    description:
      'Velit deserunt velit irure velit proident do enim Lorem eu enim ipsum. Cupidatat ut cupidatat ad incididunt magna qui consequat aliqua ipsum ipsum aute. Eiusmod deserunt in ipsum reprehenderit veniam. Qui exercitation ea labore voluptate nostrud. Elit reprehenderit non Lorem amet dolore est culpa velit. Lorem pariatur duis quis voluptate aliquip.\n\nNon voluptate nulla ex et aute Lorem proident anim aute dolore aliqua eiusmod. Magna nulla nostrud incididunt qui pariatur occaecat ipsum reprehenderit adipisicing minim culpa mollit velit. Est velit sint do veniam do tempor quis Lorem.',
    added: 'Monday, March 7, 2016 7:44 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['occaecat', 'mollit', 'Lorem', 'mollit', 'id'],
    orders: 0,
    discount: 20,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffb940188c7187b250',
    name: 'tempor ullamco et',
    index: 14,
    isActive: true,
    price: 15.56,
    pictures: [
      'https://picoolio.net/images/2018/08/14/103-015b3ff2be6edda99f.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Caba553719eee071f.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Me48edf976d060357.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Tb92fcd09d03317fb.jpg',
    ],
    category: 'skirt',
    color: 'multicolor',
    brand: 'EVIDENDS',
    description:
      'Nostrud aliquip in aute do laboris. In mollit est Lorem esse aliqua laborum in. Sint id veniam aliquip veniam sunt ullamco pariatur sit consectetur eiusmod. Nostrud veniam laboris excepteur fugiat comm duis. Duis nulla in ipsum mollit fugiat dolor occaecat duis dolor ut amet quis reprehenderit. Pariatur nisi proident duis consequat comm id ex comm pariatur nulla do esse reprehenderit do.\n\nIrure eiusmod esse id dolore sint aute nostrud ullamco. Ullamco incididunt nulla qui sint dolor anim incididunt tempor sunt qui duis enim ex ut. Incididunt consequat laborum magna ut pariatur magna enim laboris duis est tempor ad veniam cillum. comm nisi irure consectetur exercitation excepteur nisi aute sunt do dolore.',
    added: 'Tuesday, June 27, 2017 8:58 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['incididunt', 'ea', 'do', 'aute', 'aliqua'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffcebfb376d8d7a72e',
    name: 'nisi cillum irure',
    index: 15,
    isActive: false,
    price: 93.02,
    pictures: [
      'https://picoolio.net/images/2018/08/14/103-02d0d529da591a82c6.jpg',
      'https://picoolio.net/images/2018/08/14/103-02C1d674104a8163ec4.jpg',
    ],
    category: 'skirt',
    color: 'yellowred',
    brand: 'OVOLO',
    description:
      'Velit incididunt eu eu quis comm minim ullamco qui esse sunt anim sit ex minim. Officia dolor reprehenderit velit in ex ea. Irure fugiat sunt et magna occaecat aliquip eu nulla adipisicing. Proident magna labore anim proident Lorem aliquip sit laboris minim cupidatat velit ex ut. Proident veniam est fugiat do. Amet sint est velit in tempor velit excepteur deserunt non.\n\nExcepteur cillum ea est mollit occaecat ut eiusmod incididunt deserunt aliquip anim mollit et dolore. Cillum enim ullamco eiusmod exercitation esse enim consectetur eiusmod adipisicing eu qui. Lorem eiusmod enim consequat eu aliquip elit occaecat cupidatat laboris exercitation tempor amet. Quis aliquip minim occaecat eiusmod est culpa dolor nostrud nisi ex ipsum comm.',
    added: 'Thursday, July 19, 2018 10:50 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['dolor', 'tempor', 'laborum', 'ut', 'dolor'],
    orders: 0,
    discount: 60,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff06e37321afd7674b',
    name: 'anim tempor officia',
    index: 16,
    isActive: true,
    price: 32.91,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-05e7f6315f5d2efacc.jpg',
      'https://picoolio.net/images/2018/08/14/04-05-crpa6f23860e3d706a1.jpg',
    ],
    category: 'overall',
    color: 'multicolor',
    brand: 'EXOTERIC',
    description:
      'Ut exercitation exercitation dolor est comm. Pariatur eu duis sit incididunt elit minim ipsum est ea aute minim occaecat. Do cillum enim fugiat amet sit irure sunt mollit labore laboris dolore. Sint non eu occaecat qui duis laborum sunt duis. Irure pariatur occaecat aliqua ut aliqua proident ut consectetur cupidatat tempor anim laboris. Id deserunt non est elit tempor do. Sit aliquip reprehenderit aliquip incididunt excepteur.\n\nCupidatat comm culpa excepteur comm eiusmod exercitation cillum reprehenderit consequat elit consectetur. Aliqua nulla nulla minim excepteur do labore mollit nisi mollit mollit qui. Sint mollit sit id amet fugiat duis. Ullamco sit fugiat eu aute mollit fugiat excepteur deserunt eu duis consequat sit in occaecat.',
    added: 'Thursday, September 24, 2015 6:45 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['qui', 'ex', 'nulla', 'consequat', 'tempor'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff84befa463b16098c',
    name: 'labore velit sunt',
    index: 17,
    isActive: false,
    price: 10.41,
    pictures: [
      'https://picoolio.net/images/2018/08/14/85-0637d0ad55d5ce5dbf.jpg',
      'https://picoolio.net/images/2018/08/14/85-06D87e1ab418a3fd2f7.jpg',
      'https://picoolio.net/images/2018/08/14/85-06T018a5418e5a39f80.jpg',
    ],
    category: 'dress',
    color: 'black',
    brand: 'ZEAM',
    description:
      'Quis ipsum laboris Lorem irure id anim non nulla. Eu amet culpa Lorem anim ullamco ea ut Lorem ipsum. Exercitation minim laborum ut est exercitation tempor cupidatat ut enim. Nulla sunt anim comm sit cupidatat ipsum sint eiusmod nulla est excepteur. Anim deserunt magna ex magna ullamco sunt deserunt mollit nisi eiusmod ad aliquip veniam aliquip. Anim cupidatat magna ea non magna deserunt dolor esse do cupidatat do. Veniam non voluptate ipsum cillum consectetur culpa elit cupidatat do fugiat amet ut est anim.\n\nQuis comm reprehenderit ea ullamco incididunt cupidatat labore. Proident tempor laboris occaecat esse occaecat labore officia ea excepteur ut Lorem ipsum. Esse laboris tempor aute excepteur dolor cupidatat.',
    added: 'Saturday, July 14, 2018 5:51 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['in', 'dolor', 'amet', 'elit', 'proident'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff1ca24409bfc1e85d',
    name: 'ut aliquip velit',
    index: 19,
    isActive: true,
    price: 74.54,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-06f24cdb412ed3f5b4.jpg',
      'https://picoolio.net/images/2018/08/14/04-06-crp97e73817e3492464.jpg',
    ],
    category: 'overall',
    color: 'brown',
    brand: 'DAIDO',
    description:
      'Voluptate Lorem ad quis exercitation ex non reprehenderit reprehenderit nulla reprehenderit. Eiusmod consequat eiusmod labore elit cupidatat laboris aliqua. Cupidatat qui quis est comm elit magna adipisicing incididunt. Qui culpa mollit mollit officia et elit id tempor culpa elit aliquip minim. Fugiat dolor ea elit Lorem excepteur proident sunt.\n\nElit dolor culpa eiusmod enim culpa deserunt adipisicing et aliquip consectetur est. Aliqua aliquip eiusmod esse ex deserunt ex eiusmod deserunt eiusmod aliquip. Nisi magna ut irure enim.',
    added: 'Tuesday, December 29, 2015 8:48 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['elit', 'duis', 'consequat', 'nostrud', 'voluptate'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffa4dd5ebbb1050477',
    name: 'aute sunt dolore',
    index: 20,
    isActive: false,
    price: 87.94,
    pictures: [
      'https://picoolio.net/images/2018/08/14/106-01a8cc47eaee1d0bca.jpg',
      'https://picoolio.net/images/2018/08/14/106-01M5e12eabeb52537be.jpg',
      'https://picoolio.net/images/2018/08/14/106-01Tc25dfd47bce48c50.jpg',
    ],
    category: 'dress',
    color: 'white',
    brand: 'SEQUITUR',
    description:
      'Aliquip duis proident cupidatat dolore ullamco cupidatat non minim deserunt Lorem proident est. Velit officia in deserunt ut nulla laborum. Laborum occaecat irure aliquip comm in et aute nisi irure voluptate in minim sit. comm excepteur proident exercitation proident veniam magna ullamco in dolor irure ad proident fugiat do. Aute do excepteur ullamco voluptate ea in reprehenderit non Lorem id tempor sunt. Ea laborum duis consectetur esse aliqua sit et.\n\nEst elit quis incididunt esse minim qui cupidatat minim. Adipisicing culpa labore comm deserunt est minim sint sint. Duis excepteur cillum exercitation duis reprehenderit elit nisi deserunt non esse minim.',
    added: 'Thursday, May 19, 2016 7:05 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['aliquip', 'cupidatat', 'reprehenderit', 'enim', 'in'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff6e6451b7581cbdc5',
    name: 'tempor eiusmod amet',
    index: 21,
    isActive: true,
    price: 22.7,
    pictures: [
      'https://picoolio.net/images/2018/08/14/27-27b0ca87b71289eec9.jpg',
      'https://picoolio.net/images/2018/08/14/27-27D89c51c18f4e8ca23.jpg',
      'https://picoolio.net/images/2018/08/14/27-27Tcf591e821d4bee4b.jpg',
    ],
    category: 'dress',
    color: 'black',
    brand: 'GEEKY',
    description:
      'Proident mollit ut eu ea sunt exercitation labore magna Lorem. Qui laboris minim nostrud culpa consectetur ut voluptate occaecat. Aliqua ullamco nisi amet veniam excepteur nulla enim ea ut proident consectetur.\n\nMinim sunt nostrud voluptate pariatur deserunt non do incididunt magna incididunt voluptate fugiat aute. Incididunt consequat nostrud tempor in nisi eu id ut anim laborum minim. Nulla eiusmod sint id irure nulla qui. Esse anim enim ut nulla id nisi minim ipsum. Duis aute ea reprehenderit sit dolore elit pariatur ipsum magna sint. Irure id voluptate deserunt amet culpa minim labore quis. comm amet duis labore pariatur.',
    added: 'Thursday, March 16, 2017 7:24 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ullamco', 'quis', 'anim', 'et', 'culpa'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffdfaaf501a6577107',
    name: 'laboris sint consequat',
    index: 22,
    isActive: false,
    price: 75.99,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'brown',
    brand: 'CUBIX',
    description:
      'Eu id duis consectetur reprehenderit. Amet cupidatat culpa ipsum anim tempor esse comm. Voluptate ullamco anim ut sunt.\n\nConsequat sint ullamco do cillum aute in Lorem consectetur. Ut officia laborum officia et. Ut sit quis nulla tempor dolor culpa cillum fugiat ex excepteur irure. Culpa reprehenderit mollit sint anim irure. Nostrud in ipsum exercitation cillum dolore dolor ullamco reprehenderit cillum et aliqua quis incididunt. Consequat culpa veniam ipsum officia eiusmod amet in. Fugiat amet qui ex duis labore est anim consequat excepteur et reprehenderit consectetur ex.',
    added: 'Wednesday, January 6, 2016 10:06 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['velit', 'dolore', 'in', 'Lorem', 'reprehenderit'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff38f78c240d873ac2',
    name: 'Lorem non reprehenderit',
    index: 23,
    isActive: true,
    price: 63.89,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-02M.13e76664b87849772.jpg',
      'https://picoolio.net/images/2018/08/14/89-02Me9c9f90ed933728c.jpg',
      'https://picoolio.net/images/2018/08/14/89-02T14496c98a78cd347.jpg',
    ],
    category: 'trousers',
    color: 'brown',
    brand: 'INRT',
    description:
      'Lorem nisi ea pariatur quis eiusmod occaecat labore reprehenderit. Aliqua irure enim duis qui Lorem. Ad tempor magna magna magna labore amet aute in in aute laboris sint sit consequat. Id consequat minim ad enim dolore sunt ipsum cupidatat tempor sit mollit. Sunt esse magna excepteur irure esse esse est consectetur sit officia cillum. comm officia culpa nulla Lorem ad non consectetur officia veniam.\n\nEt et culpa sit duis cupidatat mollit pariatur aute mollit. Nostrud ex mollit magna ea. Non tempor non do dolore.',
    added: 'Sunday, August 21, 2016 3:51 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Lorem', 'ut', 'do', 'aliqua', 'ipsum'],
    orders: 0,
    discount: 20,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffbcf5070e17752c53',
    name: 'ullamco in culpa',
    index: 24,
    isActive: true,
    price: 76.06,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-070ccf7295686bbb56.jpg',
      'https://picoolio.net/images/2018/08/14/04-07-crpd7f3675a14391d94.jpg',
    ],
    category: 'overall',
    color: 'brown',
    brand: 'SCHOOLIO',
    description:
      'Veniam amet consectetur exercitation ea aliquip et amet occaecat esse velit. Officia eiusmod laborum cupidatat consectetur ex laborum amet veniam amet ex incididunt. Mollit ea esse velit labore aliqua comm occaecat comm deserunt enim dolore minim esse veniam.\n\nProident amet exercitation mollit cupidatat. Proident elit sunt ipsum nostrud sit culpa minim voluptate laborum ullamco quis pariatur non aute. comm ullamco exercitation deserunt ut officia consequat consequat dolore eu. Ipsum ullamco officia eiusmod amet dolor est enim. Tempor elit ut deserunt reprehenderit velit nulla culpa in anim officia ipsum nulla quis. Et dolor officia laboris proident consequat magna Lorem aliqua dolore nisi exercitation irure aute nostrud.',
    added: 'Friday, July 3, 2015 11:10 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['adipisicing', 'mollit', 'in', 'elit', 'duis'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff0b1e794813bdc28c',
    name: 'deserunt dolore exercitation',
    index: 25,
    isActive: true,
    price: 11.99,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'black',
    brand: 'ENERFORCE',
    description:
      'Consequat quis enim esse irure irure eu aliquip dolor labore officia enim quis mollit. Ipsum aute dolore dolore qui cillum veniam est minim eiusmod comm velit. Eiusmod mollit ea laborum esse amet Lorem cupidatat in ipsum. Dolore qui eu ipsum laborum incididunt deserunt.\n\nEiusmod consequat id qui do dolore. Sunt cupidatat amet voluptate excepteur comm duis veniam. Ipsum Lorem in nisi dolore laborum ipsum. Eiusmod et ea consectetur pariatur sit nulla consequat duis id deserunt reprehenderit sit ex. Excepteur aliqua cupidatat qui ipsum ullamco proident consectetur culpa velit eiusmod. Exercitation ut do culpa consectetur ea Lorem elit non elit velit aute aliqua velit est. Officia ut fugiat nostrud ullamco ullamco.',
    added: 'Saturday, November 4, 2017 1:25 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['quis', 'ipsum', 'consequat', 'voluptate', 'enim'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffd7bade9544a5bd73',
    name: 'occaecat est ullamco',
    index: 26,
    isActive: true,
    price: 39.85,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-061dc75ee147df34fb.jpg',
      'https://picoolio.net/images/2018/08/14/89-06M1ab51b856d81547e.jpg',
      'https://picoolio.net/images/2018/08/14/89-06T87b4337f650f5427.jpg',
    ],
    category: 'trousers',
    color: 'black',
    brand: 'VERAQ',
    description:
      'Enim dolore est id adipisicing ut. Laboris magna eu comm aute pariatur sunt est nulla. Dolor culpa enim ipsum cupidatat amet comm incididunt ut. Eu culpa fugiat elit est et qui adipisicing nostrud consectetur amet Lorem dolore magna.\n\nConsectetur exercitation officia tempor eiusmod ut sint excepteur nisi. Eu ad minim tempor pariatur velit consequat. Velit do voluptate ad eiusmod est. Pariatur anim nulla eu dolor in sint nulla excepteur fugiat sit. Reprehenderit aliquip nulla ex ut eiusmod Lorem tempor occaecat dolore enim.',
    added: 'Wednesday, June 27, 2018 9:55 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['qui', 'ullamco', 'tempor', 'sunt', 'dolor'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff4feeaecddc00c0aa',
    name: 'consectetur aliqua esse',
    index: 27,
    isActive: true,
    price: 86.26,
    pictures: [
      'https://picoolio.net/images/2018/08/14/70-13eb0a900916836476.jpg',
      'https://picoolio.net/images/2018/08/14/70-13Da57edf63c949e5d2.jpg',
      'https://picoolio.net/images/2018/08/14/70-13Tc61f484ee8a6b269.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'ZERBINA',
    description:
      'Nisi excepteur fugiat pariatur quis occaecat dolore mollit nisi nisi dolor non pariatur sunt occaecat. Veniam duis Lorem aute cillum nisi sint duis veniam quis elit sunt. Nulla cupidatat ullamco Lorem consectetur laborum deserunt cupidatat velit adipisicing officia nulla dolore minim.\n\nEu non do ex nisi occaecat do quis occaecat laboris quis in laborum. Eu labore qui ad do aute magna sunt laborum eu consequat. Quis nostrud in fugiat sunt voluptate ex minim fugiat excepteur velit ex do exercitation veniam. Est eiusmod mollit cillum elit et excepteur nisi. Ex in excepteur qui occaecat Lorem laborum dolor comm occaecat Lorem fugiat excepteur ullamco.',
    added: 'Tuesday, February 11, 2014 11:42 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['in', 'sunt', 'culpa', 'nisi', 'est'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff15f818849b62ba5f',
    name: 'officia exercitation Lorem',
    index: 28,
    isActive: false,
    price: 72.97,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B2520a6172ec2d28381de.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B254764b319b9f729174d.jpg',
    ],
    category: 'skirt',
    color: 'blue',
    brand: 'ZBOO',
    description:
      'Mollit dolor laboris minim amet qui consequat cillum ut adipisicing enim magna ad consectetur. Ex nisi dolor cupidatat consectetur dolore voluptate incididunt et consequat veniam nulla quis duis. Nostrud fugiat ex elit ut dolore elit nisi excepteur culpa in cillum esse mollit tempor. Aliquip adipisicing anim cillum laboris ut velit. Sint reprehenderit aliquip eu laboris cillum elit sit. Ex et proident quis irure dolore proident est esse ipsum nulla labore. Duis occaecat ea ex ullamco irure voluptate consequat nostrud.\n\nAd id sunt pariatur sint laborum exercitation sunt. Ea eu et id consequat ea eiusmod id anim magna amet magna ut reprehenderit elit. Consectetur comm amet ex deserunt officia laborum id. Nulla reprehenderit ut ea nulla ad cillum comm. Deserunt dolore nulla ad eu anim officia. Qui ad magna ut in exercitation cillum incididunt laboris exercitation nostrud pariatur occaecat.',
    added: 'Saturday, June 25, 2016 8:19 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['aute', 'laboris', 'enim', 'ad', 'fugiat'],
    orders: 0,
    discount: 15,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff95cdc1e0f18e9dae',
    name: 'est et nostrud',
    index: 29,
    isActive: true,
    price: 50.34,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B255844bea713f52646e2.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B25773dde17f919ba3a1e.jpg',
    ],
    category: 'skirt',
    color: 'black',
    brand: 'MOMENTIA',
    description:
      'Ad eiusmod officia adipisicing occaecat adipisicing irure in labore. Laboris consectetur officia voluptate voluptate exercitation fugiat ullamco deserunt. Adipisicing labore eiusmod comm dolor irure.\n\nAliquip in Lorem Lorem voluptate pariatur nostrud labore est magna amet aute. Ut excepteur deserunt occaecat dolore sunt. Ullamco velit et dolor deserunt aliquip irure amet.',
    added: 'Wednesday, April 1, 2015 11:32 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['cupidatat', 'tempor', 'sint', 'culpa', 'cupidatat'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51fff31d58a4cc17007c',
    name: 'duis dolor irure',
    index: 30,
    isActive: false,
    price: 89.31,
    pictures: [
      'https://picoolio.net/images/2018/08/14/65-0158c01fd476a60963.jpg',
      'https://picoolio.net/images/2018/08/14/65-01-B758c20262222ec24.jpg',
      'https://picoolio.net/images/2018/08/14/65-01c0861aad0461c26f6.jpg',
    ],
    category: 'jacket',
    color: 'white',
    brand: 'EXOZENT',
    description:
      'Pariatur deserunt incididunt ullamco aute sunt ipsum nulla nostrud nisi minim enim occaecat cupidatat tempor. Elit et in voluptate anim ullamco reprehenderit laborum veniam dolor ex veniam magna cupidatat. Minim dolore eiusmod adipisicing consectetur consectetur veniam reprehenderit qui ea. Ipsum consequat voluptate in ea laboris anim non eu consequat sit fugiat sint incididunt voluptate. Veniam id pariatur culpa et labore officia laboris Lorem consectetur pariatur exercitation consectetur. Ea et dolore deserunt occaecat Lorem aliqua aliqua sit ex adipisicing voluptate eu eiusmod duis. Ex occaecat mollit laborum ullamco sunt.\n\nNisi pariatur nisi proident amet tempor nulla sit irure ut veniam. Minim cupidatat ex est do occaecat anim in ea non cillum fugiat sit dolor. Duis in do proident elit duis amet. Reprehenderit aute fugiat cupidatat cupidatat cupidatat tempor. Dolor quis officia nisi irure laborum ullamco ex in. Reprehenderit comm comm ullamco anim sunt tempor ipsum et excepteur ad magna deserunt.',
    added: 'Wednesday, October 14, 2015 6:25 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['officia', 'voluptate', 'quis', 'culpa', 'deserunt'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff5363712c7dbd7951',
    name: 'minim minim magna',
    index: 31,
    isActive: false,
    price: 82.31,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'orange',
    brand: 'KAGE',
    description:
      'Labore dolor Lorem incididunt ut nulla consequat eu amet. Laborum sit Lorem adipisicing aliqua pariatur esse culpa aute irure eiusmod consectetur do. Cupidatat ad elit sit elit quis reprehenderit do.\n\nNon officia comm laborum voluptate exercitation consequat proident qui ad. Eu incididunt laborum anim occaecat quis. Elit dolor elit excepteur cillum ea do aliquip ex cupidatat ea.',
    added: 'Friday, July 24, 2015 5:05 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['est', 'anim', 'adipisicing', 'anim', 'occaecat'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffdfaaf021ae82ae48',
    name: 'comm minim aliqua',
    index: 32,
    isActive: false,
    price: 59.99,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-097d851fea88ff34d8.jpg',
      'https://picoolio.net/images/2018/08/14/04-09-crp5e59f53f9471861c.jpg',
    ],
    category: 'overall',
    color: 'green',
    brand: 'VOLAX',
    description:
      'Culpa quis laboris ipsum magna elit officia enim id sit quis sint. Culpa incididunt elit laborum comm minim mollit occaecat eiusmod minim duis. Qui enim sunt non cupidatat est eiusmod ea excepteur Lorem. Sunt deserunt labore reprehenderit esse ex eu est. Deserunt consequat enim elit tempor. Ex occaecat adipisicing labore ad nisi.\n\nDo minim ad nisi exercitation elit. Mollit in ex non laboris excepteur sit esse excepteur esse qui consequat exercitation. Adipisicing Lorem amet aliqua veniam eiusmod aute deserunt exercitation sunt. Culpa comm est dolore amet fugiat nisi.',
    added: 'Monday, July 2, 2018 2:27 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ullamco', 'sint', 'cupidatat', 'non', 'nisi'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffecf7c74a6a238106',
    name: 'occaecat officia ea',
    index: 33,
    isActive: false,
    price: 53.05,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-102692614f641b9bad.jpg',
      'https://picoolio.net/images/2018/08/14/04-10-crp5e3c85a0ee66160e.jpg',
    ],
    category: 'overall',
    color: 'brown',
    brand: 'NORALI',
    description:
      'Esse quis ex cupidatat enim tempor et nostrud tempor et aute. Enim dolore elit incididunt laboris elit ad laboris labore exercitation. Consectetur adipisicing in anim ullamco cillum veniam id ad. Non duis ipsum adipisicing Lorem in ex culpa sint nisi id nulla adipisicing labore. Reprehenderit cupidatat ad et quis in ipsum. Officia et excepteur sit dolore.\n\nId aliquip mollit dolor aliquip consectetur aliqua nostrud labore consequat velit. Mollit tempor voluptate culpa consectetur elit velit comm amet aliqua. Lorem eiusmod tempor eu qui. Eiusmod dolore dolor aliqua et irure ex occaecat pariatur.',
    added: 'Monday, July 4, 2016 11:05 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['proident', 'exercitation', 'excepteur', 'eu', 'adipisicing'],
    orders: 0,
    discount: 25,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffd61bef14326c92dc',
    name: 'excepteur id voluptate',
    index: 34,
    isActive: false,
    price: 26.15,
    pictures: [
      'https://picoolio.net/images/2018/08/14/85-07a123b26de327c4e7.jpg',
      'https://picoolio.net/images/2018/08/14/85-07Ma1f0258752142e6c.jpg',
      'https://picoolio.net/images/2018/08/14/85-07T732774fecb578537.jpg',
    ],
    category: 'shirt',
    color: 'yellowred',
    brand: 'CRUSTATIA',
    description:
      'Qui nisi esse mollit sunt. Eiusmod mollit tempor ipsum est sint deserunt proident. Dolor enim sit non velit anim nulla et officia reprehenderit laboris pariatur laboris non. Ex velit ad ex culpa sit irure fugiat exercitation aute velit occaecat dolore dolor.\n\nAd ipsum incididunt sit ipsum quis quis qui fugiat ea ex officia. Ad dolore labore enim id est velit. Aliqua velit officia sint quis anim consequat sint.',
    added: 'Wednesday, May 27, 2015 9:00 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['adipisicing', 'do', 'consectetur', 'enim', 'nostrud'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff69a0c0affc9343f5',
    name: 'voluptate velit cillum',
    index: 35,
    isActive: true,
    price: 92.47,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-02M.13e76664b87849772.jpg',
      'https://picoolio.net/images/2018/08/14/89-02Me9c9f90ed933728c.jpg',
      'https://picoolio.net/images/2018/08/14/89-02T14496c98a78cd347.jpg',
    ],
    category: 'jacket',
    color: 'green',
    brand: 'DYMI',
    description:
      'Aute ea pariatur quis irure. Esse sunt amet occaecat exercitation culpa pariatur. Consequat est nulla pariatur nulla duis.\n\nDo excepteur mollit sit consectetur cillum exercitation culpa et laboris mollit. Do est elit aliquip consectetur ut adipisicing sint officia. Adipisicing incididunt id fugiat magna incididunt amet eu aliqua dolore irure Lorem aliqua enim duis. Nulla comm dolore sint velit mollit. Non nisi officia occaecat culpa aliquip consequat excepteur dolore eiusmod. Enim sint incididunt duis est tempor.',
    added: 'Thursday, September 24, 2015 5:40 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['mollit', 'dolor', 'mollit', 'incididunt', 'elit'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffd20081d206336d1b',
    name: 'sint laboris elit',
    index: 36,
    isActive: true,
    price: 95.76,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B261575e9a963bb0428e1.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B26229eb99271dcedbe45.jpg',
    ],
    category: 'skirt',
    color: 'yellowred',
    brand: 'GAPTEC',
    description:
      'Proident minim in aute cillum aute exercitation incididunt anim nostrud. Ad cillum culpa ea laboris qui labore ea excepteur deserunt. Dolor magna esse veniam nisi est sint laboris dolore non sint eiusmod magna est dolore. Aliquip sint labore ad sint sit. Id sunt culpa mollit tempor ut do anim consectetur.\n\nProident veniam sit velit Lorem consequat ex ad pariatur. Qui anim irure voluptate cillum fugiat deserunt. Aliquip pariatur Lorem tempor incididunt anim pariatur est sunt eu velit sint qui enim. Reprehenderit reprehenderit consectetur pariatur irure esse consequat consectetur proident. Officia comm deserunt et amet proident voluptate eu tempor elit nulla.',
    added: 'Monday, July 28, 2014 10:50 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['cillum', 'non', 'aute', 'aliqua', 'occaecat'],
    orders: 0,
    discount: 10,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff8d84d8c0179e8a83',
    name: 'aliqua non est',
    index: 37,
    isActive: true,
    price: 55.69,
    pictures: [
      'https://picoolio.net/images/2018/08/14/87-11034632b5c01a61dd.jpg',
      'https://picoolio.net/images/2018/08/14/87-11D9af0a6836efc837d.jpg',
      'https://picoolio.net/images/2018/08/14/87-11T08300be63fe0c59d.jpg',
    ],
    category: 'dress',
    color: 'yellowred',
    brand: 'SLAX',
    description:
      'Lorem aute comm aliquip fugiat quis. Consequat fugiat ipsum ullamco ex amet. Ipsum incididunt excepteur ex quis consectetur et sunt voluptate adipisicing exercitation ea occaecat ullamco. Est ea laboris officia sit est adipisicing anim. Lorem ea ad officia amet id ut veniam dolore cillum aliqua aute dolore. Id excepteur nulla elit laborum deserunt duis id labore sunt aliqua comm elit in laboris.\n\nIncididunt qui velit ea consequat sint nisi reprehenderit laboris irure eu. Esse velit ea elit sint amet incididunt voluptate do elit amet est. Non qui sit laboris amet occaecat esse fugiat in tempor amet amet aliquip. Cupidatat sit consectetur quis ut et comm eu proident labore minim est exercitation eiusmod.',
    added: 'Friday, December 26, 2014 6:44 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['velit', 'ad', 'ex', 'anim', 'qui'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff764b7413d08db9b7',
    name: 'eu anim nostrud',
    index: 38,
    isActive: false,
    price: 39.55,
    pictures: [
      'https://picoolio.net/images/2018/08/14/87-13569f6b61d909492c.jpg',
      'https://picoolio.net/images/2018/08/14/87-13M524dfbc41af3ff18.jpg',
      'https://picoolio.net/images/2018/08/14/87-13T4a83454b1eb354fa.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'OTHERSIDE',
    description:
      'Eu duis voluptate irure consectetur quis ipsum comm. Cillum nulla non est dolore ullamco ut veniam mollit fugiat mollit reprehenderit reprehenderit. Eu ut ullamco laborum ex amet. Proident est quis ipsum Lorem.\n\nIncididunt deserunt deserunt minim ad proident. Sint ex sint excepteur ad. Non veniam duis est aliqua velit non deserunt veniam culpa ipsum laborum comm consequat. Nostrud comm magna occaecat ea tempor nisi. Pariatur consectetur nostrud elit laborum minim irure. Exercitation quis reprehenderit exercitation mollit qui enim esse nostrud pariatur officia comm culpa.',
    added: 'Thursday, October 15, 2015 7:17 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['id', 'labore', 'labore', 'ad', 'nulla'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff46156105376b3d74',
    name: 'mollit laboris labore',
    index: 39,
    isActive: false,
    price: 60.79,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-084c732522600a958a.jpg',
      'https://picoolio.net/images/2018/08/14/91-08Mc3b325f5b8ce2251.jpg',
      'https://picoolio.net/images/2018/08/14/91-08Tf275bf41ff2421cf.jpg',
    ],
    category: 'trousers',
    color: 'pink',
    brand: 'ZENSOR',
    description:
      'Consequat amet incididunt irure enim mollit. Eiusmod dolor eiusmod in occaecat elit culpa. Irure duis laboris do sit ut magna officia enim et fugiat ipsum.\n\nNostrud sit laboris Lorem ad quis irure ad irure ea eu. Adipisicing quis non velit aliquip duis non culpa id minim et quis. Officia laboris do in deserunt aliquip pariatur et deserunt culpa nisi non officia nisi.',
    added: 'Sunday, February 4, 2018 2:20 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['aliqua', 'minim', 'exercitation', 'velit', 'id'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff305e7c5908ecf8f5',
    name: 'sint nisi Lorem',
    index: 40,
    isActive: false,
    price: 21.6,
    pictures: [
      'https://picoolio.net/images/2018/08/14/107-01c6624d482b5a2b17.jpg',
      'https://picoolio.net/images/2018/08/14/107-01Ddeee19560a7e16f4.jpg',
      'https://picoolio.net/images/2018/08/14/107-01Tbc85a6a070001b06.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'COMBOT',
    description:
      'Non ut dolore esse id cillum sunt ex anim incididunt reprehenderit in non. Sint fugiat do consectetur pariatur tempor sint elit consequat quis ad fugiat elit cillum aliqua. Reprehenderit sunt ad proident in tempor non cillum reprehenderit exercitation officia. Aute qui labore proident proident incididunt nisi consectetur sit in aliquip dolor esse qui nisi. Non elit et eu ex deserunt laboris. Tempor anim esse do cupidatat ea nisi duis aliqua ullamco anim consequat culpa ex.\n\nLabore eiusmod tempor sint reprehenderit in ipsum laborum adipisicing Lorem adipisicing eiusmod dolor reprehenderit est. Non ipsum labore nisi anim dolore tempor ipsum occaecat eiusmod duis excepteur. Duis proident tempor nulla Lorem amet mollit.',
    added: 'Tuesday, February 28, 2017 11:03 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['veniam', 'Lorem', 'anim', 'ex', 'anim'],
    orders: 0,
    discount: 5,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff28423c3db3395eff',
    name: 'laboris dolore adipisicing',
    index: 41,
    isActive: true,
    price: 62.87,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'white',
    brand: 'MOREGANIC',
    description:
      'Et amet comm laboris ullamco et aliquip Lorem dolor sunt ad tempor ea aliquip. Do laborum magna occaecat qui excepteur ut occaecat. Irure reprehenderit reprehenderit sunt eu id ipsum dolore irure in exercitation. Duis cupidatat adipisicing comm labore ut nulla minim non irure sint mollit do mollit. Irure velit cillum enim velit. Dolor voluptate reprehenderit non magna quis ad et. Irure cupidatat voluptate do amet eu eu fugiat et nostrud est minim.\n\nQuis fugiat nulla proident excepteur comm consequat non laboris duis nostrud eu nisi. Sit nostrud Lorem deserunt enim elit consequat et cillum. Sit laboris adipisicing excepteur proident elit quis sit officia. Nulla irure enim elit sint magna tempor occaecat labore comm do nisi laboris culpa nostrud. Occaecat officia incididunt sunt ad. Irure aliqua velit est dolor eu. Esse adipisicing et exercitation eu magna proident occaecat ullamco exercitation deserunt.',
    added: 'Saturday, October 1, 2016 3:29 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['sunt', 'incididunt', 'eu', 'nostrud', 'ex'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffb4957a9f49c01053',
    name: 'laboris incididunt velit',
    index: 42,
    isActive: false,
    price: 66.76,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-061dc75ee147df34fb.jpg',
      'https://picoolio.net/images/2018/08/14/89-06M1ab51b856d81547e.jpg',
      'https://picoolio.net/images/2018/08/14/89-06T87b4337f650f5427.jpg',
    ],
    category: 'jacket',
    color: 'pink',
    brand: 'PLASTO',
    description:
      'Tempor consectetur cillum aliquip qui comm veniam exercitation sit velit ut mollit tempor eu esse. Dolore laboris qui eiusmod consequat nulla culpa adipisicing. Ipsum incididunt id exercitation consectetur comm. Irure aute est excepteur cupidatat sunt.\n\nCillum magna magna laborum veniam cillum irure nostrud eu et deserunt incididunt. Irure ad eiusmod dolor proident Lorem cupidatat sunt duis minim. Excepteur comm cillum ipsum ea ullamco reprehenderit et do.',
    added: 'Friday, January 12, 2018 7:36 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['incididunt', 'culpa', 'nisi', 'amet', 'enim'],
    orders: 0,
    discount: 10,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff93caa67db4635534',
    name: 'sint dolore non',
    index: 43,
    isActive: true,
    price: 11.67,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B2640533a9e5e4bb605b5.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B26776ae91e86c7ad9192.jpg',
    ],
    category: 'skirt',
    color: 'white',
    brand: 'NSPIRE',
    description:
      'Minim reprehenderit anim aute reprehenderit. Pariatur amet sint ea est tempor. Anim excepteur ullamco duis eu occaecat et ad comm amet cupidatat. Velit ipsum culpa exercitation duis minim ea fugiat officia labore cillum proident dolore minim. Nisi qui aliquip pariatur consectetur. Tempor elit officia in ea ea comm fugiat occaecat incididunt cillum. Proident consectetur est officia non ex anim consectetur enim esse occaecat anim.\n\nEx laborum ipsum voluptate nulla esse sunt nostrud incididunt labore nulla. Aute qui ad deserunt Lorem excepteur irure quis culpa. Exercitation irure tempor culpa irure dolore comm aute adipisicing nisi id laborum eu exercitation. Ea anim culpa laborum aliquip aliqua aute excepteur reprehenderit eiusmod eu laborum minim. Consequat cupidatat quis tempor do dolor ullamco culpa officia voluptate anim ullamco. Irure est reprehenderit laborum anim qui irure. Ex minim duis esse duis culpa consequat excepteur cillum cillum laborum consequat irure est officia.',
    added: 'Wednesday, May 30, 2018 3:04 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['eiusmod', 'nostrud', 'enim', 'officia', 'ut'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffc5c3bcf69de05417',
    name: 'voluptate magna excepteur',
    index: 44,
    isActive: true,
    price: 95.45,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'white',
    brand: 'ZOUNDS',
    description:
      'Qui eiusmod eiusmod pariatur sit aute aliqua eu elit do deserunt. Do ea do duis veniam deserunt officia magna do. Ut quis culpa quis nulla aute eiusmod ullamco.\n\nLaborum id proident aute nisi enim non enim consectetur occaecat cupidatat reprehenderit culpa eu. Ex laboris ullamco aliqua enim voluptate occaecat veniam ullamco proident est eiusmod ea. In laboris enim eu aliqua.',
    added: 'Wednesday, October 11, 2017 11:18 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['tempor', 'exercitation', 'nostrud', 'amet', 'consequat'],
    orders: 0,
    discount: 15,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffb7f6faf9e8b769b1',
    name: 'proident comm culpa',
    index: 45,
    isActive: false,
    price: 34.14,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'blouse',
    color: 'black',
    brand: 'CORPORANA',
    description:
      'Minim officia magna dolore magna qui incididunt nulla tempor pariatur exercitation elit. comm et aliqua est pariatur dolore duis. Minim ut duis est laborum Lorem consequat sint. Culpa ex deserunt ea est consectetur eiusmod magna mollit et sint mollit adipisicing enim.\n\nMollit comm consectetur ullamco enim elit occaecat non reprehenderit dolore duis. Proident exercitation do fugiat anim ut amet veniam consectetur deserunt laboris dolor officia tempor. Excepteur quis qui magna consectetur eiusmod consequat. Do aliqua sint nisi labore labore nulla aliquip. Consectetur non ea sunt minim. Aliqua in ut ex ipsum mollit consequat.',
    added: 'Friday, December 16, 2016 7:40 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['labore', 'consectetur', 'tempor', 'proident', 'do'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff52e68da0bb6e73b3',
    name: 'ea irure nulla',
    index: 46,
    isActive: true,
    price: 28.01,
    pictures: [
      'https://picoolio.net/images/2018/08/14/107-0322b84d38ab24e42a.jpg',
      'https://picoolio.net/images/2018/08/14/107-03Tcc2536c79bd882a6.jpg',
    ],
    category: 'dress',
    color: 'brown',
    brand: 'QUANTASIS',
    description:
      'Est laborum pariatur ipsum pariatur esse voluptate ea excepteur enim Lorem. Excepteur ut elit ea nulla est esse sint enim velit ipsum qui occaecat veniam. Proident laboris in enim nisi magna dolor veniam cupidatat.\n\nProident fugiat sit id reprehenderit quis. Adipisicing deserunt anim comm occaecat et minim eu nulla irure. Labore aliquip sit aliquip ut laborum. Aute quis dolore occaecat comm ut adipisicing eu in ea eiusmod. Quis irure cillum officia cupidatat non non do ea adipisicing irure anim mollit. Consequat ea excepteur tempor ex magna aute duis fugiat.',
    added: 'Wednesday, November 29, 2017 11:59 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['laboris', 'voluptate', 'in', 'minim', 'laboris'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffe3deeae0c8d23eac',
    name: 'deserunt amet adipisicing',
    index: 47,
    isActive: true,
    price: 39.53,
    pictures: [
      'https://picoolio.net/images/2018/08/14/108-03517d42bff8b73a0c.jpg',
      'https://picoolio.net/images/2018/08/14/108-03Macb2d4d795fcf478.jpg',
      'https://picoolio.net/images/2018/08/14/108-03Tfe76e8ca28154711.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'BEZAL',
    description:
      'Ullamco irure ut do ullamco nisi aliqua eiusmod deserunt ut eu nulla. Consequat magna culpa adipisicing sint voluptate ad. Ad anim sint nostrud exercitation ad qui ut labore nostrud exercitation pariatur ut. Ad do Lorem cupidatat aute elit dolore amet id ea. Labore pariatur tempor ut et sint eiusmod quis exercitation non incididunt dolore sunt comm aliquip. Laboris adipisicing deserunt est quis mollit. Irure Lorem aliquip excepteur magna Lorem eu ut laboris proident laboris cupidatat mollit pariatur.\n\nFugiat velit anim fugiat consectetur laboris proident adipisicing deserunt deserunt officia in nisi. Voluptate nulla comm laborum ipsum quis laborum amet occaecat pariatur id deserunt. Proident cupidatat laborum do nulla quis minim eiusmod culpa pariatur dolore dolore. Ex aute laboris est ad incididunt. In nisi dolore et mollit aliqua minim.',
    added: 'Monday, May 14, 2018 4:21 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['dolor', 'officia', 'ex', 'sit', 'mollit'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff3283c9034e94c9dc',
    name: 'velit anim et',
    index: 48,
    isActive: true,
    price: 56.76,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-124b216a89860513f9.jpg',
      'https://picoolio.net/images/2018/08/14/04-12-crpc6dc3254ad515f38.jpg',
    ],
    category: 'overall',
    color: 'yellowred',
    brand: 'COMTOURS',
    description:
      'Incididunt nisi do nisi eiusmod id voluptate nisi nisi aliquip sit proident sunt irure. Enim elit anim eiusmod incididunt reprehenderit pariatur cillum veniam eu mollit Lorem nostrud. Culpa ea sint ex nisi officia ea et ullamco eu magna.\n\nAute laboris magna aute incididunt qui aliquip minim nisi elit qui excepteur ad. Consectetur ad sint duis sint pariatur laboris aliqua esse esse. Cillum Lorem cupidatat cillum exercitation incididunt incididunt nisi anim mollit elit nulla. Sint cillum qui sit fugiat nulla duis. Non comm consequat nulla in duis velit nostrud comm. Pariatur cupidatat id consectetur voluptate dolor pariatur exercitation fugiat exercitation. Ex ea eu minim ex fugiat consequat laborum enim eiusmod sunt minim.',
    added: 'Thursday, May 8, 2014 6:06 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ipsum', 'excepteur', 'occaecat', 'qui', 'veniam'],
    orders: 0,
    discount: 20,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffa7109f9be5e7ef36',
    name: 'nulla deserunt amet',
    index: 49,
    isActive: true,
    price: 48.55,
    pictures: [
      'https://picoolio.net/images/2018/08/14/109-01eb4cb54775d4b19b.jpg',
      'https://picoolio.net/images/2018/08/14/109-01D5123f382774004a9.jpg',
      'https://picoolio.net/images/2018/08/14/109-01Tdda3a35ae87e6496.jpg',
    ],
    category: 'dress',
    color: 'white',
    brand: 'ECRATER',
    description:
      'Magna eu aute ipsum enim. Quis in consequat sit fugiat ipsum enim laboris irure nulla ad. Excepteur irure aliquip minim laboris mollit comm id laboris tempor ea sit.\n\nLaborum amet do id dolor enim. Do elit quis incididunt aute consequat ut eu consequat nulla adipisicing dolore proident voluptate esse. Adipisicing velit laborum magna consequat dolor aliqua nulla ullamco qui eu do cupidatat tempor. In fugiat quis veniam pariatur sint nulla excepteur reprehenderit ad cillum nisi nostrud velit ullamco. Anim exercitation nostrud veniam aliquip consectetur excepteur. Veniam sit id qui esse incididunt consequat tempor occaecat cillum. Tempor excepteur laboris dolor non cupidatat amet labore eiusmod aliqua deserunt aliqua esse.',
    added: 'Saturday, July 9, 2016 10:13 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['incididunt', 'proident', 'nisi', 'eiusmod', 'excepteur'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff2d8fb9a49ba1a584',
    name: 'pariatur reprehenderit eiusmod',
    index: 50,
    isActive: false,
    price: 38.72,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-1067533fc0e033753f.jpg',
      'https://picoolio.net/images/2018/08/14/91-10M057306725079fad6.jpg',
      'https://picoolio.net/images/2018/08/14/91-10T92aff31f426bc74a.jpg',
    ],
    category: 'trousers',
    color: 'white',
    brand: 'DECRATEX',
    description:
      'Ea ex eiusmod consectetur quis id non id eu ipsum duis exercitation do. Eu dolor nostrud sit reprehenderit cupidatat fugiat cillum aliquip. Proident cupidatat incididunt enim ad. Fugiat labore mollit quis aliquip. Nostrud quis aliquip labore enim labore pariatur ut laboris ex dolore amet Lorem esse. Magna officia sunt nisi veniam consectetur.\n\nQuis labore mollit aliqua nulla comm id eu voluptate est labore velit aliqua dolor. Aliqua sunt consectetur nostrud reprehenderit. Exercitation id id minim eu quis dolor ex in. Lorem culpa Lorem exercitation dolor ut id labore. Enim incididunt dolore proident laborum sit duis ad ad ipsum culpa laborum incididunt ex reprehenderit. Minim est fugiat sunt elit nostrud veniam incididunt dolor laborum aliqua occaecat esse incididunt.',
    added: 'Friday, April 29, 2016 11:14 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['exercitation', 'consectetur', 'labore', 'qui', 'comm'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff7038b7f83428604a',
    name: 'labore minim dolor',
    index: 51,
    isActive: false,
    price: 18.29,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-14526720483c7f858e.jpg',
      'https://picoolio.net/images/2018/08/14/91-14M749ab21c953d6b3b.jpg',
      'https://picoolio.net/images/2018/08/14/91-14T384daa27bb3d926d.jpg',
    ],
    category: 'trousers',
    color: 'yellowred',
    brand: 'FRENEX',
    description:
      'Eu incididunt deserunt qui cillum comm adipisicing et labore dolore officia esse ullamco magna consectetur. Culpa ad sit aliqua in. Nisi proident dolor voluptate fugiat elit ipsum. Sunt sint aliqua ipsum mollit ut non elit sint voluptate ex officia aliquip sint. Proident fugiat id sit dolore sit voluptate duis mollit in eiusmod consectetur comm eiusmod.\n\nProident nostrud pariatur eu esse cupidatat et veniam eiusmod aute. Tempor proident et labore dolore comm nulla duis cupidatat sit incididunt consectetur cupidatat velit amet. Sit sit nostrud et ad proident consequat consequat sunt ad quis fugiat occaecat ullamco. Dolor consectetur ex amet exercitation id reprehenderit nulla labore ullamco anim ipsum nisi. Adipisicing aliqua ad qui sit irure eu enim Lorem cupidatat. Aute ipsum quis nostrud deserunt voluptate cillum ullamco. Dolor sit aliquip ut est eiusmod proident cupidatat non laboris in adipisicing cupidatat adipisicing.',
    added: 'Thursday, February 8, 2018 1:36 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['amet', 'laborum', 'magna', 'deserunt', 'qui'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff4c15d4b727b8a645',
    name: 'excepteur ex pariatur',
    index: 52,
    isActive: true,
    price: 95.24,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-15M95d1d0a9f870b355.jpg',
      'https://picoolio.net/images/2018/08/14/91-15Dc9c87472108b0949.jpg',
      'https://picoolio.net/images/2018/08/14/91-15T45b2c7a548735681.jpg',
    ],
    category: 'trousers',
    color: 'blue',
    brand: 'NITRACYR',
    description:
      'Cillum deserunt tempor do esse comm non consequat. Mollit tempor voluptate reprehenderit laboris. Fugiat sit proident nisi excepteur ad id est adipisicing voluptate ad. Nisi mollit excepteur ad eiusmod officia dolore consectetur ea cupidatat ad.\n\nExcepteur nostrud officia labore et aliquip elit do irure fugiat eiusmod mollit amet. Ad aliqua sit mollit irure anim consectetur veniam qui anim id ipsum magna fugiat qui. Qui est ad reprehenderit ad occaecat consectetur eiusmod irure. Irure sint exercitation ad eu id.',
    added: 'Thursday, July 20, 2017 6:26 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['eiusmod', 'magna', 'id', 'anim', 'eu'],
    orders: 0,
    discount: 10,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff8bc6c983d94dda00',
    name: 'ut laborum enim',
    index: 53,
    isActive: true,
    price: 76.17,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-136d976d52473fa0c4.jpg',
      'https://picoolio.net/images/2018/08/14/04-13-crp06caf0c49d3c8df2.jpg',
    ],
    category: 'overall',
    color: 'white',
    brand: 'BYTREX',
    description:
      'Ullamco cupidatat aliquip sit amet velit nostrud reprehenderit irure non adipisicing in. Irure labore nulla sint laborum non comm esse minim enim reprehenderit. Ullamco comm incididunt aute amet enim velit eu occaecat ut tempor incididunt proident qui comm. Qui sunt esse sit magna comm minim consequat cillum consectetur amet laboris minim enim. Lorem nisi sit dolore excepteur sunt. Et adipisicing exercitation pariatur aliquip eu laborum. Reprehenderit sit in magna magna ex dolor quis pariatur.\n\nSunt irure labore fugiat pariatur dolor tempor quis consequat non. Aliquip qui aliqua irure magna reprehenderit occaecat sint velit. Sint qui comm ipsum ipsum ad proident laboris labore mollit. Velit occaecat voluptate cillum aute sint irure aute sunt.',
    added: 'Thursday, October 29, 2015 4:30 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['exercitation', 'Lorem', 'cupidatat', 'elit', 'exercitation'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff9d773f60af1977cf',
    name: 'excepteur cupidatat exercitation',
    index: 54,
    isActive: false,
    price: 66.51,
    pictures: [
      'https://picoolio.net/images/2018/08/14/96-05cb9bf34b083c639e.jpg',
      'https://picoolio.net/images/2018/08/14/96-05Mc07d012982630809.jpg',
      'https://picoolio.net/images/2018/08/14/96-05T15b3e1506067266a.jpg',
    ],
    category: 'trousers',
    color: 'yellowred',
    brand: 'CYTREX',
    description:
      'Irure quis est pariatur ex et. Excepteur eiusmod sit mollit sunt aute reprehenderit ullamco non. Enim in proident aliquip in deserunt laborum labore sint laborum et. Occaecat eiusmod fugiat deserunt laboris incididunt tempor et laboris do tempor nisi ex deserunt cupidatat.\n\nOccaecat fugiat sunt consectetur laborum sit sit excepteur sit est velit fugiat. Minim proident tempor pariatur tempor cillum. Consequat aliqua sint consequat officia eiusmod do anim mollit aute elit adipisicing. Velit nulla pariatur officia velit ipsum do excepteur. Irure eu mollit magna consequat officia dolor incididunt amet reprehenderit officia laborum ut aliqua.',
    added: 'Saturday, February 20, 2016 5:08 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['amet', 'aute', 'occaecat', 'irure', 'magna'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff677f28b631ea40fb',
    name: 'quis duis voluptate',
    index: 55,
    isActive: true,
    price: 69.41,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B26886aa8e099fdf8cd0a.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B2711f3efbedd3a192605.jpg',
    ],
    category: 'skirt',
    color: 'yellowred',
    brand: 'ENTALITY',
    description:
      'Ullamco exercitation esse amet excepteur eu irure ad reprehenderit enim. Laborum ullamco nulla eiusmod Lorem consequat consequat id. Adipisicing eu laboris officia do cillum proident veniam nostrud. Nostrud nostrud qui ea sit laboris ad sint do mollit id exercitation. Cillum tempor adipisicing ipsum laborum aute magna.\n\nElit anim culpa comm aliquip nisi. Sunt aliqua sit dolor minim consequat non consequat. comm cupidatat incididunt minim ex ad ad. In Lorem in sint ullamco excepteur sint nulla labore elit enim in quis. Ea ex qui reprehenderit minim nostrud culpa laboris tempor ut.',
    added: 'Thursday, April 5, 2018 7:44 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ut', 'excepteur', 'anim', 'pariatur', 'adipisicing'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff823173ba7649d6a4',
    name: 'est occaecat adipisicing',
    index: 56,
    isActive: true,
    price: 33.6,
    pictures: [
      'https://picoolio.net/images/2018/08/14/97-02a8f1051c13a1c8e9.jpg',
      'https://picoolio.net/images/2018/08/14/97-02b822029bfafc64118.jpg',
      'https://picoolio.net/images/2018/08/14/97-02c480ea8fdf2f6a1e2.jpg',
    ],
    category: 'trousers',
    color: 'green',
    brand: 'GREEKER',
    description:
      'Id pariatur deserunt aute consequat ea incididunt. Anim dolore consequat nostrud ad est voluptate quis duis adipisicing cupidatat mollit culpa qui sunt. Sint in minim proident esse eiusmod incididunt minim do labore. Tempor non in tempor excepteur. Ut esse Lorem exercitation officia nostrud. Eiusmod officia est aute labore reprehenderit anim ullamco eiusmod anim non.\n\nDo aute non quis velit sunt adipisicing cupidatat esse cupidatat consectetur eu dolore eu. Aute aliqua do pariatur Lorem id Lorem in eiusmod officia eu aute fugiat amet proident. Aliqua aute elit exercitation nisi cupidatat magna deserunt laboris nisi eu Lorem pariatur proident velit. Tempor aliqua aute ex Lorem sint fugiat dolor ex. Dolore mollit incididunt ullamco mollit.',
    added: 'Sunday, January 7, 2018 6:40 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['laboris', 'elit', 'excepteur', 'enim', 'comm'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff99774f71678df639',
    name: 'aliquip comm consectetur',
    index: 57,
    isActive: false,
    price: 84.48,
    pictures: [
      'https://picoolio.net/images/2018/08/14/70-148230d597ab8887fe.jpg',
      'https://picoolio.net/images/2018/08/14/70-14D97898d4307d3931e.jpg',
      'https://picoolio.net/images/2018/08/14/70-14Tf97ec4326d46c282.jpg',
    ],
    category: 'dress',
    color: 'blue',
    brand: 'ISOLOGIA',
    description:
      'Enim dolor ea consequat nulla duis exercitation comm. Consequat cillum non consectetur dolor enim et voluptate ea. Culpa esse ut adipisicing est. Lorem irure eiusmod sint do qui laboris dolor magna.\n\nAute dolore Lorem dolore eiusmod excepteur amet occaecat qui cillum deserunt aute sint adipisicing esse. Incididunt sit deserunt duis comm adipisicing labore ea. Irure anim sunt mollit nisi elit eiusmod deserunt minim. Qui Lorem esse dolor velit in. Tempor qui aute cupidatat sunt. Tempor esse comm irure occaecat incididunt.',
    added: 'Tuesday, May 2, 2017 4:56 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['aliqua', 'nulla', 'in', 'elit', 'occaecat'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffd645213eb17b8e75',
    name: 'elit aliquip comm',
    index: 58,
    isActive: false,
    price: 34.96,
    pictures: [
      'https://picoolio.net/images/2018/08/14/04-097d851fea88ff34d8.jpg',
      'https://picoolio.net/images/2018/08/14/04-09-crp5e59f53f9471861c.jpg',
    ],
    category: 'overall',
    color: 'multicolor',
    brand: 'MANGELICA',
    description:
      'In comm dolore qui nulla officia aute aliqua do elit eiusmod labore. Incididunt ullamco elit mollit veniam consectetur. Voluptate consectetur eu quis dolore exercitation laborum magna ea quis labore.\n\nOfficia irure voluptate tempor esse laboris consectetur non laboris tempor in velit adipisicing. Eu dolore officia exercitation aute ad culpa nostrud do. Labore qui incididunt velit minim do veniam ipsum ex. Ullamco eu veniam voluptate eu ad adipisicing nostrud ea. Mollit eiusmod aute adipisicing laborum incididunt culpa anim et aute occaecat ipsum qui mollit. Labore exercitation velit ut eu magna. comm aliqua officia irure mollit incididunt Lorem comm fugiat aliquip.',
    added: 'Monday, July 31, 2017 10:28 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['culpa', 'velit', 'sit', 'non', 'anim'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffbf1f88f35ed6b56f',
    name: 'culpa eu veniam',
    index: 59,
    isActive: true,
    price: 43.33,
    pictures: [
      'https://picoolio.net/images/2018/08/14/_T9B276442fd1f72eef679d9.jpg',
      'https://picoolio.net/images/2018/08/14/_T9B2782480349f2b9e09952.jpg',
    ],
    category: 'skirt',
    color: 'black',
    brand: 'TROLLERY',
    description:
      'Ad adipisicing qui sit id est laborum irure sunt anim aliquip consequat velit ea laborum. Labore qui deserunt ea minim magna voluptate eiusmod ea ea quis duis ullamco eiusmod Lorem. Ea aliquip eu mollit incididunt aliqua ut labore.\n\nLorem ullamco culpa reprehenderit nisi dolore elit esse veniam id voluptate et. Et ullamco consequat aliquip reprehenderit eu nisi in tempor aliqua minim fugiat sint occaecat ea. Enim in laboris anim est et proident nisi aute adipisicing exercitation velit ipsum. Veniam voluptate est nisi occaecat Lorem labore deserunt qui non culpa consequat enim veniam. Elit nulla qui cupidatat magna. Aute reprehenderit duis irure occaecat incididunt irure culpa reprehenderit dolore aliqua cillum labore. Ad sit dolore ullamco exercitation consectetur fugiat.',
    added: 'Tuesday, August 15, 2017 10:24 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['qui', 'voluptate', 'nostrud', 'quis', 'nulla'],
    orders: 0,
    discount: 20,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ffecddba89b6ad8e9b',
    name: 'ipsum nisi labore',
    index: 60,
    isActive: true,
    price: 62.33,
    pictures: [
      'https://picoolio.net/images/2018/08/14/103-015b3ff2be6edda99f.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Caba553719eee071f.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Me48edf976d060357.jpg',
      'https://picoolio.net/images/2018/08/14/103-01Tb92fcd09d03317fb.jpg',
    ],
    category: 'skirt',
    color: 'pink',
    brand: 'ZINCA',
    description:
      'Sunt fugiat qui non id consectetur minim sunt voluptate irure minim elit nisi. Mollit fugiat qui magna elit anim nisi aliqua consectetur irure proident ut. Cillum magna et eu quis nulla incididunt.\n\nUt esse consequat laborum qui velit dolore. Ullamco in laboris elit laboris. Officia ullamco duis dolore laboris dolor irure elit id cupidatat nostrud. Cupidatat reprehenderit consequat sunt ad officia nulla proident.',
    added: 'Wednesday, May 3, 2017 10:06 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['ullamco', 'in', 'do', 'cupidatat', 'aliquip'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff2059de6ada450bdd',
    name: 'adipisicing aliqua cillum',
    index: 61,
    isActive: false,
    price: 59.52,
    pictures: [
      'https://picoolio.net/images/2018/08/14/95-02c6fc753e5fa29e6a.jpg',
      'https://picoolio.net/images/2018/08/14/95-02bdc4c810576af53f3.jpg',
      'https://picoolio.net/images/2018/08/14/95-02c261acf17625da505.jpg',
    ],
    category: 'trousers',
    color: 'blue',
    brand: 'BOINK',
    description:
      'Aliqua consequat consectetur ullamco id occaecat pariatur magna excepteur incididunt cillum adipisicing. Velit labore ex qui dolor ea dolor excepteur culpa reprehenderit eu exercitation. Quis excepteur do excepteur fugiat ullamco.\n\nEt ipsum sunt esse exercitation. Sint mollit sunt laborum laborum eiusmod excepteur aute exercitation. Sit cupidatat do aute consectetur dolor Lorem elit ut anim. Velit eu irure ut reprehenderit incididunt velit tempor ut voluptate sint dolore ullamco. Enim occaecat elit id ut ipsum consequat occaecat ut amet velit in velit. Ullamco officia voluptate in in enim Lorem. Aute ullamco amet pariatur labore incididunt adipisicing non pariatur ullamco excepteur deserunt nostrud eiusmod.',
    added: 'Friday, April 6, 2018 2:36 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['aute', 'excepteur', 'voluptate', 'excepteur', 'qui'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff4939b2212e8e72de',
    name: 'non voluptate consectetur',
    index: 62,
    isActive: false,
    price: 38.4,
    pictures: [
      'https://image.ibb.co/fmDGQe/bluz_gra1.jpg',
      'https://image.ibb.co/diXAke/bluz_gra2.jpg',
    ],
    category: 'shirt',
    color: 'blue',
    brand: 'MAXEMIA',
    description:
      'Id pariatur eu cupidatat eu id magna mollit in. Consectetur mollit mollit comm Lorem non nulla reprehenderit aute consequat voluptate labore consequat. Elit adipisicing comm aliquip ipsum officia elit irure eu.\n\nExcepteur aliqua occaecat culpa pariatur cupidatat sunt tempor et minim non officia. Est eu velit ad do laborum consequat anim laboris non minim comm deserunt sint. Fugiat Lorem dolor qui fugiat exercitation. Ea exercitation do dolore anim deserunt eiusmod qui do laboris. Incididunt deserunt voluptate labore veniam proident et id duis in ullamco. Sunt officia aute culpa voluptate labore sunt.',
    added: 'Thursday, November 2, 2017 3:20 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['qui', 'est', 'esse', 'consectetur', 'excepteur'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff114534115e80024e',
    name: 'incididunt mollit eiusmod',
    index: 63,
    isActive: true,
    price: 90.3,
    pictures: [
      'https://picoolio.net/images/2018/08/14/89-02M.13e76664b87849772.jpg',
      'https://picoolio.net/images/2018/08/14/89-02Me9c9f90ed933728c.jpg',
      'https://picoolio.net/images/2018/08/14/89-02T14496c98a78cd347.jpg',
    ],
    category: 'trousers',
    color: 'blue',
    brand: 'NETAGY',
    description:
      'Reprehenderit enim aliquip exercitation do labore ipsum cillum id enim. Voluptate irure reprehenderit officia laborum ex. Tempor quis dolor anim consequat anim nostrud sunt est aute elit quis id culpa.\n\nPariatur adipisicing occaecat in duis esse ut cillum. Anim sint dolor exercitation est qui. Sit velit velit laborum amet do labore aute occaecat cupidatat. Velit pariatur elit qui aliquip eu fugiat adipisicing ex ipsum in esse excepteur sint velit. Labore comm exercitation ad consequat nostrud. Aute officia duis exercitation ea consectetur.',
    added: 'Thursday, June 18, 2015 6:40 PM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['et', 'esse', 'nulla', 'Lorem', 'magna'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff997bd2a2be83fce6',
    name: 'ex do Lorem',
    index: 64,
    isActive: false,
    price: 49.23,
    pictures: [
      'https://picoolio.net/images/2018/08/14/91-14526720483c7f858e.jpg',
      'https://picoolio.net/images/2018/08/14/91-14M749ab21c953d6b3b.jpg',
      'https://picoolio.net/images/2018/08/14/91-14T384daa27bb3d926d.jpg',
    ],
    category: 'trousers',
    color: 'brown',
    brand: 'AVIT',
    description:
      'Excepteur consequat ex est sint in ipsum anim non non. Id fugiat tempor eu labore eiusmod pariatur. Eiusmod esse aliquip ex exercitation cillum cillum. Mollit sint eiusmod id ad ipsum. Minim aute elit Lorem eiusmod culpa qui duis aliqua consequat laboris dolore et incididunt enim. Laborum Lorem comm anim dolor Lorem comm quis labore incididunt sit do do nulla aute.\n\nEu laborum non dolor pariatur esse laborum. Est proident dolor fugiat ad et mollit cupidatat. Tempor elit tempor fugiat eiusmod id velit duis sint duis proident nisi laboris eiusmod. Nisi sint sint officia cillum magna adipisicing officia dolore comm eu.',
    added: 'Sunday, May 27, 2018 12:02 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['sint', 'adipisicing', 'excepteur', 'tempor', 'comm'],
    orders: 0,
    discount: 10,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
  {
    id: '5b5f51ff524136655cad4d9b',
    name: 'in nulla cupidatat',
    index: 65,
    isActive: false,
    price: 47.9,
    pictures: [
      'https://picoolio.net/images/2018/08/14/64-018ef8806a5365f746.jpg',
      'https://picoolio.net/images/2018/08/14/64-01-B467e044e66b0b649.jpg',
      'https://picoolio.net/images/2018/08/14/64-01d0f4a537ad238531d.jpg',
    ],
    category: 'jacket',
    color: 'black',
    brand: 'ZOID',
    description:
      'Irure irure eiusmod ex eiusmod anim consectetur. Est sunt aliquip Lorem in ea eiusmod aliqua excepteur nisi pariatur dolor sunt. In do nisi elit sint est enim aliqua qui non ad occaecat incididunt incididunt minim. Officia aute magna sint pariatur culpa. Sunt ipsum anim laborum nostrud magna exercitation fugiat laborum eiusmod laboris adipisicing id sint duis. Ipsum quis mollit sunt tempor sunt nisi. Nostrud eiusmod sint exercitation et exercitation Lorem ut anim esse.\n\nOccaecat ad incididunt anim in magna cillum esse voluptate amet. Adipisicing Lorem quis in elit amet minim reprehenderit adipisicing comm ex ex dolore labore. Sit irure ullamco et minim nulla proident. Incididunt minim ipsum minim dolor reprehenderit ad elit sint id sunt enim proident.',
    added: 'Saturday, November 15, 2014 8:54 AM',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['incididunt', 'reprehenderit', 'laborum', 'veniam', 'sint'],
    orders: 0,
    discount: 0,
    get getDiscountedPrice() {
      return parseFloat((this.price - this.price * (this.discount / 100)).toFixed(2));
    },
  },
];

export default products;
