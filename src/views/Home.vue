<template>
    <div class="site">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="title" v-html="$t('message.golden')"></h1>
                <div class="con">
                    <img class="pies-img" src="../assets/golden-retriever-ciekawostki.jpg" alt="pies">
                    <div v-html="$t('message.homeGolden')"></div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>

export default {
    name: "Home",
    components: {},
};
</script>

<style lang="scss" scoped>
:deep(.con) {
  width: auto;

}

.pies-img {
  margin-top: 10px;
  height: auto;
  width: 280px;
  float: left;
  margin-right: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
  border-radius: 5px;
  @media (min-width: 780px) {
    width: auto;
    height: 400px;
  }
}

:deep(p) {
  font-weight: 3000;
  font-size: large;
}

:deep(.title) {
  color: goldenrod;
  font-size: 55px;
  margin-bottom: 5px;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-top: 40px;
      font-size: 30px;
  }
}

:deep(h2) {
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;
  color: goldenrod;
}

:deep(ul) {
  margin-left: 20px;
  list-style-type: none;
}

:deep(p) {
  margin-bottom: 10px;
}

:deep(.sum-title) {
  font-size: 30px;
  margin-bottom: 5px;
  margin-top: 10px;
}


</style>