<template>
   <div class="container">
       <q-table
        hide-bottom
        class="q-mx-lg"
        :title="`Meus trabalhos - ${username}`"
        :data="data"
        :columns="columns"
        row-key="name"
        no-results-label="Nenhum resultado encontrado"
        no-data-label="Você ainda não enviou nenhum arquivo"
      />
   </div>
</template>

<script>
const ALLOWED_FILE_TIPES = ['video/mp4']

export default {
  props: ['username'],
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'description', align: 'center', label: 'Descrição', field: 'description' },
        { name: 'deadline', label: 'Prazo', field: 'deadline', sortable: true }
      ],

      data: [
        {
          name: 'Video A',
          description: 20,
          deadline: '27/09/2020'
        },
        {
          name: 'Video B',
          description: 10,
          deadline: '16/04/2020'
        }
      ]
    }
  },
  methods: {
    checkFileType (files) {
      return files.filter(file => ALLOWED_FILE_TIPES.includes(file.type))
    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: 'Tipo de arquivo inválido'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
