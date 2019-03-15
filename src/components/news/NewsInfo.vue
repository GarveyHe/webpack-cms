<template>
    <div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import Comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id).then( result => {
                if (result.body.status === 0) {
                    // 如果没有失败，把数据保存到data上
                    this.newsinfo = result.body.message[0];
                } else {
                    Toast('获取新闻列表失败')
                }
            });
        }
    },
    components: {
        "comment-box": Comment
    }
}
</script>

<style lang="scss" scoped>

</style>
