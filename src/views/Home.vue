<template>
    <div>
        <AppHeader/>
        <div class="flex flex-row">
            <Sidebar @category-changed="updateBookmarkList"/>
            <AppBookmarkList v-if="bookmarkList.length>0" :items="bookmarkList"/>
            <div v-else>Bookmark bulunamadi...</div>
       </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Home/Sidebar';
export default {
    components:{
        Sidebar
    },
    data() {
        return {
            bookmarkList:[]
        }
    },
    mounted() {
        this.$socket.on("NEW_BOOKMARK_ADDED",this.fetchData)
    },
    created() {
        this.fetchData();
        
    },
    methods: {
        fetchData(){
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
                console.log(res);
                this.bookmarkList=res.data;
        })
        },
        updateBookmarkList(categoryId){
            const url= categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`:`/bookmarks?_expand=category&_expand=user`
            this.$appAxios.get(url).then(res=>{
                console.log(res);
                this.bookmarkList=res.data;
        })  
        }
    },
}
</script>