<template>
  <header class="header">
    <a class="link-name" @click="$router.push(pageInfo.link)">
      {{ pageInfo.pageName }}
    </a>
    <span id="menu-icon"> . </span>
  </header>
</template>

<script>
export default {
  props: {
    pageInfo: {
      link: String,
      pageName: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 5;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-name {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 700;
  transition: all ease 0.3s;
  &:active {
    transform: scale(0.97);
  }
  cursor: pointer;
}

#menu-icon {
  width: 15px;
  display: flex;
  transform: scale(3);
  &:before,
  &:after {
    content: ".";
  }
  cursor: pointer;
  transition: all ease 0.3s;
  &:active {
    transform: scale(2.95);
  }
}

.link-name:hover,
#menu-icon:hover {
  color: #5a5abf;
}
</style>
