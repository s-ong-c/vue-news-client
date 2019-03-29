import {
    fetchNewsList,
    fetchJobsList, 
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem} from '../api/index.js'

export default{
    // promise
    // FETCH_NEWS({commit}){
    //     return  fetchNewsList().
    //         then(({data}) => {
    //             commit('SET_NEWS',data);
    //         })
    //         .catch(error =>{
    //             console.log(error)
    //         })
    //     },

    //async
    async FETCH_NEWS(ctx){
         const response = await fetchNewsList();
         ctx.commit('SET_NEWS',response.data);

         return response
        },

        // promise
        // FETCH_JOBS(ctx){
        //     return fetchJobsList().
        //         then(response => {
        //             ctx.commit('SET_JOBS',response.data);
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        //  },
         //async
         async FETCH_JOBS(ctx){
            try{
                const response = await fetchJobsList();
                ctx.commit('SET_JOBS',response.data);
                return response;     
            }catch(error){
                console.log(error)
            }
         },
         // promise
        //  FETCH_ASK({commit}){
        //     return  fetchAskList()
        //         .then(({data}) =>{
        //             commit('SET_ASK',data)
        //         }).catch(e=>{
        //             console.log(e);
        //         })
        //  },
        //async
        async FETCH_ASK(ctx){
            const response = await fetchAskList();
            ctx.commit('SET_ASK',response.data);

            return response;
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
         async  FETCH_LIST( {commit},pageName){
             try{
                const response = await fetchList(pageName);
                commit('SET_LIST', response.data)
                return response
             }
             catch(error){
                 console.log(error);
             }
         }
}