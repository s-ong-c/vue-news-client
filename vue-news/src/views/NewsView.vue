<template>
    <div>
        <div v-for="user in this.$store.state.news">{{user.title}}</div>
    </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'
import {actions} from '../store/index.js'
export default {
    data(){
        return{
            users:[]
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    //    fetchNewsList()
    //         .then(response =>this.users = response.data)
    //         .catch(error=> console.log(error))
    },
}
</script>

<style>

</style>
