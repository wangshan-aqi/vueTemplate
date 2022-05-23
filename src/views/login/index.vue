<template>
  <div class="login-container">
    <div class="login-header">
      111
    </div>
    <div class="login-content">
      <div class="marketing-wrapper">
        <div class="title-header">
          <span class="main-title">企业初创服务精选特惠</span>
          <span class="sub-title">域名关联产品组合购低至2.8折起</span>
          <span class="jump-to-detail">查看详情 &gt;</span>
        </div>
      </div>
      <div class="login-form-wrap">
        <div class="wrapper">
          <div class="login-qr-code method">
            <div class="login-qr-code-header">
              扫码登录
            </div>
            <div class="login-qr-code-content">
              qrCode
            </div>
            <div class="login-qr-code-footer">
              <div class="methods-text">
                使用<span class="methods">阿里云APP/支付宝/钉钉</span>
              </div>
              <div class="methods-text hover-orange">
                下载阿里云APP，上云更轻松
              </div>
            </div>
          </div>
          <div class="login-entry method">
            <div class="tabs-nav">
              <div
                v-for="tab in tabData"
                :key="tab.name"
                @click="switchTab(tab)"
                class="tabs-item"
                :class="{active: isActive === tab.name }"
              >
                <div class="tabs-item-text">
                  {{ tab.name }}
                </div>
              </div>
            </div>
            <div class="tabs-content">
              <component :is="currentTab.tabComp" />
            </div>
            <div class="third-party-login-wrap">
              <div class="sc-bdvvtL eSqHXk">
                <div class="third-party-login-text">
                  其他方式
                </div>
                <div class="third-parties">
                  <div class="third-party-login footer-item">
                    <div class="third-party-login-link">
                      <svg-icon
                        name="alipay"
                        :width="'24px'"
                        :height="'34px'"
                        :y="0"
                        color="#08f"
                      />
                    </div>
                    <div class="third-party-login-link">
                      <svg-icon
                        name="damailogo"
                        width="24px"
                        height="34px"
                        :y="-2"
                        color="#08f"
                      />
                    </div>
                  </div>
                  <div class="ram-login footer-item">
                    <span><div class="ram-login-text">RAM用户</div></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="protocol">
          <div class="sc-eCImPb juxDxC">
            登录视为您已同意<span class="hover-orange"><a
              href="javascript:;"
              target="_blank"
              class="protocol"
            >第三方账号绑定协议</a>、<a
              href="javascript:;"
              target="_blank"
              class="protocol"
            >服务条款</a>、<a
              href="javascript:;"
              target="_blank"
              class="protocol"
            >隐私政策</a></span>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      222
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, markRaw } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Login from '@/components/Login/index.vue'
import LoginPhone from '@/components/LoginPhone/index.vue'
type tabType = {name: string, tabComp: any}
type Comp = Pick<tabType, 'tabComp'>

const tabData = reactive<tabType[]>([
  {
    name: '账号登录',
    tabComp: markRaw(Login)
  },
  {
    name: '手机号登录',
    tabComp: markRaw(LoginPhone)
  }
])

const isActive = ref('账号登录')
const currentTab = reactive<Comp>({
  tabComp: tabData[0].tabComp
})

const switchTab = (tab: tabType) => {
  currentTab.tabComp = tab.tabComp
  isActive.value = tab.name
}
</script>
<style src="./index.scss" scoped>

</style>
