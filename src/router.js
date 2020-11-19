import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import TodoList from "./TodoList";
import Counter from "./Counter";
import AreaSelect  from "./AreaSelect";
import Currency from "./Currency";
import Users from "./Users";
import Toggle from "./Toggle";
import Policy from "./Policy";

const routes = [
    { path: '/todo-list', component: TodoList },
    { path: '/counter', component: Counter },
    { path: '/area-select', component: AreaSelect },
    { path: '/currency', component: Currency },
    { path: '/users', component: Users },
    { path: '/toggle', component: Toggle },
    { path: '/policy', component: Policy },
];

export default new VueRouter({ routes });