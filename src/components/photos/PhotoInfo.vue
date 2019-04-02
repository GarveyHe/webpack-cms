<template>
    <div>
        <h3>图片详情</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {}
        }
    },
    methods: {
        getPhotoInfo() {
            // 获取图片的详情
            this.$http.get('api/getimageinfo/' + this.id).then(result => {
                if(result.body.status === 0) {
                    this.photoinfo = result.body.message;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
