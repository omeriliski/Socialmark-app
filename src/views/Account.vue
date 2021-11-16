<template>
    <div>
        <AppHeader/>
        <div class="flex flex-row">
            <SideBar/>
            <component :is="$route.meta.componentName" :items="bookmarkList"/>
            <!-- {{$log("route",$route)}} -->
            <!-- <AppBookmarkList v-if="bookmarkList.length>0" :items="bookmarkList"/>
            <div v-else>Bookmark bulunamadi...</div> -->
        </div>
    </div>
</template>

<script>
import AppHeader from "@/components/shared/appHeader";
import SideBar from "@/components/Account/sideBar";
export default {
    components:{
        SideBar,
        AppHeader
    },
    data() {
        return {
            bookmarkList:[]
        }
    },
    
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
            console.log(res);
            this.bookmarkList=res.data;
        })
    },
}
</script>