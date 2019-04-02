<template>
    <div>
        <h3>发表评论</h3>
    <hr>
    <textarea placeholder="最多输入120个文字" maxlength=""></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
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
            // 加载更多评论
            this.pageIndex++;
            this.getComments();
        },
        postComment() {
            if(this.msg.trim().length === 0) {
                return Toast('评论不能未空！')
            }
            // 发表评论
            // 参数一：请求的URL地址
            // 参数二：提交给服务器的数据对象 { content: this.msg }
            // 参数三：定义提交的时候，表单中数据的格式( emulateJSON: true )
            this.$http.post('api/postcomment/' + this.$route.params.id, {
                content: this.msg.trim()
            }).then(result => {
                if(result.body.status === 0) {
                    // 1.拼接出一个评论对象
                    var cmt = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    }
                    this.comments.unshift(cmt);
                    this.comments = '';
                } else {
                    Toast('获取评论失败！');
                }
            })
        }
    },
    props: ["id"]
}
</script>

<style lang="scss" scoped>

</style>

