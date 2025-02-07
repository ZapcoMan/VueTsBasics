<template>
  <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
           class="demo-ruleForm">
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {reactive} from 'vue'

const title = ref('注册');


import type {FormInstance, FormRules} from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  pass: '',
  checkPass: '',
})

/**
 * 检查年龄的验证函数
 * 该函数用于表单验证，以确保用户输入的年龄符合要求
 * @param {any} rule - 验证规则对象
 * @param {any} value - 用户输入的年龄值
 * @param {any} callback - 回调函数，用于返回验证结果
 */
const checkAge = (rule: any, value: any, callback: any) => {
  // 检查是否有输入年龄
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  // 使用setTimeout模拟异步验证过程
  setTimeout(() => {
    // 检查输入是否为整数
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      // 检查年龄是否大于18
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

/**
 * 验证密码的函数
 * 该函数用于表单验证，以确保用户输入的密码符合要求
 * @param {any} rule - 验证规则对象
 * @param {any} value - 用户输入的密码值
 * @param {any} callback - 回调函数，用于返回验证结果
 */
const validatePass = (rule: any, value: any, callback: any) => {
  // 检查是否有输入密码
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    // 如果确认密码不为空，触发确认密码的验证
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

/**
 * 验证重复密码的函数
 * 该函数用于表单验证，以确保用户两次输入的密码一致
 * @param {any} rule - 验证规则对象
 * @param {any} value - 用户输入的重复密码值
 * @param {any} callback - 回调函数，用于返回验证结果
 */
const validatePass2 = (rule: any, value: any, callback: any) => {
  // 检查是否有输入重复密码
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    // 检查两次输入的密码是否一致
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}



// 定义表单验证规则
const rules = reactive<FormRules<typeof ruleForm>>({
  // 密码验证规则
  pass: [{validator: validatePass, trigger: 'blur'}],
  // 确认密码验证规则
  checkPass: [{validator: validatePass2, trigger: 'blur'}],
  // 年龄验证规则，目前已被注释掉
  // age: [{validator: checkAge, trigger: 'blur'}],
})

/**
 * 提交表单函数
 * @param {FormInstance | undefined} formEl - 表单实例
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 验证表单数据是否有效
  formEl.validate((valid) => {
    if (valid) {
      // 如果表单数据有效，则提交表单
      console.log('submit!')
    } else {
      // 如果表单数据无效，则提示错误信息
      console.log('error submit!')
    }
  })
}

/**
 * 重置表单函数
 * @param {FormInstance | undefined} formEl - 表单实例
 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 重置表单数据
  formEl.resetFields()
}

</script>


<style scoped>

</style>