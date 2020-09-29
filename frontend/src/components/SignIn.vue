<template>
    <q-page>
        <q-card class="container">
            <img class="avatar" src="user-img.png">
            <q-card-section>
            <q-form
            class="q-gutter-md q-pa-sm"
            >
                <q-input
                v-model="user.email"
                label="Seu email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                />

                <q-input
                type="password"
                v-model="user.senha"
                label="Senha"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                />

                <div>
                    <q-btn label="Entrar" type="submit" color="primary"/>
                </div>
            </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {

  data () {
    return {
      user: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
    .q-page{
        display flex
        justify-content center
    }
    .q-card{
        margin-top 100px
        width 350px
        height 400px
        display flex
        flex-direction column
    }

    .q-icon{
        margin 5px
        margin-left auto
        padding 10px
        border-radius 5px
        font-size 15px
        cursor pointer
        transition all .2
    }

    .q-icon:hover{
        background-color #aaa
    }

    .avatar{
        margin 10px auto
        width 100px
        height 100px
        border-radius 50%
    }

    .q-btn{
        height 40px
        width 100%
    }
</style>
