<template>
    <q-card class="container">

        <q-card-section>
        <q-form
        @submit="onSubmit"
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

            <div v-if="workEdit">
                <q-btn :loading="loading" label="Editar" type="submit"  color="primary"/>
            </div>

            <div v-else>
                <q-btn :loading="loading" label="Adicionar" type="submit"  color="primary"/>
            </div>
        </q-form>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
  props: ['onSave', 'onUpdate', 'workEdit'],
  data () {
    return {
      work: {},
      loading: false
    }
  },
  methods: {
    async onSubmit () {
      try {
        this.loading = true
        if (this.onUpdate) {
          await this.onUpdate(this.work)
        } else {
          await this.onSave(this.work)
        }
      } catch (err) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao salvar dados'
        })
      } finally {
        this.loading = false
      }
    }
  },
  created () {
    if (this.workEdit) {
      this.work = this.workEdit
    }
  }
}
</script>

<style lang="stylus" scoped>
    .q-card{
        margin 20px auto
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
