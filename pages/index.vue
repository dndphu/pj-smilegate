<template>
  <section class="home">
    <h1>Photo Card</h1>
    <div class="grid">
      <div v-for="(item, index) in 14" :key="index" class="card">
        <div class="card-image">
          <img src="@/assets/images/unmma82.jpeg" alt="Card Image" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Card 1</h3>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="@/assets/images/2MM9Jqo.png" alt="Card Image" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Card 2</h3>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  max-width: 1100px;
  margin: 0 auto;
  h1 {
    margin: 20px 0;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-template-columns: repeat(300px, 3fr);
  // grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.card-image {
  &:hover {
    overflow: hidden;
    img {
      transform: scale(1.15);
      transition: all 0.8s ease 0s;
    }
  }
  width: 100%;
  padding-bottom: 66.67%; /* Tỷ lệ 3:2 (2 / 3 * 100) */
  position: relative;
  overflow: hidden;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-description {
  font-size: 14px;
  color: #777;
}

/* Media Queries */
@media (max-width: 1100px) {
  // .grid {
  //   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // }
  .home {
    padding: 0 10px;
  }
}
</style>
