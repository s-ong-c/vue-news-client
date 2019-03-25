<template>
        <div class="user-contanier">
            <div>
               <i class="fas fa-user"/>
            </div>
            <div class="user-description">
                <div>  {{info.id}}</div>
                <!-- <router-link :to="`/user/${userInfo.user}`">
                  
                </router-link> -->
                <div class="time">
                    {{ info.created}}
                </div>
            </div> 
        </div>
</template>

<script>
export default {
    props:{
        info: {}
    },
    computed: {
         userInfo(){
             return this.$store.state.user
         }
    },
}
</script>

<style scpoed>
.user-contanier{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size:0.8rem;
}
</style>

