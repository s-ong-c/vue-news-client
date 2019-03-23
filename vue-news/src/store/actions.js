import {
    fetchNewsList,
    fetchJobsList, 
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem} from '../api/index.js'

export default{
    FETCH_NEWS({commit}){
        fetchNewsList().
            then(({data}) => {
                commit('SET_NEWS',data);
            })
            .catch(error =>{
                console.log(error)
            })
        },
        FETCH_JOBS(ctx){
            fetchJobsList().
                then(response => {
                    ctx.commit('SET_JOBS',response.data);
                })
                .catch(error => {
                    console.log(error)
                })
         },
         FETCH_ASK({commit}){
            fetchAskList()
                .then(({data}) =>{
                    commit('SET_ASK',data)
                }).catch(e=>{
                    console.log(e);
                })
         },
         FETCH_USER({commit},name){
            fetchUserInfo(name)
                .then(({data})=>{
                    commit('SET_USER',data)
                })
                .catch(e=>{
                    console.log(e);
                })
         },
         FETCH_ITEM({commit},id){
            fetchCommentItem(id)
                .then(({data})=>{
                    commit('SET_ITEM',data)
                })
                .catch(e=>{
                    console.log(e);
                })
         },
}