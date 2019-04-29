<template>
    <div class="footer">
        <ul class="footer-list">
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">图书</router-link>
            </li>
            <li>
                <router-link to="/photo">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        height: 1rem;
        background: red;
        width: 100%;
        line-height: 1rem;
    }
    .footer-list{
        display: flex;

    }
    .footer-list li{
        flex:1;
        text-align: center;
        
    }
    .footer-list a{
        color: black;
    }
    .footer-list a.router-link-active{
        color: #fff;
    }

</style>