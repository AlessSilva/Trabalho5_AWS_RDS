<template>
    <q-page>
        <q-card class="container">

            <q-card-section>
            <q-form
            class="q-gutter-md q-pa-sm"
            >
                <q-input
                v-model="work.title"
                label="Título"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                />

                <q-input
                v-model="work.description"
                label="Descrição"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo em branco']"
                />

                <q-input
                     label="Prazo"
                    v-model="work.deadline"
                    mask="date"
                    :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="work.deadline">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Selecionar" color="primary" flat />
                            </div>
                            </q-date>
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>

                <div>
                    <q-btn label="Salvar" type="submit" color="primary"/>
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
      work: {}
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

    .q-btn{
        height 40px
        width 100%
    }
</style>
