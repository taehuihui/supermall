<template>
<!-- 用于学习better-scroll的副本 -->
  <div class="wrapperC">
        <ul>
            <button>按钮</button>
            <li>huadong1</li>
            <li>huadong2</li>
            <li>huadong3</li>
            <li>huadong4</li>
            <li>huadong5</li>
            <li>huadong6</li>
            <li>huadong7</li>
            <li>huadong8</li>
            <li>huadong9</li>
            <li>huadong10</li>
            <li>huadong11</li>
            <li>huadong12</li>
            <li>huadong13</li>
            <li>huadong14</li>
            <li>huadong15</li>
            <li>huadong16</li>
            <li>huadong17</li>
            <li>huadong18</li>
            <li>huadong19</li>
            <li>huadong20</li>
            <li>huadong21</li>
            <li>huadong22</li>
            <li>huadong23</li>
            <li>huadong24</li>
            <li>huadong25</li>
            <li>huadong26</li>
            <li>huadong27</li>
            <li>huadong28</li>
            <li>huadong29</li>
            <li>huadong30</li>
            <li>huadong31</li>
            <li>huadong32</li>
            <li>huadong33</li>
            <li>huadong34</li>
            <li>huadong35</li>
            <li>huadong36</li>
            <li>huadong37</li>
            <li>huadong38</li>
            <li>huadong39</li>
            <li>huadong40</li>
            <li>huadong41</li>
            <li>huadong42</li>
            <li>huadong43</li>
            <li>huadong44</li>
            <li>huadong45</li>
            <li>huadong46</li>
            <li>huadong47</li>
            <li>huadong48</li>
            <li>huadong49</li>
            <li>huadong50</li>
            <li>huadong51</li>
            <li>huadong52</li>
            <li>huadong53</li>
            <li>huadong54</li>
            <li>huadong55</li>
            <li>huadong56</li>
            <li>huadong57</li>
            <li>huadong58</li>
            <li>huadong59</li>
            <li>huadong60</li>
            <li>huadong61</li>
            <li>huadong62</li>
            <li>huadong63</li>
            <li>huadong64</li>
            <li>huadong65</li>
            <li>huadong66</li>
            <li>huadong67</li>
            <li>huadong68</li>
            <li>huadong69</li>
            <li>huadong70</li>
            <li>huadong71</li>
            <li>huadong72</li>
            <li>huadong73</li>
            <li>huadong74</li>
            <li>huadong75</li>
            <li>huadong76</li>
            <li>huadong77</li>
            <li>huadong78</li>
            <li>huadong79</li>
            <li>huadong80</li>
            <li>huadong81</li>
            <li>huadong82</li>
            <li>huadong83</li>
            <li>huadong84</li>
            <li>huadong85</li>
            <li>huadong86</li>
            <li>huadong87</li>
            <li>huadong88</li>
            <li>huadong89</li>
            <li>huadong90</li>
            <li>huadong91</li>
            <li>huadong92</li>
            <li>huadong93</li>
            <li>huadong94</li>
            <li>huadong95</li>
            <li>huadong96</li>
            <li>huadong97</li>
            <li>huadong98</li>
            <li>huadong99</li>
            <li>huadong100</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll=new BScroll(document.querySelector('.wrapperC'),{
      probeType:3,
      click:true,
      pullUpLoad:true
    })

    // this.scroll.on('scroll',(position)=>{
    //   // console.log(position)
    // })

    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载完成')
      this.scroll.finishPullUp()
    })
  }
}
</script>

<style scoped>
  .wrapperC{
    height: 200px;
    background-color: yellow;
    overflow: hidden;
  }
</style>