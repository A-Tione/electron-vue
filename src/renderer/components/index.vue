<template>
    <div id="wrapper">
        <div v-for="item in list" :key="item.id">
            <li>
                <img :src="item.img_url">
                <div>{{item.pet_name}}</div>
            </li>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'landing-page',
        data(){
            return {
                list:null
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            init(){
                this.$http({
                    headers: { 'X-Requested-With': 'XMLHttpRequest','content-type': 'application/x-www-form-urlencoded' },
                    method:'post',
                    url:'http://testwww.justsoeasy.com/api/u/edaedu_users/logon',
                    data:{
                        phone:13973294543,
                        password: 123123,
                        visit_type: 3,
                        login_type: 5,
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.list = res.data.list
                }).catch(err=>{
                    console.log(err,'err')
                })
            }
        }
    }
</script>

<style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }

    #wrapper {
        background: radial-gradient(
                ellipse at top left,
                rgba(255, 255, 255, 1) 40%,
                rgba(229, 229, 229, .9) 100%
        );
        height: 100vh;
        padding: 60px 80px;
        width: 100vw;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }

    main {
        display: flex;
        justify-content: space-between;
    }

    main > div {
        flex-basis: 50%;
    }

    .left-side {
        display: flex;
        flex-direction: column;
    }

    .welcome {
        color: #555;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .doc p {
        color: black;
        margin-bottom: 10px;
    }

    .doc button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }

    .doc button.alt {
        color: #42b983;
        background-color: transparent;
    }
</style>
