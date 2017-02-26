<template>
    <div class="content mt40">
        <div class="news-list">
            <ul>
               <li v-for="(item, idx) in arrList">
                   <router-link :to="'/article/'+item.id">
                       <h2>{{item.title}}</h2>
                       <p>{{item.detail}}</p>
                   </router-link>
               </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arrList:[]
            }
        },
        created(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                this.$http.get('src/data/index.data').then((res)=>{
                    this.arrList = res.data;
                })
            }
        }
    }
</script>
<style scoped>
    .mt40{
        margin-top:40px;
    }
</style>