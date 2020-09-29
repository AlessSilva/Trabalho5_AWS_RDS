<template>
  <q-layout view="lHh Lpr lFf">
      <q-icon title="Sair" class="logout-icon" name="logout"/>
      <WorkForm />
      <WorkList :username="authenticatedUser.name"/>
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
      authenticatedUser: {}
    }
  },
  methods: {},
  async created () {
    this.authenticatedUser = await authService.getCurrentUser()
    console.log('aqiu', await workService.get(this.authenticatedUser.id))
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
