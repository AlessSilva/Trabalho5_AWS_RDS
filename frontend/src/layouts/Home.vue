<template>
  <q-layout view="lHh Lpr lFf">
      <q-icon title="Sair" class="logout-icon" name="logout" @click="signOut"/>
      <WorkForm :onSave="onSaveWork"/>
      <WorkList :list="works" :username="authenticatedUser.name" :onDelete="onDeleteWork" :onUpdate="onUpdateWork"/>
  </q-layout>
</template>

<script>

import WorkList from '../components/WorkList'
import WorkForm from '../components/WorkForm'
import workService from '../service/workService'
import authService from '../service/authService'
export default {
  components: { WorkList, WorkForm },
  data () {
    return {
      authenticatedUser: {},
      works: []
    }
  },
  methods: {
    async onSaveWork (work) {
      this.authenticatedUser = await authService.getCurrentUser()
      work.userId = this.authenticatedUser.id
      const { work: workResponse } = await workService.save(work)

      this.works.push(workResponse)
    },
    async onDeleteWork (work) {
      await workService.deleteWork(work)
      this.works = this.works.filter((w) => w.id !== work.id)
    },
    async onUpdateWork (work) {
      await workService.update(work)

      const idx = this.works.findIndex((w) => w.id === work.id)
      this.works[idx] = work
    },
    async signOut () {
      await authService.signOut()
      this.$router.push('/')
    }
  },
  async created () {
    this.authenticatedUser = await authService.getCurrentUser()
    try {
      this.works = await workService.get(this.authenticatedUser.id)
    } catch (err) {
      this.$q.notify({
        type: 'negative',
        message: 'Erro ao recuperar lista de trabalhos'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.logout-icon{
  font-size: 2em
  margin-left auto
  padding 10px
  display block
  color red
  cursor pointer
}
</style>
