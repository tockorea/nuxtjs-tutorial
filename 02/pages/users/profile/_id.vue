<template>
  <h1>유저 id : {{ userId }} 프로필</h1>
</template>

<script>
export default {
  validate({ params }) {
    if (isNaN(params.id)) {
      return false;
    } else {
      return true;
    }
  },
  data() {
    return {
      userId: this.$route.params.id
    };
  }
};
</script>