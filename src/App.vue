<template>
<div class="all">
<div class="head">
  <div class="row1">
    <div class="col-xs-offset-2 col-xs-8"  style="display:inline-block">
      <div class="page-header"><img src="./assets/1.png" alt="" class="picture1"></div>
    </div>
   
     <div class="col-xs-2 col-xs-offset-2"  style="display:inline-block">
    <div class="list-group">
      <router-link class="list-group-item" active-class="active" to="/indexA">首页</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link class="list-group-item" active-class="active" to="/aboutA">关于我们</router-link>   
    </div>
  </div>
  </div>
  <div class="row">
   <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <router-view></router-view>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
  </div>
</div>
<div class="footer">
<span><a href="">粤ICP备19046302号</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><a href="">Email@:835304264@qq.com</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><a href="">隐私政策</a></span>
<div><img src="./assets/JH.png" alt=""><a href="">粤公网安备44010502001353号</a></div>
<div><p>build 4,Guangzhou Venture Capital, No. 1601-20,Guangzhou Avenue,Haizhu District,Guangzhou,P.R.C</p></div>
</div>
</div>
</template>

<script>


export default {
  name:'App',
  components:{ }
}
</script>

<style>
*{margin:0;padding:0}

.head::before{
  content:'';
  position: fixed;
  z-index: -1;
  background-size: 100% auto;
  background:linear-gradient(1000deg,rgb(235, 218, 253),#ffffff);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0px;
  margin: 0px;
}
.picture1{
  width: 250px;
  height: 55px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.list-group{
  text-align: right;
  display: inline-block;
  margin: 0px;
  clear: both;
  position: absolute;
  top: 40px;
  right: 550px;
  font-size: 10px;
}
.footer{
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}
.all{
  width: 100%;
  height: 100%;
}
</style>
