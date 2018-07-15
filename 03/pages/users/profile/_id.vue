<template>
  <div>
    <h1>유저 id : {{userId}} 유저</h1>
  </div>
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