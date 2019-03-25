<template>
        <div class="user-contanier">
            <div>
               <i class="fas fa-user"/>
            </div>
            <div class="user-description">
                <slot name="username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                 <slot name="time">
                      <!-- 상위 컴포넌트에서 정의할 영역 -->
                 </slot>
                </div>
                <slot name="karma">
                       <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div> 
        </div>
</template>
<script>
export default {
    props:{
        info: {}
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

