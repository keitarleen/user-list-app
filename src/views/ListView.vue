<script setup lang="ts"></script>

<template>
  <div class="header_bar">
    <h1>Account users</h1>
    <div>
      <input placeholder="search" />
      <button>Search</button>
    </div>
  </div>
  <section class="users_list">Users listed here</section>
</template>

<style scoped>
.header_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.users_list {
  margin-top: 1rem;
  background: #fff;
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;
}
</style>
