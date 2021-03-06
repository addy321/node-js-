


module.exports = function(entityobj){
    var tool = require('../../utils/tool')
    // 所有字段拼接
    var models = ''
    entityobj.fields.forEach(fieldObje => {
        var fieldtext = tool.toHump(fieldObje.字段名)
        models += `
        <a-form-model-item label="${fieldObje.字段说明}" prop="${fieldtext}">
            <a-input v-model="entity.${fieldtext}" autocomplete="off" />
        </a-form-model-item>
        `
    })

        return `
<template>
  <a-modal
    title="编辑表单"
    width="40%"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="()=>{this.visible=false}"
>
    <a-spin :spinning="confirmLoading">
        <a-form-model ref="form" :model="entity" :rules="rules" v-bind="layout">
            ${models}
        </a-form-model>
    </a-spin>
  </a-modal>
</template>

<script>
export default {
props: {
    afterSubmit: {
        type: Function,
        default: null
    }
},
data() {
    return {
        layout: {
            labelCol: { span: 5 },
            wrapperCol: { span: 18 }
        },
        visible: false,
        confirmLoading: false,
        entity: {},
        DepartmentIdTreeData: [],
        RoleOptionList: [],
        rules: {
            UserName: [{ required: true, message: '必填' }],
            RealName: [{ required: true, message: '必填' }],
            Sex: [{ required: true, message: '必填' }]
        }
    }
},
methods: {
    init() {
        this.visible = true
        this.entity = {}
        this.$nextTick(() => {
            this.$refs['form'].clearValidate()
        })
    },
    openForm(id) {
        this.init()
        if (id) {
            this.$http.post('/${entityobj.package}/${entityobj.className}/GetTheData', { id: id }).then(resJson => {
                this.entity = resJson.Data
            })
        }
    },
    handleSubmit() {
    this.$refs['form'].validate(valid => {
        if (!valid) {
            return
        }
        this.confirmLoading = true
        this.$http.post('/${entityobj.package}/${entityobj.className}/SaveData', this.entity).then(resJson => {
            this.confirmLoading = false
            if (resJson.Success) {
                this.$message.success('操作成功!')
                this.afterSubmit()
                this.visible = false
            } else {
                this.$message.error(resJson.Msg)
            }
        })
    })
    }
}
}
</script>
      
        `

}
