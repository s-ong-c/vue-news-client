<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
export default {
    components: {
        ListItem,
    },
    mixins: [ListMixin],
    // created() {
    //     bus.$emit('start:spinner')
    //     setTimeout(()=>{
    //           this.$store.dispatch('FETCH_NEWS')
    //           .then(()=>{
    //                bus.$emit('end:spinner')
    //           })
    //           .catch((e)=>{
    //               console.log(e);
    //           });
    //     },1000);
      
       
//    },
}
</script>

<style>

</style>
