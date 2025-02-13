
export default {
  name: 'WebsiteDocument',
  state: {
    docTree: [
      {
        "label": "基本使用",
        "children": [
          {
            "label": "使用编辑器",
            "value": "/docs/using-editor.md"
          },
          {
            "label": "应用分发及运行",
            "value": "/docs/publish-use-app.md"
          },
          {
            "label": "社区版下载及安装",
            "value": "/docs/download.md"
          }
        ]
      },
      {
        "label": "页面开发入门",
        "children": [
          {
            "label": "第一个页面",
            "value": "/docs/tutorial/hello-world.md"
          },
          {
            "label": "数据连接及交互",
            "value": "/docs/tutorial/data-connect.md"
          },
          {
            "label": "了解布局类组件",
            "value": "/docs/tutorial/container.md"
          },
          {
            "label": "实例: 表单验证",
            "value": "/docs/tutorial/form-validate.md"
          },
          {
            "label": "应用样式和效果",
            "value": "/docs/tutorial/styling.md"
          },
          {
            "label": "使用列表容器",
            "value": "/docs/tutorial/list-container.md"
          },
          {
            "label": "使用布局切换容器",
            "value": "/docs/tutorial/switch.md"
          },
          {
            "label": "位置预留：配置对话框",
            "value": "/docs/tutorial/slot.md"
          },
          {
            "label": "页面即组件",
            "value": "/docs/tutorial/composite.md"
          }
        ]
      },
      {
        "label": "页面脚本开发入门",
        "children": [
          {
            "label": "Hello World",
            "value": "/docs/tutorial-dev/1-hello.md"
          },
           {
            "label": "动作改变状态",
            "value": "/docs/tutorial-dev/2-actions.md"
          },
          {
            "label": "运行上下文和setup",
            "value": "/docs/tutorial-dev/3-context.md"
          },
          {
            "label": "计算状态",
            "value": "/docs/tutorial-dev/4-computed.md"
          },
          {
            "label": "动态数据获取",
            "value": "/docs/tutorial-dev/4-fetching.md"
          },
           {
            "label": "重复数据项的状态",
            "value": "/docs/tutorial-dev/5-list.md"
          },
           {
            "label": "设置重复项",
            "value": "/docs/tutorial-dev/6-compute-set.md"
          },
          {
            "label": "构建和销毁",
            "value": "/docs/tutorial-dev/7-setup.md"
          }
        ]
      },
      {
        "label": "组件开发入门",
        "children": [
           {
            "label": "Hello World",
            "value": "/docs/tutorial-component/1-hello.md"
          }
        ]
      }
    ],
    name: '/docs/using-editor.md' // 默认地址
  },

  async setup () {
    if (location.search) {
      const usp = new URLSearchParams(window.location.search)
      const docPath = usp.get('doc')

      if (docPath) {
        this.name = docPath
      }
    }
  },

  destory () {
  },

  watch: {
  },

  actions: {
   
  }
}
