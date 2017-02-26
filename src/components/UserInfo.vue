<template>
    <div class="content mt40">
        <div class="header">
            <h2><img src="src/assets/img/headimg.png" alt=""/></h2>
            <div class="user-box">
                <router-link to="/userLogin">登录</router-link>
                <router-link to="/userReg">注册</router-link>
            </div>
            <ul class="clear">
                <li>
                    <span>0</span>
                    <p>关注</p>
                </li>
                <li>
                    <span>0</span>
                    <p class="end">粉丝</p>
                </li>
            </ul>
        </div>
        <div class="docList">
            <ul>
                <li class="gk-text">
                   <i class="iconfont icon-shoucang"></i>
                    <p>我的收藏</p>
                    <span class="iconfont icon-iconfontxiangyou"></span>
                    <span>0</span>
                </li>
                <li class="mm-text">
                    <i class="iconfont icon-shanchu"></i>
                    <p>清除缓存</p>
                    <span class="iconfont icon-iconfontxiangyou"></span>
                    <span>0</span>
                </li>
                <li class="cg-text">
                    <i class="iconfont icon-dafen"></i>
                    <p>为我打分</p>
                    <span class="iconfont icon-iconfontxiangyou"></span>
                    <span>0</span>
                </li>
                <li class="sc-text">
                   <i class="iconfont icon-fenxiang"></i>
                    <p>分享</p>
                    <span class="iconfont icon-iconfontxiangyou"></span>
                    <span>0</span>
                </li>
                <li class="my_cz">
                    <i class="iconfont icon-shezhi"></i>
                    <p>设置</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        // watch:{
        // 	$route(to){
        // 		//console.log(to.path);
        // 		if(to.path=='/user-info'){
        // 			//console.log(this.$store.state);
        // 			this.$store.dispatch('SHOW_HEAD_FAIL');
        // 		}
        // 	}
        // }
    }
</script>
<style scoped>

</style>