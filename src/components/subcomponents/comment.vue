<template>
    <div>
        <h3>发表评论</h3>
    <hr>
    <textarea placeholder="最多输入120个文字" maxlength=""></textarea>
    <mt-button type="primary" size="large"></mt-button>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageIndex: 1,
            comments: []
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
                if(result.body.status === 0) {
                    //为了防止新数据覆盖老数据，调用数组的concat（）方法拼接老数据
                    this.comments = this.comments.concat(result.body.message);
                } else {
                    Toast('获取评论失败！');
                }
            })
        },
        getMore() {
            this.pageIndex++;
            this.getComments();
        }
    },
    props: ["id"]
}
</script>

<style lang="scss" scoped>

</style>

