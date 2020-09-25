<template>
    <div>
        <button :class="{red: isRed, blue: !isRed}" @click="isRed = !isRed">Click me</button>
        <input type="text" v-model="somevalue">
        <input type="text" :value="reverse">
        <input type="text" v-model="message" @keydown.enter="add">
        <button @click="add">Add</button>
        <button @click="items = []">Clear All</button>
        <ul>
            <li v-for="item in items" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            somevalue: "hello world",
            message: "",
            items: [],
            isRed: true
        }
    },
    methods: {
        add() {
            if(this.message != "") {
                this.items.push(this.message);
                this.message = "";
            }
        },
    },
    computed: {
         reverse(){
            return this.somevalue.split('').reverse().join('');
        }
    }

}
</script>
<style>
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
</style>