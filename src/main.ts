/// <reference path="./lib/student" />
/// <reference path="../typings/vue/vue.d.ts" />

import Student from "./lib/student";
import Vue = require("vue");

function greeter(person : Student) {
    if(person.fullname.length > 0){
        return "Hello, " + person.fullname;
    }else{
        return "Please input name";
    }
}

var app = new Vue({
    el: "#main",
    data: {
        firstName: "Taro",
        lastName: "Yamada",
        message: "No User"
    },
    methods:{
        updateUser: function(firstName: string, lastName: string){
            var user = new Student(firstName, lastName);
            this.message = greeter(user);
        }
    },
    ready: function(){
        this.updateUser(this.firstName, this.lastName);
    }
});