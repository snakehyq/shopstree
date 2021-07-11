import Toast from './Toast'
const obj = {}

obj.install = function (vue) {
    
    // 1.创建组件构造器
    const toastContrustor = vue.extend(Toast)
    // 2.创建组件对象，通过new的构造方法
    const toast = new toastContrustor()
    // 3.把这个组件对象挂载在某个元素上
    toast.$mount(document.createElement('div'))
    // 4.此时toast.$el就是我们上面创建的东西
    //再添加到body内
    document.body.appendChild(toast.$el)
    // 把toast对象添加到vue中
    vue.prototype.$Toast = toast
}

export default obj