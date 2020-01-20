<template>
  <div class="main-footer">
    <div class="main-container">
      <div class="line"></div>
      <ul class="nav-list">
        <li>&copy;2020 {{$root.pkg.author.name}}</li>
        <li><a :href="$root.pkg.github">Github</a></li>
        <li><a :href="$root.pkg.website">About me</a></li>
      </ul>
    </div>
  </div>
</template>
