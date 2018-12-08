const menu = {
  home: {
    name: 'menu.home',
    path: '/',
    icon: 'el-icon-menu',
  },
  attendance: {
    name: 'menu.attendancemanage',
    icon: 'el-icon-menu',
    children: {
      actualnumber: {
        name: 'menu.actualnumber',
        path: '/attendance/actual'
      },
      absencenumber: {
        name: 'menu.absencenumber',
        path: '/attendance/absence'
      },
      leavenumber: {
        name: 'menu.leavenumber',
        path: '/attendance/leave'
      },
    }
  },
  summary: {
    name: 'menu.summarymanage',
    icon: 'el-icon-menu',
    children: {
      daysummary: {
        name: 'menu.daysummary',
        path: '/summary/day'
      },
      weeksummary: {
        name: 'menu.weeksummary',
        path: '/summary/week'
      },
      monthsummary: {
        name: 'menu.monthsummary',
        path: '/summary/month'
      }
    }
  },
  content: {
    name: 'menu.articlemanage',
    icon: 'el-icon-document',
    children: {
      list: {
        name: 'menu.articlequery',
        icon: 'el-icon-edit-outline',
        path: '/article/list'
      },
      add: {
        name: 'menu.articleadd',
        icon: 'el-icon-edit-outline',
        path: '/article/add'
      }
    }
  }
};

export default menu;