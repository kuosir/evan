<template>
    <div>
        <select v-model="gender">
            <option value="all">All</option>
            <option value="male">Male</option> 
            <option value="female">Female</option>
        </select>
        <br/>

        <button @click="gender = 'all'">all</button>        
        <button @click="gender = 'male'">male</button>
        <button @click="gender = 'female'">female</button>
        
        <br/>
        <button @click="age = 'all'">all</button>
        <button @click="age = 'young'">young</button>
        <button @click="age = 'old'">old</button>

        <br/>
        <button @click="order = 'asc'">Asc</button>
        <button @click="order = 'desc'">Desc</button>
        
        <table border='1'>
            <tbody>
                <tr v-for="user in orderedUser" :key="user.name">
                    <td><img :src="user.picture"/></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.gender}}</td>
                    <td>{{ user.age}}</td>
                    <td>{{ user.email}}</td>
                    <td>{{ user.username}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import users from './users.json'
export default {
    //first load : mouted -> created(init data) 
    mounted() {
        fetch('http://10.2.1.127/users.json')
        .then(res => res.json())
        .then(data => this.users = data);
    },
    data:()=> ({
      users: [],
      gender: "all",
      age: "all",
      order: "asc"
    }),
    computed: {
        filteredUser () { 
            return this.users
             .filter(
                 elm => this.gender === "all" || this.gender === elm.gender
            )
            .filter(
                (elm) => {
                    if(this.age === "all") return true;
                    if(this.age === "young") return elm.age < 30;
                    if(this.age === "old") return elm.age >= 30;
                }
            )
            ;
        },
        orderedUser () {
            const arr = [...this.filteredUser];
            return arr.sort((a,b) => {
                if(this.order === 'asc') {
                    return a.age - b.age;
                } else {
                    return b.age - a.age;
                }
            })
        }
    },
}
</script>