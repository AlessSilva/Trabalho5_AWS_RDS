<template>
   <div>
      <q-btn
      :loading="loading"
       title="Selecione um ou mais trabalhos"
       class="q-mx-lg q-mb-lg"
       label="deletar" :disable="selected.length===0" :color="selected.length!==0 ? 'red' : 'black'"
       @click="deleteWork"/>

       <q-btn
      :loading="loading"
       title="Selecione somente um trabalho"
       class="q-mx-lg q-mb-lg"
       label="Editar" :disable="selected.length!==1" :color="selected.length===1 ? 'blue' : 'black'"
       @click="editDialog=true"/>

      <q-dialog v-model="editDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Edite o trabalho</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <WorkForm :workEdit="selected[0]" :onUpdate="onUpdate"/>
      </q-card>
      </q-dialog>

      <q-table
        class="q-mx-lg q-mb-xl"
        :title="`Meus trabalhos - ${username}`"
        :data="list"
        :columns="columns"
        row-key="id"
        no-results-label="Nenhum resultado encontrado"
        no-data-label="Você ainda não cadastrou nenhum trabalho"
        :selected-rows-label="(n)=> `${n} ${n===1 ? 'trabalho selecionado' : 'trabalhos selecionados' } `"
        selection="multiple"
        :selected.sync="selected"
      />
   </div>
</template>

<script>
import WorkForm from '../components/WorkForm'
export default {
  props: ['username', 'list', 'onDelete', 'onUpdate'],
  components: { WorkForm },
  data () {
    return {
      selected: [],
      loading: false,
      editDialog: false,
      columns: [
        { name: 'id', align: 'left', label: 'Id', field: 'id', sortable: true },
        { name: 'title', label: 'Nome', align: 'left', field: 'title', sortable: true },
        { name: 'description', align: 'center', label: 'Descrição', field: 'description' },
        { name: 'deadline', label: 'Prazo', field: 'deadline', format: val => this.dateFormat(val), sortable: true }
      ]
    }
  },
  methods: {
    deleteWork () {
      try {
        this.loading = true
        this.selected.map((work) => (
          this.onDelete(work)
        ))
      } catch (err) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao deletar'
        })
      } finally {
        this.loading = false
        this.selected = []
      }
    },
    dateFormat (date) {
      const d = new Date('2020-09-29T03:00:00.000Z').toISOString().split('T')[0]
      return d.split('-').reverse().join('/')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
