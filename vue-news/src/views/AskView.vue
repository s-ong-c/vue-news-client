<template>
    <div>
        <list-item></list-item>
     </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState, mapGetters} from 'vuex'
import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
export default {
    components: {
        ListItem,
    },
    // mounted() {
    //     bus.$emit('end:spinner')
    // },
    mixins: [ListMixin],
//   created() {
//         bus.$emit('start:spinner')
//         setTimeout(()=>{
//               this.$store.dispatch('FETCH_ASK')
//               .then(()=>{
//                    bus.$emit('end:spinner')
//               })
//               .catch((e)=>{
//                   console.log(e);
//               });
//         },1000);
//   }
    //  computed: {
    //      ...mapGetters([
    //         'fetchedAsk'
    //      ])
    // },
    // created() {
    //     this.$store.dispatch('FETCH_ASK')
    // },
}
</script>

<style >


</style>