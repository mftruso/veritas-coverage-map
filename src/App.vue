<template>
    <div id="app">
        <CoverageMap />
    </div>
</template>

<script>
import CoverageMap from "@/components/CoverageMap";
export default {
  name: 'App',
    components: {CoverageMap},
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
