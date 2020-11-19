import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const goodsListItemMixin={
    data(){
      return{
        itemImgListener:null
      }
    },
    mounted(){
        let refresh=debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener=()=>{
            console.log(this.$route.path)
            refresh()
        }
        this.$bus.$on('imgLoad',this.itemImgListener)
    }
}

export const backTopMixin={
  data(){
    return{
      isShow:false
    }
  },
  components:{
    BackTop
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}