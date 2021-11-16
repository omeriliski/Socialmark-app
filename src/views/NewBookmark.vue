<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
      <input v-model="userData.title" autofocus ref="title" type="text" placeholder="Başlık" class="input mb-3" />
      <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
      <select v-model="userData.categoryId" class="input mb-3">
        <option disabled value="" selected>Kategori</option>
        <option v-for="category in categoryList" :key="category" :value="category.id">{{category.name}}</option>
      </select>
      <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button @click="$router.push({name:'HomePage'})" class="secondary-button">İptal</button>
        <button @click="onSave()" class="default-button">Kaydet</button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      categoryList:[],
      userData:{
        title:null,
        url:null,
        categoryId:null,
        description:null
      }
    }
  },
  mounted() {
    this.$appAxios.get("/categories")
      .then(res=>{
        console.log(res);
        this.categoryList=res?.data || [];
    });
    // this.$nextTick(()=>{     //bazen bunu kullanmak gerekiyor, vuejs bug
    //   console.log("ref",this.$refs.title);
    // })  
    // this.$refs.title.autofocus=true; //calismadi
    console.log("ref",this.$refs.title);
  },
  methods: {
    onSave(){
      console.log(this.userData);
      console.log(this._getCurrentUser);
      const saveData={
        ...this.userData,
        userId:this._getCurrentUser?.id,
        created_at:new Date()
      }
      this.$appAxios.post("/bookmarks",saveData)
      .then(res=>{
        console.log(res);
        Object.keys(this.userData)?.forEach(field=>this.userData[field]=null);
        this.$router.push({name:"HomePage"});
      });
    }
  },
  computed:{
    ...mapGetters(["_getCurrentUser"])
  }
}
</script>