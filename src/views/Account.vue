<template>
    <div>
        <AppHeader/>
        <div class="flex flex-row">
            <SideBar/>
            <div class="socket">
                <input type="text" @keydown.enter="SEND_MESSAGE">
            </div>
            <!-- <component :is="$route.meta.componentName" :items="bookmarkList"/> -->
            <!-- {{$log("route",$route)}} -->
            <!-- <AppBookmarkList v-if="bookmarkList.length>0" :items="bookmarkList"/>
            <div v-else>Bookmark bulunamadi...</div> -->
        </div>
    </div>
</template>

<script>
import AppHeader from "@/components/shared/appHeader";
import SideBar from "@/components/Account/sideBar";
import io from "socket.io-client";
export default {
    components:{
        SideBar,
        AppHeader
    },
    data() {
        return {
            bookmarkList:[],
            socket:{}
        };
    },
    
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
            console.log(res);
            this.bookmarkList=res.data;
        })
    },
    mounted() {
        this.socket=io("http://localhost:2021");
        this.socket.on("WELCOME_MESSAGE",this.WELCOME_MESSAGE);
    },
    methods: {
        WELCOME_MESSAGE(data){
            console.log(data);
        },
        SEND_MESSAGE(e){
            this.socket.emit("MESSAGE", e.target.value);
        }
    },
}
</script>