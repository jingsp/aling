import Vue from 'vue'
import Router from 'vue-router'
const InfoAdd = resolve => {
  import('../pages/infoadd/infoadd').then(module => {
    resolve(module)
  })
}

const SubmitSuccess = resolve => {
  import('../pages/infoadd/success').then(module => {
    resolve(module)
  })
}

const Attention = resolve => {
  import('../pages/attention/attention').then(module => {
    resolve(module)
  })
}

const Invitation = resolve => {
  import('../pages/invitation/invitation').then(module => {
    resolve(module)
  })
}

const TaskDone = resolve => {
  import('../pages/taskdone/taskdone').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/infoadd',
      name: 'InfoAdd',
      component: InfoAdd
    },
    {
      path: '/success',
      name: 'SubmitSuccess',
      component: SubmitSuccess
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
    },
    {
      path: '/invitation',
      name: 'Invitation',
      component: Invitation
    },
    {
      path: '/taskdone',
      name: 'TaskDone',
      component: TaskDone
    }
  ]
})
