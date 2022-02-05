<template>
    
</template>

<script>
    export default {
        name: "check",
        mounted() {
            const payment_id = this.$route.query.paymentId
            this.$apollo.mutate({
                mutation: require('~/apollo/mutation/checkPayment'),
                variables: {
                    payment_id
                }
            }).then(res => {
                console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>