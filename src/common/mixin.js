import TopBack from 'components/content/topBack/TopBack'
import { distance } from 'common/const'
export const  topBackMixin = {
    components: {
        TopBack,
    },
    data() {
        return {
            // 回到顶部的backTop的显示和隐藏
            isShowBackTop: false
        }
    },
    methods: {
        backShowTop(positionY) {
            this.isShowBackTop = positionY > distance
    
        },
        // 回到顶部
        backClick() {
            this.$refs.scroll.scrollTo(0,0)
        }
    }
    
}