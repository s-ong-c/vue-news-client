import bus from '../utils/bus.js'
export default {
    // 재사용할 컴포넌트 옵션

    created() {
        bus.$emit('start:spinner')
        setTimeout(()=>{
              this.$store.dispatch('FETCH_LIST',this.$route.name)
              .then(()=>{
                   bus.$emit('end:spinner')
              })
              .catch((e)=>{
                  console.log(e);
              });
        },1000);
    }
}
// hoc
// export default function(){

// }