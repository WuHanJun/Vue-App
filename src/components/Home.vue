<template>
    <div id="home">
        <div class="content">
            <Slider></Slider>
            <div class="news-list">
                <ul>
                    <li v-for="(item,index) in arrList">
                        <router-link :to="'/article/'+item.id">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Slider from './Slider.vue'

    export default {
        data(){
            return {
                arrList:[]
            }
        },
        components:{
            Slider
        },
        created(){
            this.fetchData();
        },

        methods: {
            fetchData() {  //为什么这个路径就是对的？
                var self = this;
                this.$http.get('src/data/index.data').then(function(res){
                    //Array.prototype.push.call(self.arrList,1);  为什么这个就不行？
                    self.arrList = res.data
                }).catch(function(err){
                    console.log(err)
                })
            }
        }
    }
</script>
<style scoped>
    @import  '../assets/css/index.css';
</style>