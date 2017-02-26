<template>
    <div class="content router-view">
        <div class="banner">
            <ul class="clearfix">
                <li><img src="src/assets/images/news1.jpg" alt=""/>
                    <div class="text-box">
                        <h2>“地毯式轰炸”查漏补缺 实拍河南驻马店高考百日画面</h2>
                        <p>百度新闻 / 文</p>
                    </div>
                </li>
                <li><img src="src/assets/images/news2.jpg" alt=""/>
                    <div class="text-box">
                        <h2>苏州现山寨“伦敦塔桥” 四座塔楼气势恢宏</h2>
                        <p>百度新闻 / 文</p>
                    </div>
                </li>
                <li><img src="src/assets/images/news3.jpg" alt=""/>
                    <div class="text-box">
                        <h2>邓超揭秘为何白了头， 刘诗诗被赞有两条事业线</h2>
                        <p>百度新闻 / 文</p>
                    </div>
                </li>
                <li><img src="src/assets/images/news4.jpg" alt=""/>
                    <div class="text-box">
                        <h2>木狼双雄难敌火箭八人上双 火箭142-130森林狼</h2>
                        <p>百度新闻 / 文</p>
                    </div>
                </li>
            </ul>
            <ol>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
</template>
<script>
    export default {
        mounted(){
        this.fnSlider();
    },
    watch:{
        // '$route':function(){
        // 	alert(1);
        // }
    },
    methods:{
        fnSlider(){
            $(function (){
                var mySwipe=new Swipe($('.banner')[0],{
                    auto:2000,
                    continuous:true,
                    stopPropation:true,
                    callback:function (index,element){
                        $('.banner ol li').removeClass('active');
                        $('.banner ol li').eq(index).addClass('active');
                    }
                });
            });
        }
    }
    }
</script>