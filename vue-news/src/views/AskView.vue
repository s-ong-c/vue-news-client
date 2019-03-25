<template>
    <div>
        <list-item></list-item>
     </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState, mapGetters} from 'vuex'
export default {
    components: {
        ListItem,
    },

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