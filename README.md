# shopstree

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 项目笔记
## 项目初始化
### 划分目录结构
先把主要目录结构创建好，src内放的是源码，我们主要划分src里面的目录结构
assets -> 资源，放相关资源、图片、css代码
assets下创建了img和css两个文件夹
components -> 组件文件夹 放共用组件，会在多个页面上用到的组件
components -> common 文件夹 会放其他项目中都会使用的组件，完全公共，在其他项目都能用
components -> content 文件夹 和当前业务相关的公共组件
views -> 放每个页面主视图的组件
router -> 路由文件夹
store -> Vuex文件夹
network -> 网络请求文件夹
common -> 在src内的公共文件夹，放共用的js文件（抽出常量等操作）
common -> const.js 公共常量js
common -> utils.js 公共方法js
### 对不同浏览器的css样式统一化
创建文件夹之后
使用**normalize.css**，在github上下载，对css内的一些标签进行初始化操作。很多前端项目里面都用得到，直接引入就好了
引入了normalize.css和base.css，通过`@import`在App.vue内引入
### vue.config.js 配置路径别名
脚手架3没有base.config文件，如果想配置要在文件夹内自己创建js文件`vue.config.js`会合并公共配置。默认别名"@"对应src,router和store可以不要对应别名了，通过`$store`和`$router`就能拿到。
````javascript
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'views': '@/views'
      }
    }
  }
}
````
配置好了之后直接写别名就能使用了
### .editorconfig文件 对代码风格统一
对整个组代码风格统一，多人开发的缩进统一，方便维护，脚手架3不会默认创建了，我们可以把原来风格文件拷贝进来。
## 项目开发
### 首页
#### tabbar和项目模块划分
项目从底部的tabbar开始，创建后我们的模块就划分好了。我们之前写过的，就直接拷贝过来在`component->common` 文件加内  这个tabbar的组件是完全独立的，可以直接拿过来用，所以放在common内，但是在content文件夹内的mainTabbar是和我们当前业务有关，所以在`content`文件夹
这里我们要使用我们之前定义的别名来设置图片的位置，在dom内使用别名要加上`~`标志我们在APP内引入mainTabbarcon
#### 首页轮播图
##### 拿到数据
封装网络模块，并且把首页所有的请求都封装到network -> home.js里面
因为首页组件不会只有1次网络请求，我们把它的请求都封装起来之后，可以对首页所有的网络请求都进行管理，让程序代码耦合性更小，方便我们后期管理。
要用生命周期函数`created（）`，当页面创建完成后就要请求数据
##### 轮播实现
用之前封装好的组件，或者用之前用过的**vue-awesome-swiper**
#### 首页推荐栏
通过父子组件传值方式，拿到父组件获得的数据，并且`v-for`展示出来
#### FeatureView 组件
在这个案例里面这个组件是一整张图片，我们还是封装到一个组件之中再去使用的话，后期管理也会方便很多。但是我们这个也是可以点击的组件，里面要用a标签嵌套img，
#### tabcontrol 组件
我们封装一个组件，在这个业务代码中间会经常使用到，所以我们放在`components->content`里面，方便在这个业务代码中多次使用
我们这里在多个地方使用，只是文字的区别，所以我们不建议使用插槽`slot`，我们这里用数组传参就好了。然后我们根据`v-for`来循环数组，就可以添加多个数据
还要调整演示
我们还要有悬浮功能，可以在home.vue中间添加，就是只在home中实现这个效果，其他组件是不会有的
#### 商品列表页
1. 数据有分为3类，要根据我们选择的不同的标签来切换数据内容，但是保存数据的时候是都保存的。用一个变量存储所有的商品数据，设计了一个goods的设计模型，page是当前显示到第几页，list是商品数据
2. 数据的请求和保存
要封装一个新的网络请求函数在`home.js`里面，这次的请求需要传递参数，获取了之后要把参数保存起来。不过我们这里都写在了created生命周期函数里面，我们可以包装进methods，管理起来更方便，那么created里面我就只请求某个具体方法，这个方法是写在methods里面的。
把数组直接存入数组，我们可以通过for循环，遍历之后依次push。
也可通过`push(...数组名)`的方法，解析数组，并且依次传入数组。因为push可以依次传入多个参数，并且依次进行push操作，这里`...`是把我们传入的数组解构了之后传入，`push([10,20,30])`直接写数组是不可以的
3. 数据的展示
整个页面是个组件，然后遍历`v-for`的方式塞进去小组件。这个组件也会在更多地方使用，所以我们放在`components->content`里面，方便在这个业务代码中多次使用
#### 加入Better-Scroll
重构滚动
我们之前使用的都是原生滚动，原理是内容本身超过了整个窗口，在移动端使用非常不流畅，早期使用`iscroll`，现在使用better-scroll，是基于`iscroll`的思想，通过npm安装，去github上下源码也可以
##### bs的简单使用方法
````javascript
<body>
  <div>
    <div class="content">
      <!-- 外面一定要有个包裹的，里面只能有一个元素，但是这个元素里面可以放多个 -->
      <ul>
        <button class="btn">按钮</button>
        <li>1列表数据1</li>
        <li>2列表数据1</li>
        <li>3列表数据1</li>
        <li>4列表数据1</li>
      </ul>
    </div>
  </div>
  <script src="./bscroll.js"></script>
  <!-- 引用bs -->
  <script>
    //这里传入第二个参数，是一个对象
    //创建这个实例
    const bscroll = new BScroll('.content', {
      probeType: 3,
      //probeType表示侦测属性，
      //我们这里填0/1都表示不侦测，默认是0，传入1表示明确不侦测，
      //2 表示侦测，是在手指的滚动中侦测，在手指离开后的惯性运动时不侦测的
      //3 表示只要是滚动就侦测
      click: true,
      //在bs里面有按钮的情况，是不能监听到点击的，我们需要添加这个属性才能进行监听
      //是用来限制div/span这种标签的 button是不受限制的
      pullUpLoad: true
      //监听滚动到底部的属性,可传入布尔值或者对象
    })
    //监听实时滚动的位置 默认情况下是不能实时监听滚动位置的，要在new的时候传入参数
    bscroll.on('scroll', (position) => {
      // console.log(position);
    })
    bscroll.on('pullingUp', () => {
      console.log('底部加载更多');
      //之后可以发送网络请求，请求第二页的数据
      //这个事件只能做一次的监听，我们要先发送网络请求（请求更多页数据），等请求完成并且展示数据之后
      setTimeout(() => {
        bscroll.finishPullUp()
      }, 2000);
      //表示这次上拉加载做完了，这个函数调用了之后才能进行下次一的加载更多，这个方法一定要调用

    })
    document.querySelector('.btn').addEventListener('click', function () {
      console.log('123');
    })
  </script>
</body>
````
##### 项目中封装和使用
我们还是要进行封装，以防bs日后不维护了，方便更换，减少对一个第三方模块的耦合程度。模块封装放在`components->common`内，封装好了之后可以在其他项目中用。
#### backtop功能
因为这个按钮在不同页面存在的位置都差不多，我们可以在组件里面直接设置好，之后直接用就可以了
组件是不能直接监听点击事件的`.native`需要添加这个修饰符，就可以**监听组件元素的原生事件**，如下`@click.native="backTop"`。
`this.$refs.scroll.scroll;`,是通过`this.$refs.scroll`拿到对象，然后访问scroll对象，使用`scrollTo`方法，就可以直接返回了，同时还可以传入第三个参数`this.$refs.scroll.scroll.scrollTo(0, 0, 1000);`代表多少毫秒返回顶部
我们还可以在`scroll.vue`内封装滚动函数，之后调用起来更方便
backtop还有要显示隐藏的功能，要使用监听滚动，来显示模块。
#### 上拉加载
使用bs监听上拉，需要注意`finishPullUp`和`refresh`的使用方法
**BUG解决**
在首页中，会出现**滚动到一半但是不能上拉的情况，过一下就能上拉了**，是因为bs根据内容决定有多少可以滚动的区域（遍历所有子组件，计算高度，知道可滚动区域有多高），在我们首页的案例中，我们的图片是异步加载的，加载成功后才会填充进来，这个时候就比bs之前计算的高度高了，bs这个时候不知道我们的高度增加了。
*bs中的scrollerHeight*就是记录当前可以滚动的区域，我们`图片加载完的高度>之前计算的高度`，我们执行一次`refresh()`就会根据最新的子组件来重新计算一个高度。
这个`refresh()`是要在每一张图片加载完成就执行一次，我们要如何执行？
原生js里面我们通过`img.onload=function()`来监听
vue里面直接给我们封装了事件，使用`@load=“方法”`
我们通过vuex的方式把每次图片加载完成的状态传递给`home.vue`，让home内一个函数监听vuex内的一个变量的变化，变化了就`refresh`一次
还可以使用**事件总线 BUS**来实现这个功能。
*这里￥代表了美元符号*
默认中，我们程序内部是没有一个bus的，我们需要手动创建`Vue.prototype.$bus = new Vue`,通过原型的方式来给$bus赋值，vue就能完成总线的功能
这里我们先用事件总线来实现功能，` this.￥bus.￥emit('itemImageLoad')`向总线发射事件，在created内监听这个事件，`this.￥bus.￥on("itemImageLoad", () => {});`用$on方法来接受这个事件总线，在这个函数中我们使用`refresh`就能解决这个BUG了
**可以优化的选项**
我们这个refresh的执行频率有点高，我们希望每秒只执行1次，需要进行**防抖动操作（debounce）/节流（throttle）**，在每次执行完成后等待一个时间。
封装防抖函数，定时器类型，单位时间内没有后续操作的时候，就把这个函数在内部执行一次。
防抖函数起作用的过程，如果直接执行`refresh`那么就会执行30次，此时通过`debounce`，将`this.$refs.scroll.refresh`（不带小括号）函数传入`debounce`中，生成一个新的函数。
1. 第一次进入函数，我们timer是null，那么程序就会`setTimeout`延迟执行，这里`func.apply(this, args);` func就是我们传递进来的函数
2. 在延迟的过程中，我们也许就会进行第二次函数调用，此时调用的时候timer不为空，程序会清空timer，并且重复上一步
3. 第30次进入程序的时候，会重新`setTimeout`，并且等待，因为没有下一次，就会执行我们传入的这个函数了，那么最终这个函数只会执行1次
````javascript
    debounce(func, delay) {
      //func是传递进来的函数，time是要等待多久 func是我们要消除抖动的函数
      let timer = null;
      //记录有没有定时器
      return function(...args) {
        //...表示不止传入一个参数
        //返回一个函数，
        if (timer) {
          timer = clearTimeout();
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }
````
#### tabcontrol 吸顶效果
因为要考虑到兼容性，所以一般不用sticky属性
1. 知道我们滚动到多少时开始有吸顶效果
  获取到offset.top的数据，并且保存，在mounted内`this.tabOffsetTop = this.$refs.tabControl.offsettop;`可以拿到数据，但是此时我们对应的是组件，组件是没有offsettop的，我们应该拿组件内的元素。
  所有组件内的元素都有\$el，是用户获取组件内的元素的`this.tabOffsetTop = this.refs.tabControl.el.offsettop`所以最后是这种写法
  我们挂载的时候，还有可能图片没有加载完成的，要等图片都加载完成后才能去拿offsettop，是不能在`mounted`内来获取这个值，我们要监听图片加载完成。一般情况下轮播图还是加载比较慢的，轮播图加载完了其他基本上就加载完成了
  我们只需要拿到1次的值，用`isLoad`来记录状态，如果发送了就不会继续发送了。**注意和消除抖动的区别**
2. 当滚动到某个位置时，动态改变样式
  比较滚动的当前位置，和我们获得的数值进行对比，
  会有几个**bug**，如果我们直接给tabControl设置fixed属性，会脱标，下面的内容会上移，并且这个元素也会消失了，和bs内部实现方法有关，会跟随滚动一起上去了。
**如何解决？**
我们多复制了一份tabControl放在bs的盒子外面，这个时候会被nav-bar覆盖上，还要让这个复制的tabControl设置一些样式，让它盖在最上边。我们让它滚动到下面一个tabControl的时候显示出来，替代原来的进行显示，用我们之前算的`isTabFixed`来操作是否显示即可
还要让这两个组件的选中项要保持一致
````javascript
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenyType = "pop";
          break;
        case 1:
          this.currenyType = "new";
          break;
        case 2:
          this.currenyType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
````
给两个不同的ref的值，并且分别赋值。
#### 切换tab栏保存当前浏览位置
1. 首页home.vue不要随意销毁
因为路由切换的时候，当页面切换的时候，首页就会被销毁`desrtoyed()`这个生命周期函数会被执行，我们再点进来的时候，首页会被重新创建。
我们要把路由切换的页面用`keep-alive`包裹起来，这样home就不会被销毁
2. 保持原来的位置
离开时保存一个位置信息，然后回到页面时，将位置设置为原来的位置信息即可。
`activated`和`deactivated`两个生命周期函数，在进入页面和离开页面的时候进行操作
````javascript
 activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh(); //最好刷新一次，避免错误
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y; //存下当前的值
  },
````
### 详情页
点击某个商品的时候，获取商品id，请求商品id对应的数据，并且展示
##### 返回首页位置保持
从详情页回到首页的时候，要回到之前跳转的首页位置
我们用了keep-alive的时候，首页的情况应该是保留状态的，不会每次都创建新的页面
bs和我们用的轮播图的 translate是重合的，如果我们快速切回来的时候，位置不会变，但是如果轮播图滚动之后再回来，就会出现回到顶部的情况
1. 可以在离开和进入home的时候，停止/打开轮播图
我们封装的函数中有开始和停止函数
但是这样的做法，如果出现在多个轮播图页面，我们要停止的东西太多了
2. 在离开的时候，记录下当前停留的位置，回来的时候，设置滚动到当前位置

这里我们用bs的1.15版本有一点问题，所以我们切换到1.13.2版本，这样从详情页回到首页就不会回到顶部了
##### 数据重构思想
有的时候服务器传过来的数据比较繁杂，要从多个地方拿到数据，并且放在一起展示，这里我们在network中创造类，并且对服务器拿过来的数组重新整理&封装，这样使用起来更方便 要有先取出再整合的思想
````javascript
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
````
##### mixin 混入技术
我们这里home和detail两个组件的`mounted()`的代码基本相同，我们要用mixin技术，减少组件间重复代码。
##### 详情页标题和内容联动
一、点击最上面的标签跳转到指定位置
tab组件发出我们点击的index值，详情页根据index值来跳转到不同的位置
1. 不能直接放在created内，因为获取不到元素
2. mounted也不可以，图片数据还没有过来，是个错误数值
3. 在获取数据的回调中也不可以，因为此时dom还没有渲染完，这个时候只有数据
4. $nextTick也不可以，此时图片的告诉还没计算
5. 只有放在图片加载完成的函数中，才是正确的


除了代码中的做法 还可以把代码放在`created()`中，但是此时我们要使用`this.$nextTick()`，这个函数要求传入回调函数
````javascript
this.$nextTick(()=>{
    this.topYs.push(0);
    this.topYs.push(this.$refs.params.$el.offsetTop);
    this.topYs.push(this.$refs.comment.$el.offsetTop);
    this.topYs.push(this.$refs.recommend.$el.offsetTop);
    console.log(this.topYs);
})
````
会保证前面更新完成之后，就执行一次
不过以上的两种方法都会出现图片未加载完全，获取的是当前dom的值，就会有数据的差别，我们这里最好是放在图片加载完成的函数内进行获取
````javascript
 imageLoad() {
      this.$refs.scroll.scroll.refresh();
      this.topYs.push(0);
      this.topYs.push(this.$refs.params.$el.offsetTop);
      this.topYs.push(this.$refs.comment.$el.offsetTop);
      this.topYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.topYs);
    },
````
看我们的`detailGoodsinfo`组件中，每次图片加载完成之后这个函数才会执行一次，所以这个代码能够保证获取的一定是正确的数值
二、滚动到内容显示对应标题
我们通过bs可以获取到当前滚动的位置数值，并且和我们之前获得的`topYs`进行对比，这个时候来赋值给`currentIndex`就可以获取到当前滚动位置对应的tab栏的index值
通过ref获取到我们tab组件，并且直接赋值给他，就能完成联动效果`this.$refs.detailNav.currentindex = this.currentIndex;`
**复杂判断条件优化**
````javascript
 for (let i = 0; i < this.topYs.length; i++) {
        if (
          (this.currentIndex !== i &&
            i < this.topYs.length - 1 &&
            positionY > this.topYs[i] &&
            positionY < this.topYs[i + 1]) ||
          (this.currentIndex !== i &&
            i === this.topYs.length - 1 &&
            positionY > this.topYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentindex = this.currentIndex;
        }
      }
````
*判断逻辑*
条件一：`this.currentIndex !== i` 防止赋值的过程过于频繁
条件二：`i < this.topYs.length - 1 &&positionY > this.topYs[i] &&positionY < this.topYs[i + 1]`  
判断在0和某个数字之间
条件三：`i === this.topYs.length - 1 &&positionY > this.topYs[i]`
判断是不是最后一个数，大于等于`i === this.topYs.length - 1`
判断了一个非常复杂的条件，我们需要进行优化
我们要在原来数组的最后一位添加一个最大值`Number.MAX_VALUE`，然后就变成4个区间的对比
````javascript
 for (let i = 0; i < this.topYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.topYs[i] && positionY < this.topYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentindex = this.currentIndex;
        }
      }
````
这样就简化了代码，并且能够提高性能，但是这个数值有可能会多占用一点空间**用空间换时间**
##### 返回顶部模块混入
要注意在methods的函数是不会和生命周期函数一样合并的，这里要注意抽取
### 购物车
#### getters里的方法转成计算属性
`import { mapGetters } from "vuex";` 使用这个方法结构getters
在计算属性里面写`...mapGetters(['cartLength'])`会把getters里面的方法都解构出来，通过我们设定的方法名称，解构出来之后用法就和之前一样了
**另一种用法**
计算属性里面的名字和getters里面的不一样
`...mapGetters({length:'cartLength'})` key是我们自设的值，后面的值就是getters里面的方法
### Toast功能封装
我们要在加入购物车或者其他时候用到这个Toast弹窗提醒功能
首先要监听到加入到购物车的事件，这里我们要把时间监听写到detail的addcart()函数中，因为dispatch可以直接返回Promise对象，这里我们希望是操作进行完了之后才进行处理，我们要进入到vuex->actions里面写
````javascript
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //判断之前商品是不是之前添加过 使用数组的find方法
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //如果这个东西
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('商品数量+1')
      } else {
        context.commit('addToCart', payload)
        resolve('添加新商品')
      }
    })
  }
//在detail里面就可以用then获取到我们resolve传递的数据了
 this.$store.dispatch("addCart", product).then(res=>console.log(res));
````
这个方法也可以映射，和getters的映射方法一样，通过**mapActions**

#### 普通封装（组件方式）
按照组件的书写方式，添加一个新的组件，通过之前的Promise对象拿到需要显示的文字，并且切换是否显示。
但是这样的封装方式，在其他组件内的使用会很麻烦。导入->注册->传参等都要重新写，所以就会有另外一种封装方式
#### 插件方式封装
在toast文件夹内添加index.js文件
要在main.js里面导入这个插件`import toast from 'components/common/toast'`并且安装`Vue.use(toast)`此时，一开始运行的时候就会执行toast内的install函数
可以在install里面准备所有要准备的东西，同时还会传递vue过来。
`Vue.prototype.$toast=对象`可以通过原型来给整个vue添加toast，这里的对象，最好就是我们写好的组件
首先要导入我们写好的toast组件
这里我们这样添加的话，组件中的模板是不能被添加过去的，需要在index内添加上我买的组件模板
````javascript
import Toast from './Toast'
const obj = {}
obj.install = function (Vue) {
  //创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //通过new的方法，根据组件构造器，创建出一个组件对象
  const toast = new toastContrustor()
  //将组件对象手动挂载到某个元素上 这里的方法就算main内的方法
  //挂载到一个我们创建的div上
  toast.$mount(document.createElement('div'))
  //此时toast.$el就是我们上面创建的东西
  //再添加到body内
  document.body.appendChild(toast.$el)
  //添加Toast的对象
  Vue.prototype.$Toast = toast
}
export default obj
````
这样我们就只要在组件中写入一个方法，之后直接调用这个方法，就可以了
### 移动端300ms延迟
使用fastclick插件，减少在移动端点击300ms延迟
#### 如何使用fastclick
使用简单只需要3步
`npm install fastclick --save`通过npm安装
`import FastClick from 'fastclick'`导入
`FastClick.attach(doucment.body)`使用
### 图片懒加载 vue-lazyload
图片用到的时候才加载，即需要显示在屏幕上的时候才显示图片，我们现在是一开始就加载了30条图片，会浪费流量影响性能。
**不一定是每个方案都要使用**
#### 如何使用
使用vue-lazyload库
`npm install vue-lazyload --save`通过npm安装
`import VueLazyLoad from 'vue-lazyload'`导入
`Vue.use(VueLazyLoad)`安装
`:src="showImage"`修改要用到的地方修改成`v-lazy="showImage"`
#### 更多设置
在use的时候能够传入一个对象，配置更多设置属性，比如导入占位的图片
````javascript
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
````
### VW单位的使用
之前都用的是rem单位，现在很多浏览器都支持vw了，比rem更加合适，`"1vw ＝ 1/100th viewport width"`也比rem需要设置html的font-size之后再进行换算更方便
#### 使用postcss-px-to-viewport插件转换单位
在webpack内直接安装，在打包的时候把px单位转换成vw单位。
`npm install postcss-px-to-viewport --save-dev`安装
配置`postcss.config.js`
````javascript
module.exports = {
  plugins: {
    "autoprefixer": {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, //配置视口宽度，对应设计稿宽度，750对应标准设计稿（对应Retina屏幕），
      viewportHeight: 667, //配置视口高度，这里也可以不配置，按照我们给的宽高来转成vw，来适配不同的屏幕，最后这个数值还是和设计稿来比的
      unitPrecision: 3, //转成vw的时候，小数点可以保留几位，这里是保留5位小数
      viewportUnit: "vw", //可以按vw、vh来计算，一般是用vw
      selectorBlackList: [],
      // 指定不转换为视窗单位的类，可以自定义，把不需要转换的类可以放进来，比如这里的tab-bar不需要转换写上去就好了。
      //这里我们还可以添加一个ignore的类，给不需要转换的地方添加上ignore的类，就可以实现功能了
      minPixelValue: 1,  //最小转换单位，≤1px的就不转换了
      mediaQuery: false //是否媒体查询，这里用vw一般就是false，如果要用媒体查询，记得设置为true
    }
  }
}
````
这里可以自己添加`postcss.config.js`文件，并且把package里面的postcss删除，这样才能生效
## 项目部署
简单了解部署流程，一般都是租借服务器，租的服务器可以装windows/linux
打包后把dist文件夹放到服务器上就可以了
可以将自己的电脑作为服务器
### nginx在windows下的部署
在官网上下载，使用`Stable version`目前最稳定版本
在windows下解压即可启动，解压路径最好不要有中文
打开`localhost`出现欢迎界面就是启动成功了
把自己打包的文件夹放进nginx的根文件夹内，或者是覆盖进html文件夹
**即可实现简单部署**
还可以修改配置`nginx.conf`文件，去配置`location`去找什么文件夹对应的什么文件
### nginx在linux下的部署
通过ssh登录到远程主机上，使用yum在centos上安装nginx
windows没有自带ssh（Mac 自带），可以使用一些软件来实现
`Winscp`连接远程主机文件数据，进行编辑添加等操作

