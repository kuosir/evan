<template>
    <div>
        <div>
            You're suspended!!
            <button v-if="!show" @click="show=true">More</button>
            <button v-else>Hide</button>
        </div>
        <div v-if="show" @click="show=false">
            Auth not found !!!!
        </div>
        <!-- <div v-else>
            Click "more" to show more.
        </div> -->
    </div>
</template>

<script>
export default {
    data:()=> ({
      show: false  
    }),
}
</script>