<template>
    <q-page>
        <q-card>
            <img class="avatar" src="user-img.png">
            <q-card-section>
                <q-form
                @submit="onsubmitForm"
                class="q-gutter-md q-pa-sm"
                >
                    <q-input
                    v-model="user.name"
                    label="Seu nome"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                    />

                    <q-input
                    v-model="user.email"
                    label="Email"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                    />

                    <q-input
                    type="password"
                    v-model="user.password"
                    label="Senha"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                    />

                    <q-input
                    type="password"
                    v-model="confpass"
                    label="Confirmar senha"
                    lazy-rules
                    :rules="[ val => val && val > 0 || 'Campo em branco',  val => val === user.password || 'As senhas não correspondem']"
                    />

                    <div>
                        <q-btn label="Cadastrar" type="submit" color="primary"/>
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
      user: {},
      confpass: ''
    }
  },
  methods: {
    onsubmitForm () {
      console.log('aqui')
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
        margin-top 60px
        height 580px
        width 400px
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
        width 100%
        height 40px
    }
</style>
