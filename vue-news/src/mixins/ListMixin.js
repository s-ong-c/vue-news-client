import bus from '../utils/bus.js'
export default {
    // 재사용할 컴포넌트 옵션

    mounted(){
        bus.$emit('end:spinner')
    },
    created() {
        // bus.$emit('start:spinner')
        // //#1
        // this.$store.dispatch('FETCH_LIST',this.$route.name)
        //       .then(()=>{
        //            bus.$emit('end:spinner')
        //       })
        //       .catch((e)=>{
        //           console.log(e);
        //       });
        // setTimeout(()=>{
        //       this.$store.dispatch('FETCH_LIST',this.$route.name)
        //       .then(()=>{
        //            bus.$emit('end:spinner')
        //       })
        //       .catch((e)=>{
        //           console.log(e);
        //       });
        // },1000);
    }
}
// hoc
// export default function(){

// }