<template>
  <div class="cardBox">
    <div class="icon"><slot name="icon" class="iconmsg"></slot></div>
    <div class="title"><slot name="title"></slot></div>
    <div class="msg"><slot name="msg1"></slot></div>
    <div class="msg"><slot name="msg2"></slot></div>
    <div class="msg"><slot name="msg3"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.cardBox{
  margin: 0;
  padding: 20px;
  width: 240px;
  height: 200px;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px gray;
  .icon{
    width: 240px;
    height: 30px;
    display: flex;
    justify-content: left;
    .title{
      width: 200px;
      height: 40px;
    }
    .msg{
      width: 200px;
      height: 40px;
    }
  }
}
</style>
