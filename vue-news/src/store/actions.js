import {
    fetchNewsList,
    fetchJobsList, 
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem} from '../api/index.js'

export default{
    FETCH_NEWS({commit}){
        return  fetchNewsList().
            then(({data}) => {
                commit('SET_NEWS',data);
            })
            .catch(error =>{
                console.log(error)
            })
        },
        FETCH_JOBS(ctx){
            return fetchJobsList().
                then(response => {
                    ctx.commit('SET_JOBS',response.data);
                })
                .catch(error => {
                    console.log(error)
                })
         },
         FETCH_ASK({commit}){
            return  fetchAskList()
                .then(({data}) =>{
                    commit('SET_ASK',data)
                }).catch(e=>{
                    console.log(e);
                })
         },
         FETCH_USER({commit},name){
            return fetchUserInfo(name)
                .then(({data})=>{
                    commit('SET_USER',data)
                })
                .catch(e=>{
                    console.log(e);
                })
         },
         FETCH_ITEM({commit},id){
         return fetchCommentItem(id)
                .then(({data})=>{
                    commit('SET_ITEM',data)
                })
                .catch(e=>{
                    console.log(e);
                })
         },
         //#2
         FETCH_LIST( {commit},pageName){
             //#3
          return fetchList(pageName)
                .then( data=>
                //#4
                     commit('SET_LIST', data.data))
                     return data.data
                .catch(e=>{
                    console.log(e);
                })
         },
}