<template>
  <div>

    <InputText placeholder="test" />
    <span class="pi pi-user pi-spin pi-cog" style="color: #708090"></span>
  </div>

  <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
    <Button label="Button 1" icon="pi pi-user" severity="success"></Button>
    <Button label="Button 2" severity="secondary" outlined></Button>
    <Button label="Help" severity="help" outlined></Button>
    <Button label="Success" severity="success" rounded raised outlined></Button>
  </div>
</template>

<script setup>

</script>

<style scoped></style>