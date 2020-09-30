<template>
   <div>
      <q-btn
      :loading="loading"
       title="Selecione um trabalho"
       class="q-mx-lg q-mb-lg"
       label="deletar" :disable="selected.length===0" color="red"
       @click="deleteWork"/>

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

export default {
  props: ['username', 'list', 'onDelete'],
  data () {
    return {
      selected: [],
      loading: false,
      columns: [
        { name: 'id', align: 'left', label: 'Id', field: 'id', sortable: true },
        { name: 'title', label: 'Nome', align: 'left', field: 'title', sortable: true },
        { name: 'description', align: 'center', label: 'Descrição', field: 'description' },
        { name: 'deadline', label: 'Prazo', field: 'deadline', sortable: true }
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
