<template>
    <div id="mt40" class="content router-view">
        <div class="news-list">
            <ul>
                <li v-for="(item,idx) in arrList">
                    <router-link to="/article/">
                       <h2>{{item.id}}{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'follow',
        data(){
            return {
                arrList: []
            }
        },
        created(){
            this.fetchData()
        },
        methods: {
            fetchData() {
                var self = this;
                this.$http.get('src/data/follow.data').then(function(res){
                    self.arrList = res.data
                }).catch(function (err) {
                    console.log(err);
                        })
            }
        }
    }
</script>
<style>
    #mt40 {
        margin-top: 40px
    }
</style>