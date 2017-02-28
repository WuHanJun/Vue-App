<template>
    <div>
        <div class="nav">
            <ul>
                <li  onclick="window.history.go(-1)"><span class="iconfont icon-arrow-left"></span></li>
            </ul>
        </div>
        <div class="content">
            <div class="header clear"><h2><img :src="articleData.author_face" alt=""/></h2><p>热点新闻</p></div>
            <div class="cont">
                <h3>{{articleData.title}}</h3>
                <div class="time"><p>{{articleData.time | normalTime}} <span><img src="../assets/img/zan.png" alt=""/></span></p></div>
                <div class="text-box" v-html="articleData.content"></div>
            </div>
        </div>
        <div class="article-foot-btn">
            <ul>
                <li class="iconfont icon-duihuakuang"><a href="javascript:;"></a></li>
                <li class="iconfont icon-dianzanmw"><a href="javascript:;"></a></li>
                <li class="iconfont icon-aixin"><a href="javascript:;"></a></li>
                <li class="iconfont icon-zhuanfa"><a href="javascript:;"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.fetchData(this.$route.params.id);

             //发送 隐藏footer的 action
            if( this.$route.path.indexOf('article') > 0 ){
                this.$store.dispatch('hideFooter')  //dispatch的作用是提交到actions，再由actions唤醒mutations
            }
    },
    data(){
        return {
            articleData: {a:111}
        }
    },
    methods:{
        fetchData(id){
            var _this=this;
            this.$http.get('src/data/article.data').then(function(res){
                _this.articleData=res.data[id];
                console.log(res);
            }).catch(function(err){
                console.log('文章详细页面:',err);
            })
        }
    }
    }
</script>
    <style scoped>
        html,body{ overflow-x: hidden; }
        .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
        .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
        .nav ul li{ margin:0 0 0 0.38rem;}
        .nav .iconfont {font-size: .4rem; cursor: pointer}

        .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
        .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
        .header h2{ float:left; margin-right:0.18rem;}
        .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

        .content .cont{ padding:0 0.38rem; color:#494d4d;}
        .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
        .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
        .time p{ float:left;position:relative;}
        .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
        .time span img{width:100%;height:100%;}

        .cont .text-box{ font-size:0.25rem;}
        .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
        .article-foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
        .article-foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem; position: relative}
        .article-foot-btn .iconfont {font-size: .52rem}
        .article-foot-btn li {position: absolute; border-right: 1px solid #eee; color:#494d4d}
        .article-foot-btn li:first-child {left: 1rem;}
        .article-foot-btn li:last-child {right: 1rem;top:-0.1rem}
        .article-foot-btn li:nth-child(2){left: 2.3rem;top:-0.05rem}
        .article-foot-btn li:nth-child(3){left: 3.5rem;}
        
</style>



