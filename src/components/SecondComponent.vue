<template>
<div id="SecondComponent">
<el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">{{title}}</h1>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
</el-card>
   

</div>
</template>
<script type="text/javascript>">
export default{
    data () {
     return {
       author:"guhj",
       articles: [],
       title: ''
     }
    },
    mounted: function(){
        // 这个只要路由进去就会执行。也可以做成执行一次。
    	this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
    	headers: {

    	},
    	emulateJSON: true
    	}).then(function(response){
    	 
    	  this.title = response.body.title;
    	  this.articles = response.body.subjects;
    	},function(response){
    		console.log(response);
    	});

    }
}
</script>
<style>
 .title-red{color:red;}
</style>