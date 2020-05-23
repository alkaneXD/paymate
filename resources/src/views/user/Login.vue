<template>
  <div id="centerDiv">
    <div class="left">
      <p>
        <span>Pay</span>
        <span>mate</span>
      </p>
      <p>Welcome back</p>
      <p>Lorem ipsum dolor sit amet,consecetuer</p>

      <a-form :form="form" class="loginForm">
        <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
            placeholder="Email Address"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            style="color:#CACACA"
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
          >
            Keep me logged in
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password?
          </a>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" class="loginBtn" html-type="submit" :disabled="hasErrors(form.getFieldsError())" @click="login">
            LOGINXX
          </a-button>
        </a-form-item>
      </a-form>

      <p>Don't have an account? <span style="color:#007AFF;cursor: pointer;">Sign Up</span></p>
    </div>
    <div class="right">
      <div>About Us</div>
      <p>
        Nullam euismod tellus quis pulvinar volutpat. Vestibulum at mi gravida,
        gravida leo commodo, tristique diam. Suspendisse gravida purus arcu, ut
        laoreet ligula venenatis ac. Duis tristique mauris vel mi tincidunt, eget
        auctor orci tincidunt. Duis fermentum justo lacus, nec dignissim leo
        placerat quis. Pellentesque nec velit ex. In at euismod eros.

        Aliquam rutrum elit quis hendrerit malesuada. Nunc facilisis lectus quis
        velit accumsan imperdiet. Phasellus id nisl ac augue pharetra fringilla. Duis
        augue massa, posuere quis lorem sed, maximus accumsan elit. Aenean
        quis lacus id eros lacinia sollicitudin sit amet nec sapien.
      </p>
    </div>
  </div>
</template>

<style scoped>
  p{
    margin: 0;
  }
  #centerDiv{
    display: flex;
    height: 100vh;
  }
  .left{
    display: flex;
    flex-direction: column;
    flex:4;
    align-items: center;
  }
  .left p:nth-of-type(1){
    margin-top: 8rem;
  }
  .left p:nth-of-type(1) span{
    font-size: 3.6rem;
  }
  .left p:nth-of-type(1) span:nth-of-type(1){
    color:#0049A8;
  }
  .left p:nth-of-type(1) span:nth-of-type(2){
    color:#38B6B9;
  }
  .left p:nth-of-type(2){
    font-size: 2rem;
    color:#0049A8;
    margin-top: 4rem;
  }
  .left p:nth-of-type(3){
    font-size: 1.2rem;
    color:#CACACA;
    margin-top: .2rem;
  }
  .loginForm{
    margin-top: 2rem;
  }
  .login-form-forgot{
    margin-left: 5.6rem;
  }
  .loginBtn{
    font-size: 1.4rem;
  }
  .right{
    flex:7;
    background: url('../../assets/posImgs/login.png') no-repeat;
    background-size: 100% 100%;
    color:#fff;
    font-size: 1.2rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .right div{
    float: right;
    font-size: 2rem;
    margin-top: 10rem;
  }
  .right p{
    width: 60%;
    float: right;
    margin-top: 2rem;
  }
</style>

<style>
  #centerDiv .ant-input, #centerDiv .loginBtn {
    width: 22rem;
    height: 3rem;
    border-radius: 100px;
  }
  #centerDiv .ant-input{
    font-size: 1rem;
  }
</style>

<script>
import { timeFix } from '@/utils/util'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' })
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    login () {
      this.$router.push('/')
    }
    // handleSubmit (e) {
    //   e.preventDefault()
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //     }
    //   })
    // }
  }
}
</script>
