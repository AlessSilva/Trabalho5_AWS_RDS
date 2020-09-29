<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>Video Subtitles</q-toolbar-title>
        <q-btn flat dense round icon="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      content-class="bg-grey-1"
    >

      <q-list>
        <template v-for="(menuItem, index) in menuLinks">
          <q-item :key="index" clickable :active="index == activeIndex" @click="setActive(index)">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>

    </q-drawer>
    <q-page-container>
      <WorkList v-if="activeIndex == 0"/>
      <SignUp v-else-if="activeIndex == 1"/>
      <SignIn v-else-if="activeIndex == 2"/>
      <WorkForm v-else-if="activeIndex == 3"/>
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'home',
    label: 'Início'
  },
  {
    icon: 'account_box',
    label: 'Perfil',
    separator: true
  },
  {
    icon: 'info',
    label: 'Sobre'
  },
  {
    icon: 'info',
    label: 'Sobre'
  }
]

import WorkList from '../components/WorkList'
import WorkForm from '../components/WorkForm'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
export default {
  components: { WorkList, SignUp, SignIn, WorkForm },
  data () {
    return {
      leftDrawerOpen: false,
      menuLinks: menuList,
      activeIndex: 0
    }
  },
  methods: {
    setActive (idx) {
      this.activeIndex = idx
    }
  }
}
</script>
